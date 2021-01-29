import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import { getAllAssets } from "./store/assets";

import Navigation from "./components/Navigation";
import PublicHomePage from "./components/PublicHomePage";
import Dashboard from "./components/Dashboard";
import Container from "./components/Container";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  const [isLoadedAssets, setIsLoadedAssets] = useState(false);
  const sessionUser = useSelector((state) => state.session.user);
  useEffect(async () => {
    await dispatch(sessionActions.restoreUser()).then((data) =>
      setIsLoaded(true)
    );
    await dispatch(getAllAssets()).then((data) => setIsLoadedAssets(true));
    if (sessionUser) {
      //send dispatch to watchlist and portfolio reducer
    }
  }, [dispatch]);
  return (
    <>
      <Navigation isLoaded={isLoaded} />
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
