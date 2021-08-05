import config from "../config";
import jwt from "jsonwebtoken";

export const login = async (req, res) => {
  const { user } = req.body;

  jwt.sign({ user }, config.privateKey, (error, token) => {
    res.json({ token });
  });
};

export const tokenValidation = (req, res, next) => {
  const beareHeader = req.headers["authorization"];

  const { user } = req.body;

  if (user !== undefined) return next();

  if (typeof beareHeader !== undefined) {
    const beareToken = beareHeader.split(" ")[1];
    req.token = beareToken;
    next();
  } else {
    res.status(401);
  }
};

export const verifyToken = (req) => {
  console.log(req.token);
  const validared = jwt.verify(req.token, config.privateKey, (error) => {
    if (error) {
      console.log(error);
      return false;
    } else {
      return true;
    }
  });
  return validared;
};
