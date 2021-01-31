import { fetch } from "./csrf";

const LOAD = "watchlist/LOAD";
const ADD_ONE = "watchlist/ADD_ONE";
const REMOVE_ONE_ASSET = "watchlist/REMOVE_ONE_ASSET";

const load = (watchlist) => ({
  type: LOAD,
  payload: watchlist,
});

const addOne = (watchlist) => ({
  type: ADD_ONE,
  payload: watchlist,
});

const removeOneAsset = (watchlist) => ({
  type: REMOVE_ONE_ASSET,
  payload: watchlist,
});

export const getWatchlist = (user) => async (dispatch) => {
  const responseUser = await fetch(`/api/users/${user.id}`);

  const watchlistId = responseUser.data.Watchlists[0].id;

  const res = await fetch(`/api/watchlists/${watchlistId}`);

  let retObj = {};
  res.data.Assets.forEach((asset) => {
    retObj[asset.id] = asset;
  });

  await dispatch(load(retObj));
};

export const removeOneFromWatchlist = (watchlistId, assetId) => async (
  dispatch
) => {
  const res = await fetch(
    `/api/watchlists/${watchlistId}/remove-asset/${assetId}`,
    {
      method: "DELETE",
    }
  );

  dispatch(removeOneAsset({}));
};

const initialState = {};

const watchlistReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case LOAD: {
      newState = Object.assign({ ...action.payload }, state);
      return newState;
    }
    case REMOVE_ONE_ASSET: {
      return state;
    }
    default:
      return state;
  }
};

export default watchlistReducer;
