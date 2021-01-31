import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getWatchlist, removeOneFromWatchlist } from "../../store/watchlist";

export default function WatchList({ sessionUser }) {
  const dispatch = useDispatch();
  const assets = useSelector((state) => state.assets);
  const watchlist = useSelector((state) => state.watchlist);

  useEffect(() => {
    dispatch(getWatchlist(sessionUser));
  }, [dispatch]);

  const handleremoveFromWatchlist = (assetId) => {};

  return (
    <>
      {watchlist && (
        <ul>
          {Object.values(watchlist).map((asset) => {
            <li>
              <button>- </button> {asset.symbol} ={" "}
            </li>;
          })}
        </ul>
      )}
    </>
  );
}
