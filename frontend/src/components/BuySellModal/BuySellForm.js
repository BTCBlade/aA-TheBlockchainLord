import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import {
  getPortfolio,
  sellPortfolioAsset,
  buyPortfolioAsset,
} from "../../store/portfolio";

export default function BuySellForm({ asset, setShowModal }) {
  const dispatch = useDispatch();
  const portfolio = useSelector((state) => state.portfolio);
  const sessionUser = useSelector((state) => state.session.user);
  const portfoliometa = useSelector((state) => state.loading.portfoliometa);
  const assetPrice = asset.quote.USD.price;
  const quantityOfAsset = portfolio[asset.id]
    ? portfolio[asset.id].quantityOfAsset
    : 0;

  const [assetAmount, setAssetAmount] = useState(0);
  const [usdAmount, setUSDAmount] = useState(0);

  const [validationErrors, setValidationErrors] = useState([]);

  useEffect(() => {
    setValidationErrors([]);
    setUSDAmount(assetAmount * assetPrice);
  }, [assetAmount, usdAmount]);

  const handleBuyAsset = async () => {
    await dispatch(
      buyPortfolioAsset(assetAmount, assetPrice, portfoliometa.id, asset.id)
    );
    dispatch(getPortfolio(sessionUser));
  };
  const handleSellAsset = () => {};
  return (
    <div>
      <h3>{asset.symbol} - USD</h3>
      <div>
        <span>USD Balance: {portfoliometa.cashUSD} </span>
        <span>
          {asset.symbol} Balance:{" "}
          {portfolio[asset.id] && portfolio[asset.id].quantityOfAsset}
        </span>
      </div>
      <div>
        <label>asset-amount</label>
        <input
          type="asset-amount"
          value={assetAmount}
          onChange={(e) => setAssetAmount(e.target.value)}
        ></input>
        <button onClick={handleBuyAsset}>Buy</button>
        <button onClick={handleSellAsset}>Sell</button>
        <button>Sell Max</button>
        <button>Buy Max</button>
      </div>
      <div>
        <label>usd-amount</label>
        <input
          type="usd-amount"
          value={usdAmount}
          onChange={(e) => setUSDAmount(e.target.value)}
        ></input>
        <button>Buy</button>
        <button>Sell</button>
      </div>
    </div>
  );
}
