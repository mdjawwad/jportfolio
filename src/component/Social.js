import React from "react";
import { faFacebook, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Social() {
  return (
    <div className="SocialSection">
      <div className="icon-holder">
        <div className="icons">
          <a
            href="https://www.facebook.com/md.jawwad.581"
            target="_blank" rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faFacebook} className="icon fb" />
          </a>
          <a
            href="https://github.com/mdjawwad"
            target="_blank" rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} className="icon gh" />
          </a>
          <a
            href="https://www.linkedin.com/mwlite/in/muhammad-jawwad-4b244a18b"
            target="_blank" rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} className="icon ln" />
          </a>
          <a
            href="https://www.youtube.com/channel/UCfu4HpQ0pZzJ0_cK2OdjTaw"
            target="_blank" rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faYoutube} className="icon yt" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Social;
