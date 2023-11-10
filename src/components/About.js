import React from "react";
import user from "../data/user";
import Links from "./Links";
function About(props) {
  return (
    <div id="about">
      {props.bio && props.bio.trim() !== "" && <p>{props.bio}</p>}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links linkedin={user.links.linkedin} github={user.links.github}/> 
    </div>
  );
}


export default About;
