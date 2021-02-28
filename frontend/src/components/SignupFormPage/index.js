import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";
import { ReactComponent as RocketSVG } from "./rocket.svg";
import "./SignupForm.css";

function SignupFormPage() {
  const dispatch = useDispatch();

  const sessionUser = useSelector((state) => state.session.user);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [disabledButton, setDisabledButton] = useState("true");

  const [validationErrors, setValidationErrors] = useState([]);

  const validate = () => {
    const validationErrors = [];
    // const emailPattern = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    // if (!emailPattern.test(email))
    //   validationErrors.push("Enter a valid email address");
    if (!/[A-Z]+/.test(password))
      validationErrors.push("One uppercase character");
    if (!/[a-z]+/.test(password))
      validationErrors.push("One lowercase character");
    if (!/[0-9]+/.test(password)) validationErrors.push("One number");
    if (password.length < 8) validationErrors.push("8 characters minimum");

    return validationErrors;
  };
  useEffect(() => {
    setValidationErrors([]);
    const errorsArr = validate();
    setValidationErrors((prev) => [...prev, ...errorsArr]);
    if (validationErrors.length === 0) {
      setDisabledButton(false);
    } else {
      setDisabledButton(true);
    }
  }, [username, email, password, validationErrors.length]);

  if (sessionUser) return <Redirect to="/" />;
  const handleSubmit = (e) => {
    e.preventDefault();
    setValidationErrors([]);
    return dispatch(sessionActions.signup({ email, username, password })).catch(
      (res) => {
        if (res.data && res.data.errors) setValidationErrors(res.data.errors);
      }
    );
  };

  return (
    <div className="signup-page-container">
      <RocketSVG />
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2>
          The fiat industrial era is about to rocket launch into the digital age
        </h2>
        <h5>
          Sign up to follow my crypto portfolio and to explore my first solo
          full stack web project postgre-express-redux-react learning project!
        </h5>
        <div>
          <label for="signup-email">Email</label>
          <input
            id="signup-email"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label for="signup-username">Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label for="signup-password">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <ul>
          {validationErrors.map((err) => (
            <li key={err}>{err}</li>
          ))}
        </ul>
        <div className="signup-button-div">
          <button
            value={disabledButton}
            disabled={disabledButton}
            type="submit"
          >
            Sign Up
          </button>
          <p>
            Create an account with the best none custodial crypto asset
            portfolio tracker
          </p>
        </div>
      </form>
    </div>
  );
}

export default SignupFormPage;
