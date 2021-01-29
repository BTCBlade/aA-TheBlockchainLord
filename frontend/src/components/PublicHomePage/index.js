import React from "react";
import AssetsDisplay from "../AssetsDisplay";
import "./PublicHomePage.css";

export default function PublicHomePage() {
  return (
    <div className="splash-main-container">
      <div className=""></div>
      <div className="splash-assetsdisplay-container">
        <h1>Welcome to the decentralized computing revolution!</h1>
        <AssetsDisplay className="splash-assetsdisplay" />
      </div>
    </div>
  );
}
