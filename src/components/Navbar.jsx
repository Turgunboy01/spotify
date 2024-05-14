import React from "react";
import { assets } from "../../public/assets/assets";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="w-full flex justify-between items-center font-semibold">
        <div className="flex items-center gap-2">
          <img
            src={assets.arrow_left}
            onClick={() => navigate(-1)}
            className="w-8 bg-black rounded-2xl p-[7px] cursor-pointer"
            alt=""
          />
          <img
            src={assets.arrow_right}
            onClick={() => navigate(1)}
            className="w-8 h-8 bg-black rounded-2xl p-[7px] cursor-pointer"
            alt=""
          />
        </div>
        <div className="flex items-center gap-4">
          <p className=" bg-white text-black text-[15px] px-4 py-1 hidden md:block cursor-pointer rounded-2xl">
            Explore Premium
          </p>
          <p className="bg-black py-1 px-4 cursor-pointer rounded-2xl text-[15px]">
            Install App
          </p>
          <p className=" bg-purple-500 w-7 h-7 rounded-full flex text-black items-center justify-center">
            D
          </p>
        </div>
      </div>
      <div className="flex items-center gap-2 mt-4">
        <p className="bg-white px-4 py-1 rounded-2xl cursor-pointer text-black">
          All
        </p>
        <p className="bg-black px-4 py-1 rounded-2xl cursor-pointer">Music</p>
        <p className="bg-black px-4 py-1 rounded-2xl cursor-pointer">
          Podcasts
        </p>
      </div>
    </>
  );
};

export default Navbar;
