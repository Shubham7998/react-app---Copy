import React from 'react';
import LoginUtility from '../Utilities/LoginUtility';
import "../Style/global.css"

export default function LoginComponent() {

  const userInfoUtility =  LoginUtility();
  return (
    <div className='Container'>
      <form>
        <h1>Log In</h1>
        <label htmlFor="emailAddress">Email Id</label>
       
        <input type="text" id="emailAddress" name="emailAddress"   value={userInfoUtility.Userinfo.emailAddress}
         placeholder='Email Address' autoComplete='off'  maxLength={40} 
         onChange={userInfoUtility.onInputChangeLogin}/>
        
        <br />
        <label htmlFor="password">Password</label>
        
        <input type="password" id="password" name="password" value={userInfoUtility.Userinfo.password}
         placeholder='Password' autoComplete='off' maxLength={40}
         onChange={userInfoUtility.onInputChangeLogin} />
        <br />
        <br/>
        <button type="submit" onClick={userInfoUtility.handelLogin}>Login</button>
        <p>Don't have an ID? <a href="/register">Register</a></p>
      </form>
    </div>
  );
}
