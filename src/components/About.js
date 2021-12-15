import React from "react";
import { useUser } from "../auth/useUser";

const About = () => {
  let user = useUser();
  let username = "Guest";
  if (user) username = user.user.name;

  return (
    <div>
      <h1 className="text-center p-4 display-2"> Welcome {username} </h1>
      <h1 className="text-center p-4 display-3">This is About Page</h1>
    </div>
  );
};

export default About;
