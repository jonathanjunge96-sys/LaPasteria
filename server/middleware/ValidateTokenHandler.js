const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");

// Vårt middleware som validerar JWT-tokens

const validateToken = asyncHandler(async (req, res, next) => {
  let token;
  let authHeader = req.headers.authorization;

  if (authHeader && authHeader.startsWith("Bearer")) { // Kollar tecken efter Bearer
    token = authHeader.split(" ")[1];
    if (!token) { // Är token null -> Fortsätt som gäst
      return next();
    }
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
      if (err) {
        return next(); // Kollar giltig token mot vår nyckel i .env. om ogiltig = gäst
      }
      req.user = decoded.user;
      next();
    });
  } else {
    next();
  }
});

module.exports = validateToken;
