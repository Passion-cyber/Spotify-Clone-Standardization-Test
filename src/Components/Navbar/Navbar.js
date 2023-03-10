import React, { useEffect, useState } from "react";
import NavbarCards from "./NavbarCards";
import Navbarlogo from "./Navbarlogo";
import { AiFillHome, AiOutlineCompass } from "react-icons/ai";
import { BiLogOut } from "react-icons/bi";
import { GiChart, GiSelfLove } from "react-icons/gi";
import { MdOutlineNewspaper, MdOutlineEventNote } from "react-icons/md";
import { HiOutlineCalendar } from "react-icons/hi";
import { BsFillPeopleFill, BsStar } from "react-icons/bs";
import { GrTextAlignRight } from "react-icons/gr";
import { FaChevronRight, FaReact } from "react-icons/fa";
import "../../Stylsheets/Navbar.css";
import axios from "axios";

const Navbar = ({ setToken }) => {
  const spotifyTKN = window.localStorage.getItem("spotifyTKN");
  const [data, setData] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const logout = () => {
    setToken(null);
    window.localStorage.removeItem("spotifyTKN");
  };

  useEffect(() => {
    let mounted = true;
    const fetchUser = async () => {
      const { data } = await axios.get("https://api.spotify.com/v1/me", {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + spotifyTKN,
        },
      });
      setData(data);
    };
    if (mounted) fetchUser();
    return () => (mounted = false);
  }, []);

  return (
    <div className="navbar-container">
      <div className="navigation">
        <i>
          <GrTextAlignRight />
        </i>
      </div>
      <Navbarlogo title={"Passion"} text={"Cyber"} icon={<FaReact />} />
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

      <div className="navbar-profile" onClick={() => setIsOpen(!isOpen)}>
        <div className="image">
          <img
            src={
              "https://i.scdn.co/image/ab6775700000ee8554123d23b994c6c3dc87d924"
            }
            alt="profile-cover"
          />
        </div>
        <h2 className="profile-text">{data?.display_name}</h2>
        <h2 className="nav-profile-icon">
          <FaChevronRight />
        </h2>
        <Modal isOpen={isOpen} setIsOpen={setIsOpen} action={logout} />
      </div>
    </div>
  );
};

export default Navbar;

const Modal = ({ isOpen, setIsOpen, action }) => {
  const handleLogout = () => {
    setIsOpen(!isOpen);
    action();
  };
  return (
    <div
      className={`modal-container ${isOpen && "modal-open"}`}
      onClick={handleLogout}
    >
      <button className="logout-btn">
        <span>
          <BiLogOut />
        </span>{" "}
        <p>Log Out</p>
      </button>
    </div>
  );
};
