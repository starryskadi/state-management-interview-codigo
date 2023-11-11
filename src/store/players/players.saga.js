import { call, put, takeLatest, select } from "redux-saga/effects";

import { FETCH_PLAYERS } from "./players.types";
import { fetchPlayersSuccess, fetchPlayersFailure } from "./players.actions";

function* fetchPlayersSaga({ action, payload }) {
  const currentPage = yield select((state) => state.players.currentPage);

  try {
    const response = yield call(
      fetch,
      `https://www.balldontlie.io/api/v1/players?page=${currentPage}&per_page=10`
    );
    const data = yield call([response, "json"]);
    yield put(fetchPlayersSuccess(data));
  } catch (error) {
    yield put(fetchPlayersFailure(error));
  }
}

export function* watchFetchPlayers() {
  yield takeLatest(FETCH_PLAYERS, fetchPlayersSaga);
}
