import express from "express";
import config from "./config";
import productRoutes from "./routes/producnt.routes";
import morgan from "morgan";
const app = express();

/// settings
app.set("port", config.port);
app.use(morgan("dev"));

//middlewares
// const bodyParser = require('body-parser');
// app.use(bodyParser);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(productRoutes);

export default app;
