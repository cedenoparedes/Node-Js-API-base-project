const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const beareHeader = req.headers["authorization"];
  const { user } = req.body;

  if (user !== undefined) return next();

  if (typeof beareHeader !== "undefined") {
    const beareToken = beareHeader.split(" ")[1];
    req.token = beareToken;
    return next();
  } else {
    return res.sendStatus(401);
  }
};

module.exports = verifyToken;
