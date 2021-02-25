import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import SignUpButton from "../SignUpButton";
import LoginFormModal from "../LoginFormModal";
import LogoIcon from "../LogoIcon";
import AutoCompleteSearch from "../AutoCompleteSearch";

import "./Navigation.css";

function Navigation({ isLoaded, setIsLoaded }) {
  const sessionUser = useSelector((state) => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <>
        <ProfileButton user={sessionUser} setIsLoaded={setIsLoaded} />
        <NavLink to="/portfolio">Portfolio</NavLink>
        <NavLink to="/dashboard">Dashboard</NavLink>
      </>
    );
  } else {
    sessionLinks = (
      <>
        <LoginFormModal />
        <SignUpButton />
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
      <ul>
        <li>{isLoaded && sessionLinks}</li>
      </ul>
    </nav>
  );
}

export default Navigation;
