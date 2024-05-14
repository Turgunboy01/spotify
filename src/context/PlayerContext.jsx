import { createContext, useEffect, useRef, useState } from "react";
import { songsData } from "../../public/assets/assets";

export const PlayerContext = createContext();

const PlayerContextPlayer = ({ children }) => {
  useEffect(() => {
    setTimeout(() => {
      audioRef.current.ontimeupdate = () => {
        seegBar.current.style.width =
          Math.floor(
            (audioRef.current.currentTime / audioRef.current.duration) * 100
          ) + "%";
        setTime({
          currentTime: {
            second: Math.floor(audioRef.current.currentTime % 60),
            minut: Math.floor(audioRef.current.currentTime / 60),
          },
          totalTime: {
            second: Math.floor(audioRef.current.duration % 60),
            minut: Math.floor(audioRef.current.duration / 60),
          },
        });
      };
    });
  }, []);

  const audioRef = useRef();
  const seegBg = useRef();
  const seegBar = useRef();

  const [track, setTrack] = useState(songsData[2]);
  const [playStatus, setPlayStatus] = useState(false);
  const [time, setTime] = useState({
    currentTime: {
      second: 0,
      minut: 0,
    },
    totalTime: {
      second: 0,
      minut: 0,
    },
  });

  const play = () => {
    audioRef.current.play();
    setPlayStatus(true);
  };

  const pause = () => {
    audioRef.current.pause();
    setPlayStatus(false);
  };

  const playWidth = async (id) => {
    await setTrack(songsData[id]);
    await audioRef.current.play();
    setPlayStatus(true);
  };

  const previous = async () => {
    if (track.id) {
      await setTrack(songsData[track.id - 1]);
      await audioRef.current.play();
      setPlayStatus(true);
    }
  };

  const next = async () => {
    if (track.id < songsData.length - 1) {
      await setTrack(songsData[track.id + 1]);
      await audioRef.current.play();
      setPlayStatus(true);
    }
  };

  const seekSong = async (e) => {
    // console.log(e, "seeksong");
    audioRef.current.currentTime =
      (e.nativeEvent.offsetX / seegBg.current.offsetWidth) *
      audioRef.current.duration;
  };

  const contextValue = {
    audioRef,
    seegBg,
    seegBar,
    track,
    setTrack,
    playStatus,
    setPlayStatus,
    time,
    setTime,
    play,
    pause,
    playWidth,
    previous,
    next,
    seekSong,
  };
  return (
    <PlayerContext.Provider value={contextValue}>
      {children}
    </PlayerContext.Provider>
  );
};

export default PlayerContextPlayer;
