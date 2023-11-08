import React from "react";
import Links from "./Links";

function About(props) {
  const { bio } = props;

  return (
    <div id="about">
      <h2>About Me</h2>
      {bio && bio.trim() !== "" ? <p>{bio}</p> : null}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links />
    </div>
  );
}

export default About;
