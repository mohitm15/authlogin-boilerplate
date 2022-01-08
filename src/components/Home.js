import React from "react";
import { useUser } from "../auth/useUser";

const Home = () => {
  let user = useUser();
  let username = "Guest";
  if (user) username = user.user.name;

  return (
    <>
      <div className="bg-red-500 h-96 py-80">
        <h1 className="text-3xl font-bold underline bg-yellow-400">
          Hello world! , {username}
        </h1>
      </div>
    </>
  );
};

export default Home;
