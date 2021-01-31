const SET_IS_ASSETS_LOADED = "loading/setisAssetsLoaded";
const SET_IS_WATCHLISTS_LOADED = "loading/setisWatchlistsLoaded";
const SET_IS_PORTFOLIO_LOADED = "loading/setisPortfolioLoaded";
const SET_WATCHLISTID = "loading/setwatchlistId";

export const setisAssetsLoaded = (isLoaded) => {
  return {
    type: SET_IS_ASSETS_LOADED,
    payload: isLoaded,
  };
};
export const setwatchlistId = (watchlistId) => {
  return {
    type: SET_WATCHLISTID,
    payload: watchlistId,
  };
};
export const setisWatchlistsLoaded = (isLoaded) => {
  return {
    type: SET_IS_WATCHLISTS_LOADED,
    payload: isLoaded,
  };
};
export const setisPortfolioLoaded = (isLoaded) => {
  return {
    type: SET_IS_PORTFOLIO_LOADED,
    payload: isLoaded,
  };
};

const initialState = { isWatchlistsLoaded: false, isAssetsLoaded: false };

const loadingReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case SET_WATCHLISTID: {
      newState = Object.assign({}, state);
      newState.watchlistId = action.payload;
      return newState;
    }
    case SET_IS_ASSETS_LOADED: {
      newState = Object.assign({}, state);
      newState.isAssetsLoaded = action.payload;
      return newState;
    }
    case SET_IS_WATCHLISTS_LOADED: {
      newState = Object.assign({}, state);
      newState.isWatchlistsLoaded = action.payload;
      return newState;
    }
    case SET_IS_PORTFOLIO_LOADED: {
      newState = Object.assign({}, state);
      newState.isPortfolioLoaded = action.payload;
      return newState;
    }
    default:
      return state;
  }
};

export default loadingReducer;
