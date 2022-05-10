const { Router } = require("express");
const { addUser} = require("./userController");
const { hashPass } = require("../middleware");
const userRouter = Router();

userRouter.post("/user", hashPass, addUser, listUsers, updateUser, deleteUsers);

module.exports = userRouter;

//use http verb post to add data to our user endpoint
movieRouter.post("/user", addUser);
movieRouter.get("/user", listUsers);
movieRouter.put("/user", updateUser);
movieRouter.put("/user", deleteUsers);

module.exports= movieRouter; 