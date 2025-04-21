import { Hono } from "hono";
// @ts-ignore
import * as todoController from "../controllers/todoController.ts";

const todoRouter = new Hono();
todoRouter.post("/", todoController.createTodo);
todoRouter.get("/", todoController.getTodo);
todoRouter.patch("/",todoController.editTodo);
todoRouter.get("/getAll",todoController.getAllTodo);
todoRouter.patch("/complete",todoController.completeTodo);

export { todoRouter };