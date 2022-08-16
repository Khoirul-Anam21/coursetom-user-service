class UserController {
  constructor() {
    if (this.constructor == UserController) {
      throw new Error("Abstract classes can't be instantiated.");
    }
  }

  auth() {
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
          const { email, name, password } = req.body;
          // code here
        } catch (error) {
          next(error);
        }
      },
    };
  }
}

module.exports = UserController;
