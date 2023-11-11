import { createAction } from "@src/utils/reducer.utils";

import {
  FETCH_PLAYERS,
  FETCH_PLAYERS_SUCCESS,
  FETCH_PLAYERS_FAILURE,
} from "./players.types";

export const fetchPlayers = (page) => createAction(FETCH_PLAYERS, page);
export const fetchPlayersSuccess = (data) =>
  createAction(FETCH_PLAYERS_SUCCESS, data);
export const fetchPlayersFailure = (error) =>
  createAction(FETCH_PLAYERS_FAILURE, error);
