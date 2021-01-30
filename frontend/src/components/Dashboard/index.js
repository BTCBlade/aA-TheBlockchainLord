import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import WatchListsContainer from "../WatchListsContainer";
import AssetDetails from "../AssetDetailsModal/AssetDetails.js";
import AssetsDisplay from "../AssetsDisplay";

import "./Dashboard.css";

export default function Dashboard() {
  const sessionUser = useSelector((state) => state.session.user);
  const assets = useSelector((state) => state.assets);
  const [assetDetailsData, setAssetDetailsData] = useState({});

  return (
    <>
      <div className="dashboard-container">
        <div className="dashboard-assetsdisplay-container">
          All Assets
          <AssetsDisplay
            setAssetDetailsData={setAssetDetailsData}
            className="dashboard-assetsdisplay"
          />
        </div>
        <div className="dashboard-rightside-container">
          <div className="dashboard-assetdetails-container">
            Asset Details
            <AssetDetails asset={assets[assetDetailsData.rank]} />
          </div>
        </div>
      </div>
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
