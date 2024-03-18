import React from "react";
import RegisterUtility from "../Utilities/RegisterUtility";

export default function RegisterComponent() {
  const registerUtility = RegisterUtility();

  return (
    <div className="Container">
      <div>
        <h1>Register</h1>
        <label>Email Id</label>
        <input
          type="text"
          name="emailAddress"
          value={registerUtility.Registerinfo.emailAddress}
          placeholder="Email Address"
          autoComplete="off"
          maxLength={40}
          onChange={registerUtility.onInputChangeRegister}
        />

        <br />
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={registerUtility.Registerinfo.password}
          placeholder="Password"
          autoComplete="off"
          maxLength={40}
          onChange={registerUtility.onInputChangeRegister}
        />
        <br />
        {/* <label>Confirm Password</label>
        <input
          type="password"
          name="password"
          value={registerUtility.Registerinfo.password}
          placeholder="ConfirmPassword"
          autoComplete="off"
          maxLength={40}
          onChange={registerUtility.onInputChangeRegister}
        />
        <br /> */}
        <br></br>
        <button type="submit" onClick={registerUtility.handelRegister}>
          Register
        </button>
        <p>
          Back to Login Page <a href="/login">Login</a>
        </p>
      </div>
    </div>
  );
}
