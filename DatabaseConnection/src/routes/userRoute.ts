import { Hono } from "hono";
// @ts-ignore
import * as userController from "../controllers/userController.ts";

const userRouter = new Hono();

userRouter.post("/", userController.createUser);
userRouter.patch("/edit", userController.editUser);
userRouter.get("/getalluser", userController.getAllUsers);

export { userRouter };