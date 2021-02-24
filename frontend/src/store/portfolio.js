import { fetch } from "./csrf";
import { setportfolioId, setportfoliometa } from "./loading";

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
      quantityOfAsset: parseFloat(asset.PortfolioAssetsJoins.quantityOfAsset),
      costAvg: parseFloat(asset.PortfolioAssetsJoins.costAvg),
      history: asset.PortfolioAssetsJoins.history.map((ele) => JSON.parse(ele)),
    };
  });

  const metaObj = {};
  metaObj["createdAt"] = res.data.createdAt;
  metaObj["createdByUserId"] = res.data.createdByUserId;
  metaObj["followedByUsers"] = res.data.followedByUsers;
  metaObj["id"] = res.data.id;
  metaObj["name"] = res.data.name;
  await dispatch(setportfoliometa(metaObj));

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
