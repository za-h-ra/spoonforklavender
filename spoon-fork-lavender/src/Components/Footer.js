import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faCopyright } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import Logo from "../assets/Logo-White-2.png"
import Social from "./Social"

export default function Footer() {
  return (
    <>
      <div className="footer-container">
        <div className="left-column">
          <img src={Logo} className="logo"></img>
          <Social />
          <p className="copyright-text"><FontAwesomeIcon className="copyright-icon" icon={faCopyright} /> 2020 Built with love by Zahra Khan. <br /> Powered by Yelp Fusion.</p>
        </div>

        <div className="right-column">
          <h2>Our Newsletter</h2>
          <div className="border"></div>
          <p>Enter Your Email to learn more about your favorite NYC spots!</p>
          <form action="" className="newsletter-form">
            <input type="text" className="news-text-box" placeholder="Enter Your Email" />
            <input type="submit" className="news-button" value="submit" />
          </form>
        </div>
      </div>
    </>
  );
}

library.add(fab, faCopyright, faHeart);
