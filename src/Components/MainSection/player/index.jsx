import { useState, useEffect } from "react";
import SpotifyPlayer from "react-spotify-web-playback";

export default function SpotifyPlayerWrapper({ accessToken, songs }) {
  const [count, setCount] = useState(1);
  const trackUri = songs[count - 1]?.uri;

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

  if (!accessToken) return null;
  return (
    <SpotifyPlayer
      token={accessToken}
      showSaveIcon
      callback={(state) => {
        if (!state.isPlaying) setPlay(false);
      }}
      play={play}
      uris={trackUri ? [trackUri] : []}
    />
  );
}
