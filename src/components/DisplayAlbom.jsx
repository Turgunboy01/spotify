import React, { useContext } from "react";
import Navbar from "./Navbar";
import { useParams } from "react-router-dom";
import { albumsData, assets, songsData } from "../../public/assets/assets";
import { PlayerContext } from "../context/PlayerContext";
const DisplayAlbom = () => {
  const { id } = useParams();
  const albomData = albumsData[id];
  const { playWidth } = useContext(PlayerContext);
  console.log(albomData);
  return (
    <>
      <Navbar />
      <div className="mt-10 flex gap-8 flex-col md:flex-row md:items-end">
        <img src={albomData.image} className="w-48 rounded" alt="img" />
        <div className="flex flex-col">
          <p>Playlist</p>
          <h2 className="text-5xl md:text-7xl font-bold mb-4">
            {albomData.name}
          </h2>
          <h4>{albomData.desc}</h4>
          <p className="mt-1">
            <img
              src={assets.spotify_logo}
              className="inline-block w-5"
              alt="logo"
            />
            <b>Spotify</b> - 1,324,154 likes - <b>50 songs</b> about 2 hr 30 min
          </p>
        </div>
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 text-[#a7a7a7]">
        <p>
          <b className="mr-4">#</b>Title
        </p>
        <p>Albom</p>
        <p className="hidden sm:block">Data Albom</p>
        <img src={assets.clock_icon} className="m-auto w-4" alt="clock" />
      </div>
      <hr />
      <div className="h-[30%] overflow-auto">
        {songsData.map((item, index) => (
          <div
            onClick={() => playWidth(item.id)}
            key={index}
            className="grid grid-cols-3 sm:grid-cols-4 gap-2 p-2 items-center text-[#a7a7a7] hover:bg-[#ffffff37]"
          >
            <p className="text-[#fff]">
              <b className="mr-4 text-[#a7a7a7]">{index + 1}</b>
              <img src={item.image} className="w-10 mr-5 inline" alt="albom" />
              {item.name}
            </p>
            <p className="text-[15px]">{albomData.name}</p>
            <p className="text-[15px] hidden sm:block">5 days ago</p>
            <p className="text-[15px] text-center">{item.duration}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default DisplayAlbom;
