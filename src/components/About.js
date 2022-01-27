import React from "react";
import { useUser } from "../auth/useUser";
import errorImgPath from "../assests/badrequest.png";
import imgPath from "../assests/chess.png";

const About = () => {
  let user = useUser();
  let username = "Guest";
  let email = "guest@test.com";
  let role = "guest";

  if (user) {
    username = user.user.name;
    email = user.user.email;
    role = user.user.role;
  }

  return (
    <>
      {username !== "Guest" ? (
        <div className="container py-5 lg:py-20">
          <div className="h-full p-1 xl:p-30 border-2 rounded-xl bg-white text-black flex flex-col xl:flex-row align-baseline items-center ">
            <div className="w-11/12 md:w-3/5 py-3 md:py-6 text-center item-center border-2 md:px-10 m-3 md:m-5 border-black">
              <img
                className="w-50 h-80 md:w-4/5 z-50 space-x-3 align-middle m-auto"
                src={imgPath}
                alt="right_img"
              />
            </div>
            <div className="flex flex-col w-11/12 p-1  lg:p-5 md:w-3/5 justify-center items-start text-center">
              <h1 className="text-2xl md:text-4xl lg:text-6xl font-medium  text-red-600 item-center mb-3 text-center">
                About Me !
              </h1>
              <div className="bg-gray-100 p-2 md:p-4 border-1 md:border-2 border-dashed border-black w-full mb-3 lg:mb-5">
                <div className="h-30 py-4 px-4 flex flex-row flex-nowrap overflow-hidden items-center space-x-5">
                  <span className="text-base md:text-lg lg:text-xl xl:text-3xl font-medium text-neutral-800 uppercase ">
                    Name
                  </span>
                  <span className="bg-gray-700 text-white py-1 px-2 font-bold md:font-extrabold"></span>
                  <span className="text-base md:text-lg lg:text-xl xl:text-3xl font-light text-neutral-800 uppercase ">
                    {username}
                  </span>
                </div>
                <div className="h-30 py-4 px-4   flex flex-row  items-center justify-start space-x-4">
                  <span className="text-base md:text-lg lg:text-xl xl:text-3xl font-medium text-neutral-800 uppercase ">
                    Email
                  </span>
                  <span className="bg-gray-700 text-white py-1 px-2 font-bold md:font-extrabold"></span>
                  <span className="text-base md:text-lg lg:text-xl xl:text-3xl font-light text-neutral-800 ">
                    {email}
                  </span>
                </div>
                <div className="h-30 p-4  flex flex-row items-center space-x-5">
                  <span className="text-base md:text-lg lg:text-xl xl:text-3xl font-medium text-neutral-800 uppercase ">
                    Role
                  </span>
                  <span className="bg-gray-700 text-white py-1 px-2 font-bold md:font-extrabold"></span>
                  <span className="text-base md:text-lg lg:text-xl xl:text-3xl font-light text-neutral-800 uppercase ">
                    {role}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="container">
          <div className="p-10 m-10 flex items-center justify-center flex-col xl:flex-row border-2 rounded-3xl drop-shadow-lg">
            <h1 className="text-xl md:text-3xl lg:text-5xl xl:text-7xl text-white w-full text-center">
              Oops ! You have to login first to see your profile :({" "}
            </h1>
            <img src={errorImgPath} className="xl:w-3/5" alt="bad_request" />
          </div>
        </div>
      )}
    </>
  );
};

export default About;
