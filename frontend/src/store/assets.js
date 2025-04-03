import { fetch } from "./csrf";

const LOAD_ALL = "assets/GET_ALL";
const LOAD_LIVE_QUOTES = "assets/LOAD_LIVE_QUOTES";

const load_all = (assets) => ({
  type: LOAD_ALL,
  payload: assets,
});

const loadLiveQuotes = (quotes) => ({
  type: LOAD_LIVE_QUOTES,
  payload: quotes,
});

export const getAllAssets = () => async (dispatch) => {
  const res = await fetch(`/api/assets/`);

  res.data.forEach((asset) => {
    asset.quote = JSON.parse(asset.quote);
    asset.assetDetails = JSON.parse(asset.assetDetails);
  });
  dispatch(load_all(res.data));
};
export const getAssetsLiveQuotes = (assets) => async (dispatch) => {
  const res = await fetch(`/api/coinmarketcapAPI/assets/livequotes`, {
    method: "PATCH",
    body: JSON.stringify(assets),
  });

  dispatch(loadLiveQuotes(res.data));
};

const initialState = {};
const assetsReducer = (state = initialState, action) => {
  const newState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case LOAD_ALL: {
      action.payload.forEach((asset) => {
        newState[asset.id] = asset;
      });
      return newState;
    }
    case LOAD_LIVE_QUOTES: {
      for (let key in newState) {
        newState[key].quote = action.payload[newState[key].cmcId].quote;
      }
      return newState;
    }
    default:
      return state;
  }
};
export default assetsReducer;
