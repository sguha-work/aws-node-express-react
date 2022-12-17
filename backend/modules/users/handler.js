//const serverless = require("serverless-http");
import serverless from 'serverless-http';
import express from 'express';
const app = express();
import UserController from "./controllers/user_controller.js";

// app.get("/", (req, res, next) => {
//   return res.status(200).json({
//     message: "Hello from root!",
//   });
// });

// app.get("/hello", (req, res, next) => {
//   return res.status(200).json({
//     message: "Hello from path!",
//   });
// });
app.get("/users", async (req, res, next) => {
  const userController = UserController.instance();
  const users = await userController.findAllUsers();
  return res.status(200).json({
    data: users,
  });
});

app.use((req, res, next) => {
  return res.status(404).json({
    error: "Not Found",
  });
});

const handler = serverless(app);
export default handler;
