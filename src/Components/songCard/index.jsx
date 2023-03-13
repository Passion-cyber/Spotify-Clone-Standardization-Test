import React from "react";
import "../../Stylsheets/songCard.css";
const SongCard = ({ el }) => {
  const handlePlay = () => {};
  console.log(el);
  return (
    <div className="song">
      <div className="song-image">
        <img src={el?.album?.images[0]?.url} alt="resuit-search-image" />
        <div className="playBtn"></div>
      </div>
      <div className="song-text">
        <h3>{el?.name.substring(0, 28) + "..."}</h3>
        <div className="flex">
          <span>{el.album?.release_date.split("-")[0]}</span>
          <span className="dot"></span>
          <span> {el?.artists[0]?.name}</span>
        </div>
      </div>
    </div>
  );
};

export default SongCard;
