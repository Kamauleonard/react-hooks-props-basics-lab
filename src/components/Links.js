import React from "react";
import About from "./About";

function Links(props) {
  const { github, linkedin } = props;

  return (
    <div>
      <h3>Links</h3>
      <ul>
        {github && (
          <li>
            <a href={github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </li>
        )}
        {linkedin && (
          <li>
            <a href={linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </li>
        )}
      </ul>
    </div>
  );
}

export default Links;
