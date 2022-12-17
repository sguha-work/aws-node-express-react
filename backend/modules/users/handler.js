//const serverless = require("serverless-http");
import serverless from 'serverless-http';
import express from 'express';
import bodyParser from 'body-parser';
import UserController from "./controllers/user_controller.js";
import ErrorHandler from './controllers/error_controller.js';
const eh = ErrorHandler.getInstance();
const app = express();
app.use(bodyParser.json());
const userController = UserController.instance();
app.get("/users", async (req, res, next) => {
  try {
    const users = await userController.findAllUsers();
    return res.status(200).json({
      data: users,
    });
  } catch (error) {
    response.send(eh.handle(error));
  }
});
app.post("/users", async (request, response) => {// create, create new teacher
  let responseObj = {};
  responseObj.status = 201;
  responseObj.data = {};
  responseObj.message = '';
  try {
    console.log(request.body);
    const result = await userController.createUser(request.body);
    responseObj.data = result;
    response.send(responseObj);
  } catch (error) {
    response.send(eh.handle(error));
  }
});

app.use((req, res, next) => {
  return res.status(404).json({
    error: "Not Found",
  });
});

const handler = serverless(app);
export default handler;
