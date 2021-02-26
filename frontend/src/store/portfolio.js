import { fetch } from "./csrf";
import {
  setportfolioId,
  setportfoliometa,
  updatePortfolioMetaCash,
} from "./loading";

const LOAD = "portfolio/LOAD";
const SELL_ASSET = "portfolio/SELL_ASSET";
const BUY_ASSET = "portfolio/BUY_ASSET";

const load = (portfolio) => ({
  type: LOAD,
  payload: portfolio,
});
const sellAsset = (PAJEntry) => ({
  type: SELL_ASSET,
  payload: PAJEntry,
});
const buyAsset = (PAJEntry) => ({
  type: BUY_ASSET,
  payload: PAJEntry,
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
  metaObj["cashUSD"] = parseFloat(res.data.cashUSD);
  await dispatch(setportfoliometa(metaObj));

  await dispatch(load(retObj));
};

export const sellPortfolioAsset = (
  sessionUser,
  amount,
  priceUSD,
  portfolioId,
  assetId
) => async (dispatch) => {
  const res = await fetch(`api/portfolios/${portfolioId}/sell`, {
    method: "PUT",
    body: JSON.stringify({
      amount: amount,
      priceUSD: priceUSD,
      assetId: assetId,
    }),
  });

  dispatch(updatePortfolioMetaCash(res.data[0].cashUSD));
  console.log(res.data[1]);
  dispatch(sellAsset(res.data[1]));
};
export const buyPortfolioAsset = (
  sessionUser,
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

  dispatch(updatePortfolioMetaCash(res.data[0].cashUSD));
  dispatch(buyAsset(res.data[1]));
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
      if (action.payload.portfolioId) {
        //if owner still have some amount of asset
        newState[action.payload.assetId].quantityOfAsset =
          action.payload.quantityOfAsset;
        newState[
          action.payload.assetId
        ].history = action.payload.history.map((ele) => JSON.parse(ele));
      } else {
        //owner owns zero of asset
        delete newState[action.payload.assetId];
        console.log(newState);
      }
      return newState;
    }
    case BUY_ASSET: {
      if (newState[action.payload.assetId]) {
        newState[action.payload.assetId].quantityOfAsset =
          action.payload.quantityOfAsset;
        newState[action.payload.assetId].costAvg = action.payload.costAvg;
        newState[
          action.payload.assetId
        ].history = action.payload.history.map((ele) => JSON.parse(ele));
      } else {
        newState[action.payload.assetId] = {
          id: action.payload.assetId,
          portfolioId: action.payload.portfolioId,
          quantityOfAsset: action.payload.quantityOfAsset,
          costAvg: action.payload.costAvg,
          history: [JSON.parse(action.payload.history)],
        };
      }
      return newState;
    }
    default:
      return state;
  }
};

export default portfolioReducer;
