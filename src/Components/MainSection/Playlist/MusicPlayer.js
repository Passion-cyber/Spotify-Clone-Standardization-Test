const Player = ({ songs }) => {
    const [playing, setPlaying] = useState(false);
    const [count, setCount] = useState(1);
    const audio = Audio({
      file: songs[count - 1]?.preview_url,
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