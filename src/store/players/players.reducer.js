import {
  FETCH_PLAYERS,
  FETCH_PLAYERS_SUCCESS,
  FETCH_PLAYERS_FAILURE,
} from "./players.types";

export const initialState = {
  players: [],
  currentPage: 0,
  error: null,
  loading: false,
  first: false, // This is used to avoid the useEffect to be triggered rather than first time
  totalPages: 10,
};

const playersReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_PLAYERS:
      return {
        ...state,
        currentPage: state.currentPage + 1,
        loading: true,
        first: true,
      };
    case FETCH_PLAYERS_SUCCESS:
      return {
        ...state,
        players: [...state.players, ...payload.data],
        totalPages: payload.meta.total_pages,
        loading: false,
      };
    case FETCH_PLAYERS_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export default playersReducer;
