const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    if (!req.headers.authorization || !token) {
      throw {
        status: 401,
        message: "Token is invalid or not provided",
      };
    }
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        throw {
          status: 401,
          message: "Token invalid",
        };
      }
      req.user = decoded;
    });
    next();
  } catch (err) {
    next(err);
  }
};
