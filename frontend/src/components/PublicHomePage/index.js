import React from "react";
import AssetsDisplaySplash from "../AssetsDisplaySplash";
import "./PublicHomePage.css";

export default function PublicHomePage() {
  return (
    <div className="splash-main-container">
      <div className="splash-sub-container-1">
        <div className="splash-sub-container-1-left">
          <div className="splash-header-text-container">
            <h1>Welcome to the decentralized computing revolution!</h1>
          </div>

          <div className="splash-video-container">
            <video autoplay="autoplay" loop muted width="100%">
              <source
                src="/videos/blockchain-city.mp4"
                type="video/mp4"
              ></source>
              Video not working
            </video>
          </div>
        </div>
        <div className="splash-sub-container-1-right"></div>
      </div>

      <div className="splash-assetsdisplay-container">
        <AssetsDisplaySplash className="splash-assetsdisplay" />
      </div>
    </div>
  );
}
