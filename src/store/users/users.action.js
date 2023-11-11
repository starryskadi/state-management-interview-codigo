import { USER_LOGIN } from "./users.types";

const { createAction } = require("@src/utils/reducer.utils");

export const setCurrentUser = (user) => createAction(USER_LOGIN, user);
