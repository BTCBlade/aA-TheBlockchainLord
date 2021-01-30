import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

export default function WatchList() {
  const watchlists = useSelector((state) => state.watchlists);
  const dispatch = useDispatch();

  return (
    <>
      {watchlists &&
        watchlists.map((watchlist) => {
          return "hello";
        })}
    </>
  );
}
