import { fetch } from "./csrf";

const LOAD_ALL = "assets/GET_ALL";

const load_all = (assets) => ({
  type: LOAD_ALL,
  payload: assets,
});

export const getAllAssets = () => async (dispatch) => {
  const res = await fetch(`/api/assets/`);

  res.data.forEach((asset) => {
    asset.quote = JSON.parse(asset.quote);
    asset.assetDetails = JSON.parse(asset.assetDetails);
  });

  dispatch(load_all(res.data));
};

const initialState = {};
const assetsReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case LOAD_ALL: {
      newState = Object.assign({}, state);
      action.payload.forEach((asset) => {
        newState[asset.id] = asset;
      });
      return newState;
    }
    default:
      return state;
  }
};
export default assetsReducer;
