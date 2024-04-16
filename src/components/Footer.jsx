import React from "react";
import "./../scss/footer.scss";
import Facebook from "../icons/Facebook";
import Twitter from "../icons/Twitter";
import Iinstagram from "../icons/Iinstagram";
import config from "../config";

function Footer() {
  const { socialMedia,name } = config;

  // fb: "https://www.facebook.com/",
  //   x: "https://www.facebook.com/",
  //   instagram: "https://www.facebook.com/",

  return (
    <div className="footer">
      <div className="box">
        <ul>
          <li>
            <a target="_blank" href={socialMedia.fb}>
              <Facebook w={16} />
            </a>
          </li>
          <li>
            <a target="_blank" href={socialMedia.x}>
              <Twitter w={16} />
            </a>
          </li>
          <li>
            <a target="_blank" href={socialMedia.instagram}>
              <Iinstagram w={16} />
            </a>
          </li>
        </ul>
        <span>© Copyright {new Date().getFullYear()} {name}</span>
      </div>
    </div>
  );
}

export default Footer;
