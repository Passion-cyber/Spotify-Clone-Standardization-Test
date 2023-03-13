import React, { useEffect, useState } from "react";
import NavbarCards from "./sidebarcard";
import Navbarlogo from "./sidebarnavlogo";
import axios from "axios";
import "../../../Stylsheets/sidebar.css";
import { Nav_Items } from "../../../Ultilities";
import { GrTextAlignRight } from "react-icons/gr";
import { FaChevronRight } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const SideNavbar = ({ setUserId }) => {
  const spotifyTKN = window.localStorage.getItem("spotifyTKN");
  const [data, setData] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState(false);
  const logout = () => {
    window.localStorage.removeItem("spotifyTKN");
    navigate("/");
  };
  // order of useEffect matter
  useEffect(() => {
    let mounted = true;
    const fetchUser = async () => {
      try {
        const { data } = await axios.get("https://api.spotify.com/v1/me", {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + spotifyTKN,
          },
        });
        setUserId(data?.id);
        setData(data);
      } catch (error) {
        logout();
        toast.error("Token expired, please login");
      }
    };
    if (mounted && spotifyTKN?.length > 1) fetchUser();
    return () => (mounted = false);
  }, [spotifyTKN]);

  const handleACtiveToggle = () => {
    setIsActive(!isActive);
  };
  return (
    <div className="navbar-container">
      <div className="navigation">
        <i>
          <GrTextAlignRight />
        </i>
      </div>
      <div className="nav-wrap">
        {Nav_Items?.map(({ heading, text, title, Icon }, i) =>
          heading ? (
            <h3 className="navbar-text" key={i}>
              {heading}
            </h3>
          ) : text ? (
            <Navbarlogo title={title} text={text} key={i} icon={<Icon />} />
          ) : (
            <NavbarCards
              className={`wrap ${isActive && "active"}`}
              onClick={handleACtiveToggle}
              title={title}
              icon={<Icon />}
              key={i}
            />
          )
        )}
      </div>

      <div className="navbar-profile" onClick={() => setIsOpen(!isOpen)}>
        <div className="image">
          <img
            src={
              data?.images?.[0]?.url ??
              "https://i.scdn.co/image/ab6775700000ee8554123d23b994c6c3dc87d924"
            }
            alt="profile-cover"
          />
        </div>
        <h2 className="profile-text">{data?.display_name ?? "PassionCyber"}</h2>
        <h2 className="nav-profile-icon">
          <FaChevronRight />
        </h2>
        <Modal isOpen={isOpen} setIsOpen={setIsOpen} action={logout} />
      </div>
    </div>
  );
};

export default SideNavbar;

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
