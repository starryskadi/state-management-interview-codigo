import { all } from "redux-saga/effects";
import { watchFetchPlayers } from "./players/players.saga";

export default function* rootSaga() {
  yield all([watchFetchPlayers()]);
}
