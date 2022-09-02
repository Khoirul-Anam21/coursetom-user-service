const jwt = require("jsonwebtoken");

module.exports = (req, _res, next) => {
  try {
    if (!req.headers.authorization ) throw {
      status: 401,
      message: "Token is invalid or not provided",
    };
    const token = req.headers.authorization.split(" ")[1];
    if (!token) {
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
