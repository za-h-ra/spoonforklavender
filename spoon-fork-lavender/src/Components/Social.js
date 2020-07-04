import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab } from "@fortawesome/free-brands-svg-icons";

export default function Social() {
  return (
    <>
      <div className="social-buttons">
        <a href="#">
          <FontAwesomeIcon
            className="social-icons"
            icon={["fab", "facebook-f"]}
          />
        </a>
        <a href="#">
          <FontAwesomeIcon
            className="social-icons"
            icon={["fab", "instagram"]}
          />
        </a>
        <a href="#">
          <FontAwesomeIcon className="social-icons" icon={["fab", "twitter"]} />
        </a>
        <a href="#">
          <FontAwesomeIcon
            className="social-icons"
            icon={["fab", "linkedin-in"]}
          />
        </a>
      </div>
    </>
  );
}

library.add(fab);
