const sendEmail = require("../services/email_service");
const jwt = require("jsonwebtoken");
const addUser = require("../services/add_user_service");
const { User, AdminBio, StudentBio } = require("../models");
const bcrypt = require("bcryptjs");
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
          const user = await User.findOne({
            where: {
              email,
            },
          });
          
          if(!user) return res.status(401).json({
            message: "Invalid email or password"
          })

          if (bcrypt.compareSync(password, user.password)) {
            const token = jwt.sign({
              id: user.id,
              email: user.email,
            }, process.env.VERIF_KEY);
            return res.send({
              message: "Sign In Success",
              token,
            });
          }

          return res.status(401).json({
            message: "Invalid email or password"
          })
        } catch (error) {
          next(error);
        }
      },
      async signUp(req, res, next) {
        try {
          const { name, email, password } = req.body;
          const salt = bcrypt.genSaltSync(10);
          const hashedFields = {
            name,
            email,
            password,
            role,
          };
          const tokenizedData = jwt.sign(hashedFields, process.env.VERIF_KEY);
          const emailNotifier = await sendEmail(
            process.env.SMTP_USERNAME,
            email,
            "Confirm Your Account",
            `
            Clink this link below to verify your account
            https://localhost:3000/auth/verif-email-student/${tokenizedData}
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
          // const { userEmail } = req.body;
          const { name, email, password, role } = jwt.decode(credential);
          const userCreated = await addUser({
            email,
            name,
            password,
            role,
          });
          res.status(201).json(userCreated);
        } catch (error) {
          next(error);
        }
      },
    };
  }

  getBio() {
    return {
      getBioAdmin: this.#getBioAdmin,
      getBioStudent: this.#getBioStudent,
    };
  }

  async #getBioAdmin(req, res, next) {
    const { id } = req.user;
    try {
      const biodata = await AdminBio.findOne({
        where: {
          userId: id,
        },
        include: {
          model: User,
        },
      });
      res.send(biodata);
    } catch (error) {
      next(error);
    }
  }

  async #getBioStudent(req, res, next) {
    const { id } = req.user;
    try {
      const biodata = await StudentBio.findOne({
        where: {
          userId: id,
        },
        include: {
          model: User,
        },
      });
      res.send(biodata);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = UserController;
