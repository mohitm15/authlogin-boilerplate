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
        <div className="container py-20">
          <div className="h-full p-20 border-2 rounded-3xl bg-white text-black flex align-baseline items-center ">
            <div className="w-20 md:w-3/5 py-6 text-center item-center border-2 px-10 m-5 border-black">
              <img
                className="w-50 h-80 md:w-4/5 z-50 space-x-3 align-middle m-auto"
                src={imgPath}
                alt="right_img"
              />
            </div>
            <div className="flex flex-col w-full p-5 md:w-2/5 justify-center items-start md:text-left ">
              <h1 className="text-5xl font-bold text-red-500 item-center mb-3">
                About Me !
              </h1>
              <div className="bg-gray-100 p-4 border-2 border-dashed border-black">
                <div className="h-30 py-4 px-4 flex flex-row flex-nowrap overflow-hidden items-center space-x-5">
                  <span className="text-3xl font-medium text-neutral-800 uppercase ">
                    Name
                  </span>
                  <span className="bg-gray-700 text-white py-1 px-2 font-extrabold"></span>
                  <span className="text-3xl font-light text-neutral-800 uppercase ">
                    {username}
                  </span>
                </div>
                <div className="h-30 p-4  flex flex-row  items-center space-x-5">
                  <span className="text-3xl font-medium text-neutral-800 uppercase ">
                    Email
                  </span>
                  <span className="bg-gray-700 text-white py-1 px-2 font-extrabold"></span>
                  <span className="text-3xl font-light text-neutral-800 ">
                    {email}
                  </span>
                </div>
                <div className="h-30 p-4  flex flex-row items-center space-x-5">
                  <span className="text-3xl font-medium text-neutral-800 uppercase ">
                    Role
                  </span>
                  <span className="bg-gray-700 text-white py-1 px-2 font-extrabold"></span>
                  <span className="text-3xl font-light text-neutral-800 uppercase ">
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
