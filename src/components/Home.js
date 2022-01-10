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
      <div className="w-full h-96 p-20">
        <div className="pt-10">
          <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center justify-end">
            {/* Left col */}
            <div className="flex flex-col w-full md:w-2/5 justify-center items-start md:text-left text-white ">
              <p className="uppercase tracking-loose w-full ">
                from mohit maroliya -
              </p>
              <h1 className="my-4 text-7xl font-bold leading-tight">
                Welcome {username} !
              </h1>
              <p className="leading-normal text-2xl mb-8 ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <button className="mx-auto lg:mx-0 border-2 hover:underline hover:bg-blue-900 bg-blue-600 text-white font-bold rounded-full my-6 py-4 px-8 text-base shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out cursor-pointer" onClick={()=>navigate("/about")}>
                See Profile
              </button>
            </div>
            {/* Right COl */}
            <div className="w-full md:w-3/5 py-6 text-center">
              <img className="w-full md:w-4/5 ml-[200px] z-50" src={imgPath} alt="right_img" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
