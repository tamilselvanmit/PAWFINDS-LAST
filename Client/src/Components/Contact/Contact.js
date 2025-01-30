import React from "react";
import developerPng from "./images/developer-png.png";

const Contact = () => {
  return (
    <div className="contactUs-main-container">
      <div className="contactUs-left-para">
        <h3>Let's get in touch</h3>
        <i class="fa fa-envelope"></i>
        <a class="mail-links" href="mailto:tamilrider143@gmail.com">
          tamilrider143@gmail.com
        </a>

        <i class="fa fa-linkedin"></i>
        <a class="mail-links" href="https://www.linkedin.com/in/kashiekzmi/">
          User Name: TamilSelvan
        </a>

        <i class="fa fa-github"></i>
        <a class="mail-links" href="https://github.com/KaShiekzmi">
          tamilselvan_M
        </a>

        <i class="fa fa-instagram"></i>
        <a class="mail-links" href="https://www.instagram.com/kaxhie_x/">
          @b_cauz__
        </a>

        <i class="fa fa-phone"></i>
        <a class="mail-links" href="tel:+916381695650">
          +91 638 1695650
        </a>
      </div>
      <div className="contactUs-pic">
        <img src={developerPng} alt="Profile"/>
      </div>
    </div>
  );
};

export default Contact;
