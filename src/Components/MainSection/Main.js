import { Audio, AudioPlaylist } from "ts-audio";
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
import "../../Stylsheets/Main.css";
import axios from "axios";
import {
  TbPlayerTrackPrevFilled,
  TbPlayerTrackNextFilled,
} from "react-icons/tb";
import { FaMusic } from "react-icons/fa";
import Inputrange from "./Inputrange";
import Overview from "./overview";
import SongCard from "../songCard";
import SpotifyPlayerWrapper from "./player";

const Main = ({ userId }) => {
  const [searchartist, setSearchArtist] = useState("");
  const [data, setData] = useState(null);
  const [myPlaylist, setMyPlaylist] = useState([]);
  const [seekVal, setSeekVal] = useState(null)
  const [showSearchResult, setShowSearchResult] = useState(false);
  const spotifyTKN = window.localStorage.getItem("spotifyTKN");



  // making search request
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
            q: searchartist.length < 1 ? "6Lack" : searchartist,
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

  // Fetching User's playlist
  useEffect(() => {
    let mounted = true;
    const fetchUserPlaylist = async () => {
      try {
        const { data } = await axios(
          `https://api.spotify.com/v1/users/${userId}/playlists`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + spotifyTKN,
            },
          }
        );
        if (data?.items?.length >= 1) {
          const res = await axios.get(data?.items?.reverse()[0]?.tracks?.href, {
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + spotifyTKN,
            },
          });
          const tracks = res?.data;
          setMyPlaylist(tracks?.items?.map((track) => track?.track));
        }
      } catch (error) {
        console.log(error);
      }
    };
    if (mounted && userId?.length > 1) fetchUserPlaylist();
    return () => (mounted = false);
  }, [userId]);
//  toggle search results and overview
  useEffect(() => {
    if (searchartist.length < 1) {
      setShowSearchResult(false);
    } else {
      setShowSearchResult(true);
    }
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
              onChange={(e) => {
                setSearchArtist(e.target.value);
              }}
            />
          </div>
        </div>
      </section>
      {showSearchResult ? (
        <div className="grid-songs">
          {" "}
          {data?.tracks?.items.map((el, i) => (
            <SongCard  key={i} el={el} action={()=>setSeekVal(i+1)} />
          ))}
        </div>
      ) : (
        <Overview songs={myPlaylist} />
      )}
      <section className="play-station">
        <SpotifyPlayerWrapper seekVal={seekVal} accessToken={spotifyTKN} songs={showSearchResult ? data?.tracks?.items : myPlaylist}/>
      </section>
    </main>
  );
};

export default Main;

const Player = ({ songs }) => {
  const [playing, setPlaying] = useState(false);

  const audio = Audio({
    file: songs?.map((el) => el?.preview_url)[0],
    loop: true,
    shuffle: true,
    preload: true,
  });
  const play = () => {
    audio.play();
    setPlaying(!playing);
  };
  const pause = () => {
    audio.stop();
    setPlaying(!playing);
    alert("called");
  };
  const next = () => {
    audio.next();
  };
  const prev = () => audio.prev;

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
          <button className="prev-btn" onClick={prev}>
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
          <button className="next-btn" onClick={next}>
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
