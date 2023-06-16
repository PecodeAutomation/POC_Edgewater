import { Credentials } from "../interfaces/Credentials";

//XXX: visible only for testing purposes
const STANDART_USER = process.env.USER_NAME || "qa_demo"
const PASSWORD = process.env.USER_PASSWORD || "a12345Z!"

export const standartUserCredentials: Credentials = {
    userName: STANDART_USER,
    password: PASSWORD
}

export const invalidCredentials: Credentials = {
    userName: "test",
    password: "test"
}

