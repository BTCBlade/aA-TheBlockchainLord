import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import SignUpButton from "../SignUpButton";
import LoginFormModal from "../LoginFormModal";
import LogoIcon from "../LogoIcon";

import "./Navigation.css";

function Navigation({ isLoaded, setIsLoaded }) {
  const sessionUser = useSelector((state) => state.session.user);
  // const cashUSD = useSelector((state) => state.loading.portfoliometa.cashUSD);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <>
        <div classname="profile-button-div">
          <ProfileButton user={sessionUser} setIsLoaded={setIsLoaded} />
        </div>
      </>
    );
  }

  return (
    <nav className="navbar-top">
      <NavLink className="navbar-top-logo" to="/">
        <LogoIcon loggedIn={!!sessionUser} />
      </NavLink>
      <NavLink to="/">
        <span className="project-name">BlockchainLords</span>
      </NavLink>
      {sessionUser && (
        <>
          <div className="features-links">
            <NavLink to="/portfolio">Portfolio</NavLink>
            <NavLink to="/dashboard">Dashboard</NavLink>
          </div>
        </>
      )}
      {!sessionUser && (
        <>
          <div className="features-links"></div>
          <LoginFormModal />
          <SignUpButton />
        </>
      )}
      <ul>
        <li>{isLoaded && sessionLinks}</li>
      </ul>
    </nav>
  );
}

export default Navigation;
