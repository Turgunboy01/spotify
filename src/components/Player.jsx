import React, { useContext } from "react";
import { assets, songsData } from "../../public/assets/assets";
import { PlayerContext } from "../context/PlayerContext";

const Player = () => {
  const {
    seegBg,
    seegBar,
    play,
    pause,
    playStatus,
    track,
    time,
    next,
    previous,
    seekSong,
  } = useContext(PlayerContext);
  return (
    <div className=" flex bg-black justify-between items-center h-[10%] text-white px-4">
      <div className="hidden lg:flex items-center gap-4">
        <img className="w-12" src={track.image} alt="" />
        <div className="">
          <p>{track.name}</p>
          <p>{track.desc.slice(0, 15)}...</p>
        </div>
      </div>

      <div className="flex flex-col items-center gap-1 m-auto">
        <div className="flex gap-4">
          <img
            src={assets.shuffle_icon}
            className="w-4 cursor-pointer"
            alt="icon"
          />
          <img
            onClick={previous}
            src={assets.prev_icon}
            className="w-4 cursor-pointer"
            alt="icon"
          />
          {!playStatus ? (
            <img
              onClick={play}
              src={assets.play_icon}
              className="w-4 cursor-pointer"
              alt="icon"
            />
          ) : (
            <img
              onClick={pause}
              src={assets.pause_icon}
              className="w-4 cursor-pointer"
              alt="icon"
            />
          )}
          <img
            onClick={next}
            src={assets.next_icon}
            className="w-4 cursor-pointer"
            alt="icon"
          />
          <img
            src={assets.loop_icon}
            className="w-4 cursor-pointer"
            alt="icon"
          />
        </div>
        <div className="flex items-center gap-5">
          <p>
            {time.currentTime.minut}:{time.currentTime.second}
          </p>
          <div
            onClick={seekSong}
            ref={seegBg}
            className="w-[60vw] max-w-[450px] bg-gray-300 rounded-full cursor-pointer"
          >
            <hr
              ref={seegBar}
              className="h-1 bg-green-800 rounded-full border-0 w-0"
            />
          </div>
          <p>
            {time.totalTime.minut}:{time.totalTime.second}
          </p>
        </div>
      </div>
      <div className="hidden lg:flex items-center gap-2 opacity-75">
        <img className="w-4" src={assets.play_icon} alt="icon" />
        <img className="w-4" src={assets.mic_icon} alt="icon" />
        <img className="w-4" src={assets.queue_icon} alt="icon" />
        <img className="w-4" src={assets.speaker_icon} alt="icon" />
        <img className="w-4" src={assets.volume_icon} alt="icon" />
        <div className="w-20 bg-slate-50 h-1 rounded-full"></div>
        <img className="w-4" src={assets.play_icon} alt="icon" />
        <img className="w-4" src={assets.play_icon} alt="icon" />
      </div>
    </div>
  );
};

export default Player;
