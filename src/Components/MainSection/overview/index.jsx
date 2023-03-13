import React from "react";
import { AiOutlineRight } from "react-icons/ai";
import PlaylistCards from "../PlaylistCards";
import PlaylistTitleCard from "../PlaylistTitleCard";
import { converterToSeconds } from "../SearchResultCard";

const Overview = ({ songs }) => {
  return (
    <>
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
          <h2 className="trending-header">My Playlist </h2>
          <div className="icon-section">
            <h3 className="trending-icons"> Show All</h3>
          </div>
        </div>

        <PlaylistTitleCard
          number={"#"}
          title={"Title"}
          artist={"Artist"}
          time={"Time"}
          album={"Album"}
        />
        <section className="main-scrollbar">
          {songs?.length > 1 ? (
            songs?.map((_, i) => (
              <PlaylistCards
                number={i + 1}
                title={_?.name.substring(0, 15) + "..."}
                artist={_?.artists[0]?.name}
                time={converterToSeconds(_?.duration_ms)}
                album={_?.album?.name}
                key={i}
              />
            ))
          ) : (
            <div
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "2rem",
              }}
            >
              no playlist availabe
            </div>
          )}
        </section>
      </section>
    </>
  );
};

export default Overview;
