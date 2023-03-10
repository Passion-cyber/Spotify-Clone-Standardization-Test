import { Audio } from "ts-audio";
import React, { useEffect, useState } from "react";
import {
  BsArrowLeft,
  BsArrowRight,
  BsFillPlayCircleFill,
  BsFillPauseCircleFill,
  BsArrowsAngleExpand,
  BsBalloonHeart,
  BsVolumeDownFill,
  BsFillVolumeUpFill,
  BsShuffle,
  BsRepeat,
} from "react-icons/bs";
import { RiSearchLine } from "react-icons/ri";
import { AiOutlineRight } from "react-icons/ai";
import PlaylistCards from "./PlaylistCards";
import PlaylistTitleCard from "./PlaylistTitleCard";
import "../../Stylsheets/Main.css";
import axios from "axios";
import {
  TbPlayerTrackPrevFilled,
  TbPlayerTrackNextFilled,
} from "react-icons/tb";
import { FaMusic } from "react-icons/fa";
import Inputrange from "./Inputrange";
import SearchResultCard from "./SearchResultCard";

const Main = ({ setToken }) => {
  const [searchartist, setSearchArtist] = useState("");
  const [data, setData] = useState(null);
  const spotifyTKN = window.localStorage.getItem("spotifyTKN");
  // load playlist
  useEffect(() => {
    let mounted = true;
    const fetchUser = async () => {
      try {
        const { data } = await axios("https://api.spotify.com/v1/search", {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + spotifyTKN,
          },
          params: {
            q: searchartist,
            type: "track",
          },
        });

        setData(data);
      } catch (error) {
        console.log(error);
      }
    };
    if (mounted) fetchUser();
    return () => (mounted = false);
  }, [searchartist]);

  return (
    <main className="main-container">
      {/* search box  */}
      <section className="search-bar">
        <div className="search-container">
          <div className="search-icons">
            <p className="left-arrow">
              <BsArrowLeft />
            </p>
            <p className="right-arrow">
              <BsArrowRight />
            </p>
          </div>

          <div className="input-address" tabIndex={0}>
            <span className="search-button">
              <RiSearchLine />
            </span>
            <input
              type="text"
              className="inputField"
              placeholder="Search for artists, songs and ..."
              onChange={(e) => setSearchArtist(e.target.value)}
            />
          </div>
          <div
            className={`searchDropdown ${searchartist.length >= 1 && "open"}`}
          >
            {data?.tracks?.items.map((el, i) => (
              <SearchResultCard key={i} el={el} />
            ))}
          </div>
        </div>
      </section>

      <section className="trending">
        <h2 className="trending-text">What's hot 🔥</h2>
        <div className="trending-zone">
          <h2 className="trending-header">Trending</h2>
          <div className="icon-section">
            <h3 className="trending-icons"> More</h3>
            <span>
              <AiOutlineRight />
            </span>
          </div>
        </div>
      </section>
      {/* banner section  */}
      <section className="photography">
        <div className="photography-container">
          <h2 className="photography-artist">Artist</h2>
          <section className="wordings">
            <p className="ontop">on Top</p>
            <p className="oftheworld">of The World</p>
          </section>
          <div className="photo-bottom-container">
            <div className="photography-buttons">
              <button className="primary-btn">play</button>
              <button className="secondary-btn">follow</button>
            </div>
            <div className="monthly-listners">
              <h2 className="monthly">Monthly Listners</h2>
              <h2 className="figures"> 32.059</h2>
            </div>
          </div>
        </div>
      </section>

      {/* playlist wrap */}
      <section className="my-playlist">
        <div className="trending-zone">
          <h2 className="trending-header">My Playlist</h2>
          <div className="icon-section">
            <h3 className="trending-icons"> Show All</h3>
          </div>
        </div>

        <PlaylistTitleCard
          number={"#"}
          title={"TITLE"}
          artist={"ARTIST"}
          time={"TIME"}
          album={"ALBUM"}
        />

        <section className="main-scrollbar">
          {Array(9)
            .fill(0)
            .map((_, i) => (
              <PlaylistCards
                number={i + 1}
                title={"Addict"}
                artist={"Kizz Daniel"}
                time={"03:24"}
                album={"Barnabas"}
                key={i}
              />
            ))}
        </section>
      </section>
      <section className="play-station">
        <Player />
      </section>
    </main>
  );
};

export default Main;

const Player = () => {
  const [playing, setPlaying] = useState(false);
  const audio = Audio({
    file: "https://p.scdn.co/mp3-preview/8d1fa7a10f67ff020e5099271d8a80d47e00b4dc?cid=d7208688b03147aebe8d5aeae751497f",
  });
  const play = () => {
    audio.play();
    setPlaying(!playing);
  };
  const pause = () => {
    audio.pause();
    setPlaying(playing);
  };
  return (
    <section className="player-container">
      <section className="music-player-buttons">
        <div className="leftplay-buttons">
          <i className="music-btn">
            {" "}
            <FaMusic />{" "}
          </i>
          <i className="heart-btn">
            {" "}
            <BsBalloonHeart />
          </i>
          <i className="expand-btn">
            {" "}
            <BsArrowsAngleExpand />
          </i>
        </div>
        <div className="play-buttons">
          <i>
            <BsRepeat />
          </i>
          <button className="prev-btn">
            <TbPlayerTrackPrevFilled />
          </button>
          {playing ? (
            <button className="pause-btn" onClick={pause}>
              <BsFillPauseCircleFill />
            </button>
          ) : (
            <button className="play-btn" onClick={play}>
              <BsFillPlayCircleFill />
            </button>
          )}
          <button className="next-btn">
            <TbPlayerTrackNextFilled />
          </button>
          <i>
            <BsShuffle />
          </i>
        </div>
        <div className="rightplay-buttons">
          <div className="center-buttons">
            <div className="music-btn">
              <BsVolumeDownFill />
            </div>
            <Inputrange style={{ width: "30px" }} />
            <div className="expand-btn">
              <BsFillVolumeUpFill />
            </div>
          </div>
        </div>
      </section>
      <section className="radio-buttons">
        <div>
          <p className="start-time-stamps">0:43</p>
        </div>
        <Inputrange />
        <div>
          <p className="stop-time-stamp">2:59</p>
        </div>
      </section>
    </section>
  );
};
