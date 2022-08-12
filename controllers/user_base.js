class UserController {
  constructor() {
    if (this.constructor == UserController) {
      throw new Error("Abstract classes can't be instantiated.");
    }
  }

  auth(req, res, next) {
    throw new Error("Method 'say()' must be implemented.");
    // return {
    //   signIn() {
        
    //   },
    //   signUp() {
    //     throw new Error("Method 'say()' must be implemented.");
    //   },
    // };
  }
  
}

module.exports = UserController