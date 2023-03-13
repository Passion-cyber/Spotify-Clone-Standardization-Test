import React, { useEffect, useState } from "react";
import SideNavbar from "./components/sidebar/sidebar";
import "../Stylsheets/layout.css";
import Asidebar from "../layout/components/AsideBar/Asidebar";
import Main from "../Components/MainSection/Main";
const AppLayout = () => {
  const [userId, setUserId] = useState(null);
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
  }, []);

  return (
    <div className="layout-wrap">
      <SideNavbar userId={userId} setUserId={setUserId} />
      <div className="children-wrap">
        <Main userId={userId} />
      </div>
      <Asidebar />
    </div>
  );
};

export default AppLayout;
