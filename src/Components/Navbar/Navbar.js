import React from "react";
import NavbarCards from "./NavbarCards";
import Navbarlogo from "./Navbarlogo";
import { AiFillHome, AiOutlineCompass } from "react-icons/ai";
import { GiChart, GiSelfLove } from "react-icons/gi";
import { TbTopologyStarRing3 } from "react-icons/tb";
import { MdOutlineNewspaper, MdOutlineEventNote } from "react-icons/md";
import { HiOutlineCalendar } from "react-icons/hi";
import { BsFillPeopleFill, BsStar } from "react-icons/bs";
import { GrTextAlignRight } from "react-icons/gr";
import { FaChevronRight } from "react-icons/fa";
import tracker from "../Assets/chydel-bro.JPG";
import "./Navbar.css";

const Navbar = ({ setToken }) => {
  const logout = () => {
    setToken(null);
    window.localStorage.removeItem("spotifyTKN");
  };
  return (
    <div className="navbar-container">
      <div className="navigation">
        <i>
          <GrTextAlignRight />
        </i>
      </div>
      <Navbarlogo
        title={"Passion"}
        text={"Cyber"}
        icon={<TbTopologyStarRing3 />}
      />
      <NavbarCards title={"Home"} icon={<AiFillHome />} />
      <NavbarCards title={"Trends"} icon={<GiChart />} />
      <NavbarCards title={"Feed"} icon={<AiOutlineCompass />} />
      <h3 className="navbar-text">Discover</h3>
      <NavbarCards title={"News"} icon={<MdOutlineNewspaper />} />
      <NavbarCards title={"Release Calendar"} icon={<HiOutlineCalendar />} />
      <NavbarCards title={"Events"} icon={<MdOutlineEventNote />} />
      <h3 className="navbar-text">Your collection</h3>
      <NavbarCards title={"Favorite Songs"} icon={<GiSelfLove />} />
      <NavbarCards title={"Artist"} icon={<BsFillPeopleFill />} />
      <NavbarCards title={"Album"} icon={<BsStar />} />

      <div className="navbar-profile" onClick={logout}>
        <div className="image">
          <img src={tracker} alt="profile-cover" />
        </div>
        <h2 className="profile-text">Mark Chinedu</h2>
        <h2 className="nav-profile-icon">
          <FaChevronRight />
        </h2>
      </div>
    </div>
  );
};

export default Navbar;
