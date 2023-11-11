import { USER_LOGIN } from "./users.types";

const initialState = {
  isUserLogged: false,
  username: "",
};

const usersReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case USER_LOGIN:
      return { ...state, isUserLogged: true, username: payload.username };
    default:
      return state;
  }
};

export default usersReducer;
