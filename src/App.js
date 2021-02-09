import React, { useState, useRef } from "react";
import Player from "./Components/Player";
import Song from "./Components/Song";
import "./styles/app.scss";
import data from "./data";
import Library from "./Components/Library";
import Nav from "./Components/Nav";

function App() {
    // Ref
    const audioRef = useRef(null);
    // State
    const [songs, setSongs] = useState(data());
    const [currentSong, setCurrentSong] = useState(songs[0]);
    const [isPlaying, setIsPlaying] = useState(false);
    const [songInfo, setSongInfo] = useState({
        currentTime: 0,
        duration: 0,
    });
    const [libraryStatus, setLibraryStatus] = useState(false);

    // Seeker Update
    const timeUpdateHandler = (e) => {
        const current = e.target.currentTime;
        const duration = e.target.duration;
        setSongInfo({ ...songInfo, currentTime: current, duration: duration });
    };

    const songEndHandler = async () => {
        let currentIndex = songs.findIndex(
            (song) => song.id === currentSong.id
        );
        await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
        if (isPlaying) audioRef.current.play();
    };

    // Pass CurrentSong into Player
    return (
        <div className={`app ${libraryStatus ? "library-active" : ""}`}>
            <Nav
                libraryStatus={libraryStatus}
                setLibraryStatus={setLibraryStatus}
            />
            <Song currentSong={currentSong} />
            <Player
                songs={songs}
                audioRef={audioRef}
                isPlaying={isPlaying}
                setIsPlaying={setIsPlaying}
                currentSong={currentSong}
                setSongInfo={setSongInfo}
                songInfo={songInfo}
                setCurrentSong={setCurrentSong}
                setSongs={setSongs}
            />
            <Library
                libraryStatus={libraryStatus}
                songs={songs}
                audioRef={audioRef}
                setCurrentSong={setCurrentSong}
                isPlaying={isPlaying}
                setSongs={setSongs}
            />
            <audio
                onLoadedMetadata={timeUpdateHandler}
                onTimeUpdate={timeUpdateHandler}
                ref={audioRef}
                src={currentSong.audio}
                onEnded={songEndHandler}
            ></audio>
        </div>
    );
}

export default App;
