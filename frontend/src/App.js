import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import { getAllAssets } from "./store/assets";
import { getWatchlists } from "./store/watchlist";
import { setisWatchlistsLoaded } from "./store/loading";

import Navigation from "./components/Navigation";
import PublicHomePage from "./components/PublicHomePage";
import Dashboard from "./components/Dashboard";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  const [isLoadedAssets, setIsLoadedAssets] = useState(false);
  const sessionUser = useSelector((state) => state.session.user);
  useEffect(async () => {
    if (sessionUser) {
      //send dispatch to watchlist and portfolio reducer
      console.log("App.js isLoaded", isLoaded);
      await dispatch(getWatchlists(sessionUser)).then((data) =>
        setisWatchlistsLoaded(true)
      );
    } else {
      await dispatch(sessionActions.restoreUser()).then((data) =>
        setIsLoaded(true)
      );
      await dispatch(getAllAssets()).then((data) => setIsLoadedAssets(true));
    }
  }, [dispatch, sessionUser]);

  return (
    <>
      <Navigation isLoaded={isLoaded} setIsLoaded={setIsLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path="/">
            {sessionUser ? <Redirect to="/dashboard" /> : <Redirect to="/" />}
            <PublicHomePage />
          </Route>
          <Route exact path="/dashboard">
            {sessionUser ? <Dashboard /> : <Redirect to="/" />}
          </Route>
          <Route exact path="/signup">
            <SignupFormPage />
          </Route>
          <Route exact path="/test"></Route>
        </Switch>
      )}
    </>
  );
}

export default App;
