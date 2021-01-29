import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import WatchListsContainer from "../WatchListsContainer";
import AssetsDisplay from "../AssetsDisplay";

export default function Dashboard() {
  const sessionUser = useSelector((state) => state.session.user);

  return (
    <>
      <h1>Hello from dashboard</h1>
      <AssetsDisplay />
      <WatchListsContainer />
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
