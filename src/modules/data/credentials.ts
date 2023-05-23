import { Credentials } from "../interfaces/Credentials";

//XXX: visible only for testing purposes
const STANDART_USER="standard_user"
const PASSWORD="secret_sauce"

export const standartUserCredentials: Credentials = {
    userName: STANDART_USER,
    password: PASSWORD
}

export const invalidCredentials: Credentials = {
    userName: "test",
    password: "test"
}

