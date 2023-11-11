import {
  CREATE_TEAM,
  UPDATE_TEAM,
  REMOVE_TEAM,
  ADD_PLAYER_TO_TEAM,
  REMOVE_PLAYER_FROM_TEAM,
} from "./teams.types";

import { v4 as uuidv4 } from "uuid";

export const teamInitalState = {
  name: "",
  playerCount: 0,
  region: "",
  country: "",
  players: [],
};

export const initialState = {
  teams: [],
  error: null,
};

const teamsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CREATE_TEAM:
      const teamName = payload.name;
      const teamExists = state.teams.some((team) => team.name === teamName);

      if (teamExists) {
        return {
          ...state,
          error: {
            message: "Team name already exists",
          },
        };
      }

      payload.id = uuidv4();

      return {
        ...state,
        teams: [...state.teams, { ...teamInitalState, ...payload }],
        error: null,
      };

    case UPDATE_TEAM:
      return {
        ...state,
        teams: state.teams.map((team) =>
          team.id === payload.id ? payload : team
        ),
      };
    case REMOVE_TEAM:
      const updatedTeams = state.teams.filter((team) => team.id !== payload);

      return {
        ...state,
        teams: updatedTeams,
      };

    case ADD_PLAYER_TO_TEAM:
      const playerId = payload.player.id;

      const playerExistInAnyTeam = state.teams.filter((team) => {
        const filteredPlayer = team.players.filter(
          (player) => player.id === playerId
        );

        return filteredPlayer.length > 0;
      });

      console.log(playerExistInAnyTeam);

      if (playerExistInAnyTeam.length) {
        return {
          ...state,
          error: {
            message: "Player already exists in teams",
          },
        };
      }
      return {
        ...state,
        teams: state.teams.map((team) =>
          team.id === payload.teamId
            ? { ...team, players: [...team.players, payload.player] }
            : team
        ),
      };

    case REMOVE_PLAYER_FROM_TEAM:
      return {
        ...state,
        teams: state.teams.map((team) =>
          team.id === payload.teamId
            ? {
                ...team,
                players: team.players.filter(
                  (player) => player.id !== payload.playerId
                ),
              }
            : team
        ),
      };

    default:
      return state;
  }
};

export default teamsReducer;
