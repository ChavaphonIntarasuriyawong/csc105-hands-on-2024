import { Hono } from "hono";
// @ts-ignore
import { userRouter } from "./userRoute.ts";
// @ts-ignore
import { todoRouter } from "./todoRoute.ts";

const mainRouter = new Hono();

mainRouter.route("/users", userRouter);
mainRouter.route("/todos", todoRouter);

export { mainRouter };