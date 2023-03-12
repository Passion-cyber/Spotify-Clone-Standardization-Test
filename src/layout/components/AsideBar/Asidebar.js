import React from "react";
import "../../../Stylsheets/Asidebar.css";
import ShortcutCards from "./ShortcutCards";
import { BsThreeDots } from "react-icons/bs";
import { FiPlusSquare } from "react-icons/fi";
import FavArtistCard from "./FavArtistCard";
import image1 from "../../../Assets/images/Cocuk.png";
import image2 from "../../../Assets/images/Kemal.png";
import image3 from "../../../Assets/images/Murat.png";
import image4 from "../../../Assets/images/Umut.png";
import image5 from "../../../Assets/images/playlist.png";
import { Shortcut_Items } from "../../../Ultilities";

const Asidebar = () => {
  const Favorite_Artist = [
    {
      image: image1,
      text: "Taylor Swift",
      Icon: BsThreeDots,
      sub: "196 songs in the library",
    },
    {
      image: image2,
      text: "Kanye West",
      Icon: BsThreeDots,
      sub: "125 songs in the library",
    },
    {
      image: image3,
      text: "Drake",
      Icon: BsThreeDots,
      sub: "50 songs in the library",
    },
    {
      image: image4,
      text: "Billie Ellish",
      Icon: BsThreeDots,
      sub: "25 songs in the library",
    },
  ];

  return (
    <div className="asidebar-container">
      <h2 className="aside-header">Shortcuts</h2>
      <div className="shortcut-section">
        {Shortcut_Items.map(({ title, Icon }, index) => (
          <ShortcutCards key={index} title={title} icon={<Icon />} />
        ))}
      </div>

      <h2 className="aside-header">Fav Artist</h2>
      <section className="favorite-artist-section">
        {Favorite_Artist.map(({ image, text, Icon, sub }, index) => (
         <FavArtistCard key={index} image={image} Text={text} Sub={sub} icon={<Icon />}
          />
        ))}
      </section>
      
      <div className="bottom-container">
        <div className="image-container">
          <img src={image5} alt="" />
        </div>
        <div className="bottom-text-container">
          <div>
            <h2 className="aside-lead-text">Torisetsu </h2>
            <h2 className="aside-sub-text">Kana Nishino</h2>
          </div>
          <button className="aside-button">
            <FiPlusSquare />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Asidebar;
