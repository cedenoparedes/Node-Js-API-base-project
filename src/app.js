import express from "express";
import config from "./config";
import productRouters from "./routers/producnt.routes";
import loginRouters, { tokenValidation } from "./routers/login.routes";
import morgan from "morgan";

const app = express();

/// settings
app.set("port", config.port);

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use((req, res, next) => {
  const beareHeader = req.headers["authorization"];
  const { user } = req.body;

  if (user !== undefined) return next();

  if (typeof beareHeader !== "undefined") {
    const beareToken = beareHeader.split(" ")[1];
    req.token = beareToken;
    next();
  } else {
    res.sendStatus(401);
  }
});

//User Routers
app.use(productRouters);
app.use(loginRouters);

export default app;
