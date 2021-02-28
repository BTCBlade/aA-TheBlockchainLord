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
    if (assetAmount === 0) {
      return;
    }
    if (usdAmount > portfoliometa.cashUSD) {
      alert("you dont have enough USD to make this purchase");
      return;
    }
    await dispatch(
      buyPortfolioAsset(
        sessionUser,
        assetAmount,
        assetPrice,
        portfoliometa.id,
        asset.id
      )
    );
  };
  const handleSellAsset = async () => {
    if (quantityOfAsset === 0) {
      alert("You dont own any " + asset.symbol);
      return;
    }
    if (assetAmount === 0) {
      alert("You can not sell zero " + asset.symbol);
      return;
    }
    if (assetAmount > quantityOfAsset) {
      setAssetAmount(quantityOfAsset);
    }
    await dispatch(
      sellPortfolioAsset(
        sessionUser,
        assetAmount,
        assetPrice,
        portfoliometa.id,
        asset.id
      )
    );
  };
  const handleSellMax = () => {
    setAssetAmount(quantityOfAsset);
  };
  return (
    <div className="buysell-div">
      <h3>{asset.symbol} - USD</h3>
      <div className="buysell-header">
        <ul>
          <li>USD Balance: {portfoliometa.cashUSD.toFixed(2)} </li>
          <li>
            {asset.symbol} Balance:{" "}
            {portfolio[asset.id] && portfolio[asset.id].quantityOfAsset}
          </li>
          <li>
            Quote ${assetPrice.toFixed(2)}/{asset.symbol}
          </li>
        </ul>
      </div>
      <div>
        <div>
          <label>asset-amount</label>
          <input
            type="asset-amount"
            value={assetAmount}
            onChange={(e) => setAssetAmount(e.target.value)}
          ></input>
        </div>
        <button onClick={handleBuyAsset}>Buy</button>
        <button onClick={handleSellAsset}>Sell</button>
        <button onClick={handleSellMax}>Sell Max</button>
      </div>
      <div>
        <div>
          <label>usd-amount</label>
          <input
            type="usd-amount"
            value={usdAmount}
            onChange={(e) => setUSDAmount(e.target.value)}
          ></input>
        </div>

        <button>Buy</button>
        <button>Sell</button>
      </div>
    </div>
  );
}
