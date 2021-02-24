const SET_IS_ASSETS_LOADED = "loading/setisAssetsLoaded";
const SET_IS_WATCHLISTS_LOADED = "loading/setisWatchlistsLoaded";
const SET_IS_PORTFOLIO_LOADED = "loading/setisPortfolioLoaded";
const SET_WATCHLISTID = "loading/setwatchlistId";
const SET_PORTFOLIOID = "loading/setportfolioId";
const SET_PORTFOLIO_META = "loading/setportfoliometa";

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

export const setportfolioId = (portfolioId) => {
  return {
    type: SET_PORTFOLIOID,
    payload: portfolioId,
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
export const setportfoliometa = (metaObj) => {
  return {
    type: SET_PORTFOLIO_META,
    payload: metaObj,
  };
};

const initialState = { isWatchlistsLoaded: false, isAssetsLoaded: false };

const loadingReducer = (state = initialState, action) => {
  const newState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case SET_WATCHLISTID: {
      newState.watchlistId = action.payload;
      return newState;
    }
    case SET_PORTFOLIOID: {
      newState.portfolioId = action.payload;
      return newState;
    }
    case SET_IS_ASSETS_LOADED: {
      newState.isAssetsLoaded = action.payload;
      return newState;
    }
    case SET_IS_WATCHLISTS_LOADED: {
      newState.isWatchlistsLoaded = action.payload;
      return newState;
    }
    case SET_IS_PORTFOLIO_LOADED: {
      newState.isPortfolioLoaded = action.payload;
      return newState;
    }
    case SET_PORTFOLIO_META: {
      newState.portfoliometa = action.payload;
      return newState;
    }
    default:
      return state;
  }
};

export default loadingReducer;
