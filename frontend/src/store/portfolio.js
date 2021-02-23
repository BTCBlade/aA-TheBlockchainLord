import { fetch } from "./csrf";
import { setportfolioId } from "./loading";

const LOAD = "portfolio/LOAD";

const load = (portfolio) => ({
  type: LOAD,
  payload: portfolio,
});

export const getPortfolio = (user) => async (dispatch) => {
  const responseUser = await fetch(`/api/users/${user.id}`);

  const portfolioId = responseUser.data.Portfolios[0].id;
  dispatch(setportfolioId(portfolioId));

  const res = await fetch(`/api/portfolios/${portfolioId}`);

  const retObj = {};
  res.data.Assets.forEach((asset) => {
    retObj[asset.id] = {
      id: asset.id,
      cmcId: asset.cmcId,
      symbol: asset.symbol,
      portfolioId: asset.PortfolioAssetsJoins.portfolioId,
      quantityOfAsset: asset.PortfolioAssetsJoins.quantityOfAsset,
      costAvg: asset.PortfolioAssetsJoins.costAvg,
    };
  });

  retObj["meta"] = {};
  retObj["meta"]["createdAt"] = res.data.createdAt;
  retObj["meta"]["createdByUserId"] = res.data.createdByUserId;
  retObj["meta"]["followedByUsers"] = res.data.followedByUsers;
  retObj["meta"]["id"] = res.data.id;
  retObj["meta"]["name"] = res.data.name;

  await dispatch(load(retObj));
};

const initialState = {};
const portfolioReducer = (state = initialState, action) => {
  let newState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case LOAD: {
      newState = Object.assign({ ...action.payload }, newState);
      return newState;
    }
    default:
      return state;
  }
};

export default portfolioReducer;
