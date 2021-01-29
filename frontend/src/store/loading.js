const SET_IS_ASSETS_LOADED = "loading/setisAssetsLoaded";
const SET_IS_WATCHLISTS_LOADED = "loading/setisWatchlistsLoaded";

const setisAssetsLoaded = (isLoaded) => {
  return {
    type: SET_IS_ASSETS_LOADED,
    payload: isLoaded,
  };
};
const setisWatchlistsLoaded = (isLoaded) => {
  return {
    type: SET_IS_WATCHLISTS_LOADED,
    payload: isLoaded,
  };
};

const initialState = { isWatchlistsLoaded: false, isAssetsLoaded: false };

const loadingReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case SET_IS_ASSETS_LOADED: {
      newState = Object.assign({}, state);
      state.isAssetsLoaded = action.payload;
      return newState;
    }
    case SET_IS_WATCHLISTS_LOADED: {
      newState = Object.assign({}, state);
      state.isWatchlistsLoaded = action.payload;
      return newState;
    }
    default:
      return state;
  }
};
