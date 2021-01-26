import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import WatchList from "../WatchList";

export default function Dashboard() {
  const sessionUser = useSelector((state) => state.session.user);

  return (
    <>
      <WatchList />
      <h1>Hello from dashboard</h1>
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
