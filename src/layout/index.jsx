import React, { useEffect, useState } from "react";
import SideNavbar from "./components/sidebar/sidebar";
import "../Stylsheets/layout.css";
import Asidebar from "../layout/components/AsideBar/Asidebar";
import Main from "../Components/MainSection/Main";
const AppLayout = ({ children }) => {
  const [token, setToken] = useState();

  useEffect(() => {
    const hash = window.location.hash;
    let spotifyTKN = window.localStorage.getItem("spotifyTKN");
    if (!spotifyTKN && hash) {
      spotifyTKN = hash
        .substring(1)
        .split("&")
        .find((el) => el.startsWith("access_token"))
        .split("=")[1];
      window.location.hash = "";
      window.localStorage.setItem("spotifyTKN", spotifyTKN);
    }
    setToken(spotifyTKN);
  }, []);

  return (
    <div className="layout-wrap">
      <SideNavbar setToken={setToken} />
      <div className="children-wrap">
        <Main setToken={setToken} />
      </div>
      <Asidebar />
    </div>
  );
};

export default AppLayout;
