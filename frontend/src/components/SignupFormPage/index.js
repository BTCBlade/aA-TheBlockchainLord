import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";
import "./SignupForm.css";

function SignupFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [validationErrors, setValidationErrors] = useState([]);
  const [errors, setErrors] = useState([]);

  // if (sessionUser) return <Redirect to="/" />;
  // const validate = () => {
  //   const validationErrors = [];
  //   if (username.length > 30)
  //     validationErrors.push("usernames must be less than 30 chars");
  //   const emailPattern = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
  //   if (!emailPattern.test(email))
  //     validationErrors.push("Enter a valid email address");
  //   if (password !== confirmPassword)
  //     validationErrors.push("Password doesnt not match");
  //   return validationErrors;
  // };

  // useEffect(() => {
  //   setValidationErrors([]);
  //   const errorsArr = validate();
  //   setValidationErrors((prev) => [...prev, ...errorsArr]);
  // }, [username, email, password, confirmPassword]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setErrors([]);
      return dispatch(
        sessionActions.signup({ email, username, password })
      ).catch((res) => {
        if (res.data && res.data.errors) setErrors(res.data.errors);
      });
    }
    return setErrors([
      "Confirm Password field must be the same as the Password field",
    ]);
  };

  return (
    <form className="signup-form" onSubmit={handleSubmit}>
      <h2>
        The fiat industrial era is about to rocket launch into the digital age
      </h2>
      <h6>
        Sign up to follow my crypto portfolio and to explore my first solo full
        stack web project postgre-express-redux-react learning project!
      </h6>
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
      <div>
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit">Sign Up</button>
      <ul>
        {validationErrors.map((err) => (
          <li key={err}>{err}</li>
        ))}
        {errors.map((error, idx) => (
          <li key={idx}>{error}</li>
        ))}
      </ul>
    </form>
  );
}

export default SignupFormPage;
