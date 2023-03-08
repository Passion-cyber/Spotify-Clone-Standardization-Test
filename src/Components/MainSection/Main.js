import React from "react";
import "./Main.css";
import { BsArrowLeft, BsArrowRight, BsFire } from "react-icons/bs";
import { RiSearchLine } from "react-icons/ri";
import { AiOutlineRight } from "react-icons/ai";
import PlaylistCards from "./PlaylistCards";
import PlaylistTitleCard from "./PlaylistTitleCard";

const Main = () => {
  return (
    <main className="main-container">
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
              {" "}
              <RiSearchLine />{" "}
            </span>
            <input
              type="text"
              className="inputField"
              placeholder="Search for artists, songs and ..."
            />
          </div>
        </div>
      </section>

      <section className="trending">
        <h2 className="trending-text">
          What's hot <BsFire />
        </h2>
        <div className="trending-zone">
          <h2 className="trending-header">Trending</h2>
          <div className="icon-section">
            <h3 className="trending-icons"> More</h3>
            <span>
              <AiOutlineRight />{" "}
            </span>
          </div>
        </div>
      </section>

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
          <PlaylistCards
            number={"1"}
            title={"Addict"}
            artist={"Kizz Daniel"}
            time={"03:24"}
            album={"Barnabas"}
          />

          <PlaylistCards
            number={"2"}
            title={"Seasons"}
            artist={"6LACK ft Khalid"}
            time={"03:44"}
            album={"East Atlanta Love Letter"}
          />
          <PlaylistCards
            number={"3"}
            title={"Common Person"}
            artist={"Burna Boy"}
            time={"03:32"}
            album={"Love Dahmini"}
          />
          <PlaylistCards
            number={"4"}
            title={"Joha"}
            artist={"Asake"}
            time={"03:34"}
            album={"MMWTV"}
          />
          <PlaylistCards
            number={"5"}
            title={"Soso"}
            artist={"Omah Lay"}
            time={"02:59"}
            album={"Boy Alone"}
          />
          <PlaylistCards
            number={"5"}
            title={"Soso"}
            artist={"Omah Lay"}
            time={"02:59"}
            album={"Boy Alone"}
          />
          <PlaylistCards
            number={"5"}
            title={"Soso"}
            artist={"Omah Lay"}
            time={"02:59"}
            album={"Boy Alone"}
          />
        </section>
      </section>
      <section className="play-station"></section>
    </main>
  );
};

export default Main;
