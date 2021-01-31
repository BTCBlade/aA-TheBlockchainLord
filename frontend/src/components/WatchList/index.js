import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getWatchlist, removeOneFromWatchlist } from "../../store/watchlist";

export default function WatchList({ sessionUser }) {
  const dispatch = useDispatch();
  const assets = useSelector((state) => state.assets);
  const watchlist = useSelector((state) => state.watchlist);
  const watchlistId = useSelector((state) => state.loading.watchlistId);

  useEffect(async () => {
    await dispatch(getWatchlist(sessionUser));
  }, [dispatch]);

  const handleremoveFromWatchlist = (assetId) => {
    dispatch(removeOneFromWatchlist(watchlistId, assetId));
  };

  return (
    <>
      {watchlist && (
        <ul>
          {Object.values(watchlist).map((asset) => {
            const quote = assets[asset.id].quote;

            return (
              <li>
                <button onClick={() => handleremoveFromWatchlist(asset.id)}>
                  -{" "}
                </button>{" "}
                {asset.symbol} {quote.USD.price.toFixed(2)}
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}
