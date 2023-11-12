import { USER_LOGIN, USER_LOGOUT } from "./users.types";

const { createAction } = require("@src/utils/reducer.utils");

export const loginUser = (user) => createAction(USER_LOGIN, user);
export const logoutUser = () => createAction(USER_LOGOUT);
