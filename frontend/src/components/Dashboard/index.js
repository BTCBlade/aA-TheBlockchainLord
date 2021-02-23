import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import WatchList from "../WatchList";
import AssetDetails from "../AssetDetailsModal/AssetDetails.js";
import AssetsDisplay from "../AssetsDisplay";
import PortfolioDisplay from "../PortfolioDisplay";

import "./Dashboard.css";

export default function Dashboard() {
  const sessionUser = useSelector((state) => state.session.user);
  const assets = useSelector((state) => state.assets);
  const [assetDetailsData, setAssetDetailsData] = useState({
    rank: 4,
    logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/6636.png",
    name: "Polkadot",
    symbol: "DOT",
    price: "15.44",
    change7d: "-6.96",
    change24h: "-9.04",
    logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/6636.png",
    name: "Polkadot",
    price: "15.44",
    symbol: "DOT",
  });

  return (
    <>
      {assets && (
        <div className="dashboard-container">
          <div className="dashboard-assetsdisplay-container">
            <h2>All Assets</h2>
            <AssetsDisplay
              setAssetDetailsData={setAssetDetailsData}
              className="dashboard-assetsdisplay"
            />
          </div>
          <div className="dashboard-rightside-container">
            <div className="dashboard-portfolio">
              <h5>Portfolio</h5>
              <PortfolioDisplay className="portfolio-display" />
            </div>
            <div className="dashboard-watchlists">
              <h2>Watchlist</h2> <WatchList className="dashboard-watchlist" />
            </div>
            <div className="dashboard-assetdetails-container">
              <AssetDetails asset={assets[assetDetailsData.rank]} />
            </div>
          </div>
        </div>
      )}
    </>
  );
  //(
  // <WatchList sessionUser={sessionUser} />
  // <>
  //   {sessionUser && (
  //     <>
  //       <h1>This is the dashboard</h1>
  //       <p>sessionUser.id= {sessionUser.id}</p>
  //       <p>sessionUser.username= {sessionUser.username}</p>
  //     </>
  //   )}
  // </>
  // );
}
