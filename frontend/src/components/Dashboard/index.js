import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import WatchListsContainer from "../WatchListsContainer";
import AssetDetails from "../AssetDetailsModal/AssetDetails.js";
import AssetsDisplay from "../AssetsDisplay";
import "./Dashboard.css";

export default function Dashboard() {
  const sessionUser = useSelector((state) => state.session.user);

  return (
    <>
      <div className="dashboard-container">
        <div className="dashboard-assetsdisplay-container">
          All Assets
          <AssetsDisplay className="dashboard-assetsdisplay" />
        </div>
        <div className="dashboard-rightside-container">
          <div className="dashboard-assetdetails-container">Asset Details</div>
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
