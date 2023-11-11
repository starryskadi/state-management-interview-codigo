import { combineReducers } from "redux";
import usersReducer from "./users/users.reducer";
import playersReducer from "./players/players.reducer";
import teamsReducer from "./teams/teams.reducer";

const rootReducers = combineReducers({
  users: usersReducer,
  players: playersReducer,
  teams: teamsReducer,
});

export default rootReducers;
