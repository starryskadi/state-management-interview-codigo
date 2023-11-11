const KEY = "persist/storage";
import { initialState } from "../store/players/players.reducer";
import { initialState as initialStateTeam } from "../store/teams/teams.reducer";

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem(KEY);
    if (!serializedState) return undefined;
    return JSON.parse(serializedState);
  } catch (e) {
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    const {
      currentPage,
      totalPages,
      error,
      loading,
      players,
      first,
      ...statePlayers
    } = state.players;

    const { error: errorTeams, ...stateTeams } = state.teams;

    const stateToSave = {
      users: state.users,
      teams: { ...initialStateTeam, ...stateTeams },
      players: { ...initialState, ...statePlayers },
    };

    const serializedState = JSON.stringify(stateToSave);

    localStorage.setItem(KEY, serializedState);
  } catch (e) {
    // Ignore
  }
};
