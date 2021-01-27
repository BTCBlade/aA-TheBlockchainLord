import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getWatchlist } from "../../store/watchlist";

export default function WatchList() {
  const sessionUser = useSelector((state) => state.session.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWatchlist(sessionUser));
  }, [dispatch]);

  const watchlist = useSelector((state) => state.watchlist);
  return (
    <>
      <h1>Watchlist</h1>
      <ul className="watchlist-ul">
        {watchlist.Assets &&
          watchlist.Assets.map((ele) => (
            <li>
              <div>
                <button className="removeOne">-</button>
                {ele.symbol} - {ele.backupUSDPrice}
                <button>+</button>
              </div>
            </li>
          ))}
      </ul>
    </>
  );
}
