const express = require("express");

const res = require("express/lib/response");
const connect=require("./src/config/db")

const app = express();
app.use(express.json());
const userController=require("./src/controllers/user.contoller")
const studentControlller=require("./src/controllers/student.controller")
const evaluationController=require("./src/controllers/evaluation.controller")

app.use("/users",userController)
app.use("/students",studentControlller)
app.use("/evaluations",evaluationController)




app.listen(2345, async () => {
  await connect();
  console.log("listening to port 2345");
});
