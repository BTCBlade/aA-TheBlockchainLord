import React from "react";
import { NavLink } from "react-router-dom";
import "./SignUpButton.css";

export default function SignUpButton() {
  return (
    <>
      <NavLink className="signupbutton" to="/signup">
        Sign Up
      </NavLink>
    </>
  );
}
