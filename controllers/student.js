

class StudentController extends UserController {
  auth(req, res, next) {
    return {
      signIn() {
        console.log("sign in");
      },
      signUp() {
        console.log("sign up");
      },
    };
  }
}

module.exports = StudentController