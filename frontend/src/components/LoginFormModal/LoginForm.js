import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";

function LoginForm() {
  const dispatch = useDispatch();
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password })).catch(
      (res) => {
        if (res.data && res.data.errors) setErrors(res.data.errors);
      }
    );
  };

  return (
    <form className="LoginForm" onSubmit={handleSubmit}>
      <h2>Welcome</h2>
      <div>
        <h5>Credentials</h5>
      </div>
      <div>
        <label for="username-email"></label>
        <input
          id="username-email"
          type="text"
          value={credential}
          placeholder="Email/Username"
          onChange={(e) => setCredential(e.target.value)}
          required
        />
      </div>
      <div>
        <label for="password"></label>
        <input
          id="password"
          type="password"
          value={password}
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit">Login</button>
      <div>
        <ul className="login-error-space">
          {errors.map((error, idx) => (
            <li key={idx}>{error}</li>
          ))}
        </ul>
        <a href="/signup">Make New Account</a>
      </div>
    </form>
  );
}

export default LoginForm;
