import app from "./app";
import "./database/connectiosn";

app.listen(app.get("port"));

console.log("Server on port", app.get("port"));
