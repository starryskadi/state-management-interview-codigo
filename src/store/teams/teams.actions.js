import { createAction } from "@src/utils/reducer.utils";
import {
  CREATE_TEAM,
  UPDATE_TEAM,
  REMOVE_TEAM,
  ADD_PLAYER_TO_TEAM,
  REMOVE_PLAYER_FROM_TEAM,
} from "./teams.types";

export const createTeam = (team) => createAction(CREATE_TEAM, team);

export const updateTeam = (team) => createAction(UPDATE_TEAM, team);

export const removeTeam = (teamId) => createAction(REMOVE_TEAM, teamId);

export const addPlayerToTeam = (player, teamId) => ({
  type: ADD_PLAYER_TO_TEAM,
  payload: { player, teamId },
});

export const removePlayerFromTeam = (playerId, teamId) => ({
  type: REMOVE_PLAYER_FROM_TEAM,
  payload: { playerId, teamId },
});
