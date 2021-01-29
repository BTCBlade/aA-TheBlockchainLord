import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

export default function AssetDetails({ asset }) {
  const assetUrls = asset.assetDetails.urls;
  return (
    <>
      <div className="assetsDetails-container">
        <div className="assetsDetails-header">
          <div>
            <img src={asset.assetDetails.logo}></img>
            <h3>{asset.name}</h3>
            <h6>{asset.symbol}</h6>
          </div>
          <div>
            <a
              href={`https://www.reddit.com/r/${asset.assetDetails.subreddit}`}
            >
              <i class="fab fa-reddit-alien"></i>
            </a>
            <a href={asset.assetDetails.urls.website[0]}>
              <i class="fas fa-external-link-alt"></i>
            </a>
          </div>
          <div>
            Tags:
            <div>{asset.tags}</div>
          </div>
        </div>
        <div className="assetDetails-body">
          <p>{asset.assetDetails.description}</p>
        </div>
        <div className="assetDetails-quote"></div>
      </div>
    </>
  );
}
