import { useState, useEffect } from "react";
import SpotifyPlayer from "react-spotify-web-playback";

export default function SpotifyPlayerWrapper({ accessToken, songs, seekVal }) {
  const [count, setCount] = useState(1);
  const trackUri = songs?.map((el) => el?.uri) ?? [];

  const [play, setPlay] = useState(false);

  useEffect(() => setPlay(true), [trackUri]);

  const playNext = () => {
    if (count >= songs.length - 1) return;
    setCount((prev) => prev + 1);
  };
  const playPrev = () => {
    if (count <= 1) return;
    setCount((prev) => prev - 1);
  };

  useEffect(() => {
    if (seekVal === null) return;
    setCount(seekVal);
    // alert(seek);
  }, [seekVal]);

  if (!accessToken) return null;
  return (
    <SpotifyPlayer
      token={accessToken}
      showSaveIcon
      callback={(state) => {
        if (!state.isPlaying) setPlay(false);
      }}
      play={play}
      uris={trackUri}
    />
  );
}
