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

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} setIsLoaded={setIsLoaded} />
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
      <LogoIcon loggedIn={!!sessionUser} />

      <span className="project-name">BlockchainLords</span>

      <ul>
        <li>{isLoaded && sessionLinks}</li>
      </ul>
    </nav>
  );
}

export default Navigation;
