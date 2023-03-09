import React from "react";
import "./Login.css";
const REACT_APP_CLIENT_ID = "d7208688b03147aebe8d5aeae751497f";
const REACT_APP_REDIRECT_URL = "http://localhost:3000";
const REACT_APP_AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
const REACT_APP_RESPONSE_TYPE = "token";

const Login = () => {
  return (
    <div className="login-container">
      <a
        href={`${REACT_APP_AUTH_ENDPOINT}?client_id=${REACT_APP_CLIENT_ID}&scope=user-top-read&redirect_uri=${REACT_APP_REDIRECT_URL}&response_type=${REACT_APP_RESPONSE_TYPE}`}
      >
        <button className="authentication-btn">AUthenticate</button>
      </a>
    </div>
  );
};

export default Login;
