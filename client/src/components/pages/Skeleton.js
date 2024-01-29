import React from "react";
import { GoogleOAuthProvider, GoogleLogin, googleLogout } from "@react-oauth/google";

import "../../utilities.css";
import "./Skeleton.css";

//TODO: REPLACE WITH YOUR OWN CLIENT_ID
const GOOGLE_CLIENT_ID = "964429567837-ne9qm2vcn91l84kaq31slnqgfrishaaj.apps.googleusercontent.com";

//LANDING PAGE
const Skeleton = ({ userId, handleLogin, handleLogout }) => {
  return (
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
      <div className="landing-display">
        <img src="./logo.png" alt="logo" className="landing-logo" />
        <p className="landing-text">A new way to shop for shoes</p>
        {userId ? (
          <button
            onClick={() => {
              googleLogout();
              handleLogout();
            }}
          >
            Logout
          </button>
        ) : (
          <GoogleLogin onSuccess={handleLogin} onError={(err) => console.log(err)} />
        )}
      </div>
    </GoogleOAuthProvider>
  );
};

export default Skeleton;
