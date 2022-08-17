const sendEmail = require("../services/email_service");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const addUser = require("../services/add_user_service");
const Cryptr = require("cryptr");
const cryptr = new Cryptr('coursetom');
class UserController {
  constructor(role) {
    this.role = role;
    if (this.constructor == UserController) {
      throw new Error("Abstract classes can't be instantiated.");
    }
  }

  auth() {
    const role = this.role;
    return {
      async signIn(req, res, next) {
        try {
          const { email, password } = req.body;
          // code here
        } catch (error) {
          next(error);
        }
      },
      async signUp(req, res, next) {
        try {
          const { name, email, password } = req.body;
          const hashedFields = [
            name,
            cryptr.encrypt(email),
            cryptr.encrypt(password),
            role,
          ];
          const generatedLink = hashedFields.join("-");
          const emailNotifier = await sendEmail(
            process.env.SMTP_USERNAME,
            email,
            "Confirm Your Account",
            `
            Clink this link below to verify your account
            https://localhost:3000/auth/verif-email-student/${generatedLink}
          `,
            null
          );
          res.json(emailNotifier);
        } catch (error) {
          next(error);
        }
      },
      async createAccount(req, res, next) {
        try {
          const { credential } = req.params;
          const { email } = req.body;
          const [name, hashedEmail, hashedPassword, role] =
            credential.split("-");
          if (cryptr.decrypt(hashedEmail) !== email)
            throw {
              status: 401,
              message: "Invalid email",
            };
          const userCreated = await addUser({
            email,
            name,
            hashedPassword,
            role,
          });
          res.status(201).json(userCreated);
        } catch (error) {
          next(error);
        }
      },
    };
  }
}

module.exports = UserController;
