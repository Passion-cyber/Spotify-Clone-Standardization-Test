import React from "react";
import NavbarCards from "./NavbarCards";
import Navbarlogo from "./Navbarlogo";
import { AiFillHome } from "react-icons/ai";
import { GiChart } from "react-icons/gi";
import { AiOutlineCompass } from "react-icons/ai";
import { TbTopologyStarRing3 } from "react-icons/tb";
import { MdOutlineNewspaper } from "react-icons/md";
import { HiOutlineCalendar } from "react-icons/hi";
import { MdOutlineEventNote } from "react-icons/md";
import { GiSelfLove } from "react-icons/gi";
import { BsFillPeopleFill } from "react-icons/bs";
import { BsStar } from "react-icons/bs";
import { GrTextAlignRight } from "react-icons/gr";
import { FaChevronRight } from "react-icons/fa";
import './Navbar.css'

const Navbar = () => {

  return (
    <div className="navbar-container">
      <div className="navigation">
        <h2><GrTextAlignRight/></h2>   
      </div>
      <Navbarlogo title={"Passion-Cyber"} icon={<TbTopologyStarRing3 />} />
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

      <div className="navbar-profile">
        <div className="image"></div>
        <h2 className="profile-text">Ibelachi Chinedu</h2>
        <h2 className="nav-profile-icon"><FaChevronRight/></h2>
       
      </div>
    </div>
  );
};

export default Navbar;
