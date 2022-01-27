import React from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../auth/useUser";
import imgPath from "../assests/hero.png";

const Home = () => {
  let user = useUser();
  let username = "Guest";
  if (user) username = user.user.name;

  let navigate = useNavigate();

  return (
    <>
      <div className="md:p-5  xl:h-96 xl:p-20">
        <div className="pt-3 md:pt-5 lg:pt-10">
          <div className="container px-3 mx-auto flex flex-wrap flex-col md:px-0 md:w-full xl:flex-row items-center justify-end">
            {/* Left col */}
            <div className="flex flex-col w-full justify-center items-start md:w-4/5 md:text-left xl:w-2/5 text-white ">
              <p className="uppercase tracking-loose w-full text-base md:text-lg lg:text-xl xl:text-2xl">
                from mohit maroliya -
              </p>
              <h1 className="my-4 text-3xl md:text-5xl lg:text-7xl xl:text-8xl font-bold leading-tight">
                Welcome {username} !
              </h1>
              <p className="leading-normal text-base text-justify md:text-lg lg:text-xl xl:text-2xl mb-4 md:mb-6 lg:mb-8 ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <button 
                className="mx-auto lg:mx-0 border-2 my-2 py-2 px-3 text-base md:text-lg md:px-6 md:py-4 lg:my-6 lg:py-4 lg:px-8 lg:text-xl
                 hover:underline hover:bg-blue-900 bg-blue-600 text-white font-bold rounded-full  shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out cursor-pointer" onClick={() => navigate("/about")}>
                See Profile
              </button>
            </div>
            {/* Right COl */}
            <div className="w-full md:w-3/5 py-6 text-center">
              <img className="w-full md:w-5/5 xl:w-4/5 xl:ml-[200px] z-50" src={imgPath} alt="right_img" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
