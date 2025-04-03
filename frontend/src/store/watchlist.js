import { fetch } from "./csrf";
import { setwatchlistId } from "./loading";

const LOAD = "watchlist/LOAD";
const LOAD_LIVE_QUOTES = "watchlist/LOAD_LIVE_QUOTES";
const ADD_ONE_ASSET = "watchlist/ADD_ONE_ASSET";
const REMOVE_ONE_ASSET = "watchlist/REMOVE_ONE_ASSET";
const LOG_OUT = "watchlist/LOG_OUT";

const load = (watchlist) => ({
  type: LOAD,
  payload: watchlist,
});

const loadLiveQuotes = (quotes) => ({
  type: LOAD_LIVE_QUOTES,
  payload: quotes,
});
const removeOneAsset = (newWatchlist) => ({
  type: REMOVE_ONE_ASSET,
  payload: newWatchlist,
});

const addOneAsset = (newWatchlist) => ({
  type: ADD_ONE_ASSET,
  payload: newWatchlist,
});

export const logoutWatchlist = () => {
  return {
    type: LOG_OUT,
    payload: {},
  };
};

export const getWatchlist = (user) => async (dispatch) => {
  const responseUser = await fetch(`/api/users/${user.id}`);

  const watchlistId = responseUser.data.Watchlists[0].id;
  dispatch(setwatchlistId(watchlistId));

  const res = await fetch(`/api/watchlists/${watchlistId}`);

  const retObj = {};
  res.data.Assets.forEach((asset) => {
    retObj[asset.id] = asset;
  });

  await dispatch(load(retObj));
};

export const getLiveWatchlistQuotes = (watchlistId, watchlist) => async (
  dispatch
) => {
  const res = await fetch(`/api/coinmarketcapAPI/watchlist/${watchlistId}`, {
    method: "PATCH",
    body: JSON.stringify(watchlist),
  });
  dispatch(loadLiveQuotes(res.data));
};

export const removeOneFromWatchlist = (watchlistId, assetId) => async (
  dispatch
) => {
  const res = await fetch(`/api/watchlists/${watchlistId}/`, {
    method: "DELETE",
    body: JSON.stringify({ assetId: assetId }),
  });
  if (res.ok) {
    const res = await fetch(`/api/watchlists/${watchlistId}`);
    const retObj = {};
    res.data.Assets.forEach((asset) => {
      retObj[asset.id] = asset;
    });
    dispatch(removeOneAsset(retObj));
  } else {
    throw Error("removeOneFromWatchlist error");
  }
};
export const addOneToWatchlist = (watchlistId, assetId) => async (dispatch) => {
  const res = await fetch(`/api/watchlists/${watchlistId}/`, {
    method: "POST",
    body: JSON.stringify({ assetId: assetId }),
  });
  if (res.ok) {
    if (res.data[1]) {
      // Nothing was found so db created an entry
      const res = await fetch(`/api/watchlists/${watchlistId}`);
      const retObj = {};
      res.data.Assets.forEach((asset) => {
        retObj[asset.id] = asset;
      });

      dispatch(addOneAsset(retObj));
    } else {
      // db already had an entry do nothing?
      return;
    }
  } else {
    throw Error("addOneToWatchlist server sending back error");
  }
};

const initialState = {};

const watchlistReducer = (state = initialState, action) => {
  let newState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case LOAD: {
      newState = Object.assign({ ...action.payload }, newState);
      return newState;
    }
    case REMOVE_ONE_ASSET: {
      newState = Object.assign({}, { ...action.payload });
      return newState;
    }
    case ADD_ONE_ASSET: {
      newState = Object.assign({}, { ...action.payload });
      return newState;
    }
    case LOAD_LIVE_QUOTES: {
      for (let key in newState) {
        newState[key].quote = action.payload[newState[key].cmcId].quote;
      }
      return newState;
    }
    case LOG_OUT: {
      return {};
    }
    default:
      return state;
  }
};

export default watchlistReducer;
