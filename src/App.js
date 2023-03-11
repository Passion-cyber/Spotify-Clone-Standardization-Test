import { useState, useEffect } from "react";
import "./App.css";
import Login from "./Components/Authentication/Login";
import Overview from "./Pages/Overview";

function App() {
  const [token, setToken] = useState();

  useEffect(() => {
    const hash = window.location.hash;
    let spotifyTKN = window.localStorage.getItem("spotifyTKN");
    if (!spotifyTKN && hash) {
      spotifyTKN = hash
        .substring(1)
        .split("&")
        .find((el) => el.startsWith("access_token"))
        .split("=")[1];
      window.location.hash = "";
      window.localStorage.setItem("spotifyTKN", spotifyTKN);
    }
    setToken(spotifyTKN);
  }, []);

  return (
    <div className="container">
      {!token ? <Login /> : <Overview setToken={setToken} />}
    </div>
  );
}

export default App;
