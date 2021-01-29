import { fetch } from "./csrf";

const LOAD = "watchlist/LOAD";
const ADD_ONE = "watchlist/ADD_ONE";
const REMOVE_ONE = "watchlist/REMOVE_ONE";

const load = (watchlists) => ({
  type: LOAD,
  payload: watchlists,
});

const addOne = (asset) => ({
  type: ADD_ONE,
  payload: asset,
});

const removeOne = (asset) => ({
  type: REMOVE_ONE,
  payload: asset,
});

export const getWatchlists = (user) => async (dispatch) => {
  const responseUser = await fetch(`/api/users/${user.id}`);

  const watchlists = responseUser.data.Watchlists;

  //attach correct Assets in an array to watchlist
  watchlists.forEach(async (watchlist) => {
    const res = await fetch(`/api/watchlists/${watchlist.id}`);
    watchlist.Assets = res.data.Assets;
  });

  dispatch(load(watchlists));
};

const initialState = {};

const watchlistReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case LOAD: {
      newState = Object.assign({}, state);
      action.payload.forEach((watchlist) => {
        newState[watchlist.id] = watchlist;
      });
      return newState;
    }
    default:
      return state;
  }
};

export default watchlistReducer;
