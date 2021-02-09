import React from "react";

const LibrarySong = ({
    song,
    songs,
    setCurrentSong,
    id,
    audioRef,
    isPlaying,
    setSongs,
}) => {
    const songSelectHandler = async () => {
        await setCurrentSong(song);
        audioRef.current.play();
        // Add Active State
        const newSongs = songs.map((song) => {
            if (song.id === id) {
                return {
                    ...song,
                    active: true,
                };
            } else {
                return {
                    ...song,
                    active: false,
                };
            }
        });
        setSongs(newSongs);
        // Check if the song is playing
        if (isPlaying) audioRef.current.play();
    };

    // Add backticks to add javascript into library-son
    return (
        <div
            onClick={songSelectHandler}
            className={`library-song ${song.active ? "selected" : ""}`}
        >
            <img alt={song.name} src={song.cover} />
            <div className="song-description">
                <h3>{song.name}</h3>
                <h4>{song.artist}</h4>
            </div>
        </div>
    );
};

export default LibrarySong;
