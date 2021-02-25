import { fetch } from "./csrf";
import { setportfolioId, setportfoliometa } from "./loading";

const LOAD = "portfolio/LOAD";
const SELL_ASSET = "portfolio/SELL_ASSET";
const BUY_ASSET = "portfolio/BUY_ASSET";

const load = (portfolio) => ({
  type: LOAD,
  payload: portfolio,
});
const sellAsset = () => ({
  type: SELL_ASSET,
  payload: "notsure",
});
const buyAsset = (payload) => ({
  type: BUY_ASSET,
  payload: payload,
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
  metaObj["cashUSD"] = res.data.cashUSD;
  await dispatch(setportfoliometa(metaObj));

  await dispatch(load(retObj));
};

export const sellPortfolioAsset = (
  amount,
  priceUSD,
  portfolioId,
  assetId
) => async (dispatch) => {};
export const buyPortfolioAsset = (
  amount,
  priceUSD,
  portfolioId,
  assetId
) => async (dispatch) => {
  const res = await fetch(`/api/portfolios/${portfolioId}/buy`, {
    method: "PUT",
    body: JSON.stringify({
      amount: amount,
      priceUSD: priceUSD,
      assetId: assetId,
    }),
  });
};

const initialState = {};
const portfolioReducer = (state = initialState, action) => {
  let newState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case LOAD: {
      newState = Object.assign({ ...action.payload }, newState);
      return newState;
    }
    case SELL_ASSET: {
    }
    case BUY_ASSET: {
    }
    default:
      return state;
  }
};

export default portfolioReducer;
