import { USER_LOGIN, USER_LOGOUT } from "./users.types";

const initialState = {
  isUserLogged: false,
  username: "",
};

const usersReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case USER_LOGIN:
      return { ...state, isUserLogged: true, username: payload.username };
    case USER_LOGOUT:
      return { ...state, isUserLogged: false, username: null };
    default:
      return state;
  }
};

export default usersReducer;
