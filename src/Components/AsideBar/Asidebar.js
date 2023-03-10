import React from "react";
import "../../Stylsheets/Asidebar.css";
import ShortcutCards from "./ShortcutCards";
import { MdOutlineSevereCold } from "react-icons/md";
import { AiTwotoneStar } from "react-icons/ai";
import { GiGuitar } from "react-icons/gi";
import { IoIosMusicalNotes } from "react-icons/io";
import { CgPiano } from "react-icons/cg";
import { GiTrumpet } from "react-icons/gi";
import { BsThreeDots } from "react-icons/bs";
import { FiPlusSquare } from "react-icons/fi";
import FavArtistCard from "./FavArtistCard";
import image1 from "../../Assets/images/Cocuk.png";
import image2 from "../../Assets/images/Kemal.png";
import image3 from "../../Assets/images/Murat.png";
import image4 from "../../Assets/images/Umut.png";
import track from "../../Assets/images/playlist.png"

const Asidebar = () => {
  return (
    <div className="asidebar-container">
      <h2 className="aside-header">Shortcuts</h2>
      <div className="shortcut-section">
        <ShortcutCards title={"Chill Hits"} icon={<MdOutlineSevereCold />} />
        <ShortcutCards title={"Hop"} icon={<AiTwotoneStar />} />
        <ShortcutCards title={"Accoustic"} icon={<GiGuitar />} />
        <ShortcutCards title={"India Hop"} icon={<IoIosMusicalNotes />} />
        <ShortcutCards title={"Piano Blues"} icon={<CgPiano />} />
        <ShortcutCards title={"Jazz"} icon={<GiTrumpet />} />
      </div>
      <h2 className="aside-header">Fav Artist</h2>

      <div>
        <FavArtistCard
          image={image1}
          Text={"Taylor Swift"}
          Sub={"196 songs in the library"}
          icon={<BsThreeDots />}
        />
        <FavArtistCard
          image={image4}
          Text={"6Lack"}
          Sub={"125 songs in the library"}
          icon={<BsThreeDots />}
        />
        <FavArtistCard
          image={image3}
          Text={"Kanye West"}
          Sub={"50 songs in the library"}
          icon={<BsThreeDots />}
        />
        <FavArtistCard
        image={image2}
          Text={"Drake"}
          Sub={"25 songs in the library"}
          icon={<BsThreeDots />}
        />
      </div>
      <div className="bottom-container">
        <div className="image-container">
          <img src={track} alt="" />
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
