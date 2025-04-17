import express from "express";
import { getUsersForSideBar } from "../controller/userController.js";
import protectRoute from "../middleware/protectRoute.js";

const userRouter = express.Router();

userRouter.get("/", protectRoute, getUsersForSideBar);

export default userRouter;
