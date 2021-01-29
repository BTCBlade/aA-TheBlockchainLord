import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

export default function WatchList() {
  const sessionUser = useSelector((state) => state.session.user);
  const dispatch = useDispatch();

  return;
  // <>
  //   <h1>Watchlist</h1>
  //   <h5>{watchlist && watchlist.name}</h5>
  //   <ul className="watchlist-ul">
  //     {watchlist &&
  //       watchlist.Assets &&
  //       watchlist.Assets.map((asset) => (
  //         <li>
  //           <div>
  //             hello
  //             {asset.symbol}
  //             {/* {asset.symbol} - {JSON.parse(asset.quote).USD.price} */}
  //           </div>
  //           <div>
  //             {/* 24h Change - %{JSON.parse(asset.quote).USD.percent_change_24h} */}
  //           </div>
  //         </li>
  //       ))}
  //   </ul>
  // </>
}
