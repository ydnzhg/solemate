import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import jwt_decode from "jwt-decode";

import NotFound from "./pages/NotFound.js";
import Skeleton from "./pages/Skeleton.js";
import Discover from "./pages/Discover.js";
import NavBar from "./pages/NavBar.js";
import Collections from "./pages/Collections.js";
import Explore from "./pages/Explore.js";

import "../utilities.css";

import { socket } from "../client-socket.js";

import { get, post } from "../utilities";

/**
 * Define the "App" component
 */
const App = () => {
  const [userId, setUserId] = useState(undefined);

  useEffect(() => {
    get("/api/whoami").then((user) => {
      if (user._id) {
        // they are registed in the database, and currently logged in.
        setUserId(user._id);
      }
    });
  }, []);

  const navigate = useNavigate();

  const handleLogin = (credentialResponse) => {
    const userToken = credentialResponse.credential;
    const decodedCredential = jwt_decode(userToken);
    console.log(`Logged in as ${decodedCredential.name}`);
    post("/api/login", { token: userToken }).then((user) => {
      setUserId(user._id);
      post("/api/initsocket", { socketid: socket.id });
      navigate("/discover");
    });
  };

  const handleLogout = () => {
    setUserId(undefined);
    post("/api/logout");
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Skeleton
            path="/"
            handleLogin={handleLogin}
            handleLogout={handleLogout}
            userId={userId}
          />
        }
      />
      <Route
        path="/discover"
        element={
          <div>
            <NavBar /> <Discover />
          </div>
        }
      />
      <Route
        path="/collections"
        element={
          <div>
            <NavBar /> <Collections />
          </div>
        }
      />
      <Route
        path="/explore"
        element={
          <div>
            <NavBar /> <Explore />
          </div>
        }
      />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
