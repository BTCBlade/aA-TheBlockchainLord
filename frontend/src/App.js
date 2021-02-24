import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import { getAllAssets } from "./store/assets";

import Navigation from "./components/Navigation";
import PublicHomePage from "./components/PublicHomePage";
import Dashboard from "./components/Dashboard";
import Footer from "./components/Footer";
import Web3Demo from "./components/Web3Demo";
import PortfolioPage from "./components/PortfolioPage";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  const [isLoadedAssets, setIsLoadedAssets] = useState(false);
  const sessionUser = useSelector((state) => state.session.user);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then((data) => setIsLoaded(true));
    dispatch(getAllAssets()).then((data) => setIsLoadedAssets(true));
    // }
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} setIsLoaded={setIsLoaded} />
      {isLoaded && isLoadedAssets && (
        <Switch>
          <Route exact path="/">
            {sessionUser ? <Redirect to="/dashboard" /> : <Redirect to="/" />}
            <PublicHomePage />
          </Route>
          <Route exact path="/dashboard">
            {sessionUser ? <Dashboard /> : <Redirect to="/" />}
          </Route>
          <Route exact path="/portfolio">
            {sessionUser ? <PortfolioPage /> : <Redirect to="/" />}
          </Route>
          <Route exact path="/signup">
            <SignupFormPage />
          </Route>
          <Route exact path="/web3demo">
            <Web3Demo />
          </Route>
        </Switch>
      )}
      <Footer />
    </>
  );
}

export default App;
