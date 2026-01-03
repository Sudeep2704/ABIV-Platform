import "../Footer/footer.css";
import React from 'react';
import twitterSVG from "../../assets/twitter.svg";
import instagramSVG from "../../assets/instagram.svg";
import linkdinSVG from "../../assets/linkdin.svg";
import whatsappSVG from "../../assets/whatsapp.svg";
import youtubeSVG from "../../assets/youtube.svg";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <h2>ABIV</h2>
          <p>
            A pioneering tech company driven by <br/>innovation, 
            excellence,  and a passion for <br/> creating cutting-edge solutions.
          </p>
          <p className="email">team@rnpsoft.com</p>
          <p>+91 9798291701</p>
          <p>+91 8637845107</p>
          <p className="rights">&copy; 2024 RnPSoft, All rights reserved</p>
        </div>
        <div className="footer-right">
          <div className="footer-links">
            <h3>About Us</h3>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/">Our Team</a></li>
              <li><a href="/">Our Services</a></li>
              <li><a href="/">Career</a></li>
            </ul>
          </div>
          <div className="footer-social">
            <h3>Follow Us:</h3>
            <ul>
              <li>
                <a href="/">
                <img src={instagramSVG} alt="instagram-icon"></img>
                </a>
              </li>
              <li>
                <a href="/">
                <img src={twitterSVG} alt="twitter-icon"></img>
                </a>
              </li>
              <li>
                <a href="/">
                <img src={linkdinSVG} alt="linkedin-icon"></img>
                </a>
              </li>
              <li>
                <a href="/">
                <img src={whatsappSVG} alt="whatsapp-icon"></img>
                </a>
              </li>
              <li>
                <a href="/">
                <img src={youtubeSVG} alt="youtube-icon"></img>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
    </footer>
  );
}
