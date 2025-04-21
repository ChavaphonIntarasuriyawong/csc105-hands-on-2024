import type { Context } from "hono";
// @ts-ignore
import * as userModel from "../models/userModel.ts";
import * as todoModel from "../models/todoModel.js";

type createUserBody = {
    firstName: string;
    lastName: string;
};

type editUserBody = {
    id: number;
    firstName: string;
    lastName: string;
}
const createUser = async (c: Context) => {
    try {
        const body = await c.req.json<createUserBody>();
        if (!body.firstName || !body.lastName)
            return c.json(
                {
                    success: false,
                    data: null,
                    msg: "Missing required fields",
                },
                400
            );
        if (await userModel.isDuplicate(body.firstName, body.lastName)) {
            return c.json({
                success: false,
                data: null,
                msg: "firstName or lastName is duplicated",
            });
        }
        const newUser = await userModel.createUser(
            body.firstName,
            body.lastName
        );
        return c.json({
            success: true,
            data: newUser,
            msg: "Created new User!",
        });
    } catch (e) {
        return c.json(
            {
                success: false,
                data: null,
                msg: `${e}`,
            },
            500
        );
    }
};

const editUser = async (c: Context) => {
    try {
        const body = await c.req.json<editUserBody>();
        if (!body.firstName || !body.lastName)
            return c.json(
                {
                    success: false,
                    data: null,
                    msg: "Missing required fields",
                },
                400
            );
        const newUser = await userModel.editUser(
            body.id,
            body.firstName,
            body.lastName
        );
        return c.json({
            success: true,
            data: newUser,
            msg: "new name for User",
        });
    } catch (e) {
        return c.json(
            {
                success: false,
                data: null,
                msg: `${e}`,
            },
            500
        );
    }
}

const getAllUsers = async (c: Context) => {
    try {
        const users = await userModel.getAllUser()
        return c.json(users)
    }
    catch (e) {
        return c.json(
            {
                success: false,
                data: null,
                msg: `${e}`,
            },
            500
        );
    }
}
export { createUser, editUser, getAllUsers };