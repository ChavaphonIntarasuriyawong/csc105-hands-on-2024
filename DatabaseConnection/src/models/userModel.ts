import { db } from "../index.js"

const isDuplicate = async( firstName: string, lastName: string ) => {
    const user = await db.user.findFirst({
        where: {
            firstName: firstName,
            lastName: lastName,
        },
    });
    return user;
}

const createUser = async( firstName: string, lastName: string ) => {
    const user = await db.user.create({
        data: {
            firstName: firstName,
            lastName: lastName,
        },
    });
    return user;
}

const editUser = async(userId: number,  firstName: string, lastName: string ) => {
    const user = await db.user.update({
        where: {
            id: userId,
        },
        data: {
            firstName: firstName,
            lastName: lastName,
        }
    })

    return user;
}
const getAllUser = async() => {
    const user = await db.user.findMany({});
    return user;
}

export { isDuplicate,createUser, editUser, getAllUser };