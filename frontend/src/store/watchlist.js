import { fetch } from "./csrf";

const LOAD = "watchlist/LOAD";
const ADD_ONE = "watchlist/ADD_ONE";
const REMOVE_ONE = "watchlist/REMOVE_ONE";

const load = (watchlist) => ({
  type: LOAD,
  payload: watchlist,
});

const addOne = (asset) => ({
  type: ADD_ONE,
  payload: asset,
});

const removeOne = (asset) => ({
  type: REMOVE_ONE,
  payload: asset,
});

export const getWatchlist = (user) => async (dispatch) => {
  const responseUser = await fetch(`/api/users/${user.id}`);

  const responseWatchlist = await fetch(
    `/api/watchlists/${responseUser.data.Watchlists[0].id}`
  );
  console.log(responseWatchlist);
  dispatch(load(responseWatchlist.data));
};

const initialState = {};

const watchlistReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case LOAD: {
      newState = Object.assign({}, state);
      newState.watchlist = action.payload;
      return newState;
    }
    default:
      return state;
  }
};

export default watchlistReducer;
