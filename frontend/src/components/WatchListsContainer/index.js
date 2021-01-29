import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getWatchlists } from "../../store/watchlist";
import WatchList from "../WatchList";

export default function WatchListsContainer() {
  const sessionUser = useSelector((state) => state.session.user);
  const dispatch = useDispatch();
  const watchlists = useSelector((state) => state.watchlist);

  useEffect(async () => {
    dispatch(getWatchlists(sessionUser));
    console.log(watchlists);
  }, [dispatch]);

  return (
    <>
      <h2>WatchListsContainer</h2>
    </>
  );
}
