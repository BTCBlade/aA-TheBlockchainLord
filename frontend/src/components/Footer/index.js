import React from "react";

import "./Footer.css";

export default function Footer() {
  return (
    <>
      <footer className="footer-container">
        <div className="footer-left">
          <h5>About</h5>
          <p>
            My first full stack solo project done at App Academy in one week!
          </p>
        </div>

        <div className="footer-center">
          <a href="https://www.twitch.tv/btcblade">
            <i class="fab fa-twitch fa-2x"></i>
          </a>
          <a href="https://github.com/btcblade">
            <i class="fab fa-github-square fa-2x"></i>
          </a>
          <a href="mailto: tommynchen@gmail.com">
            <i class="fas fa-envelope-square fa-2x"></i>
          </a>
          <a href="https://www.linkedin.com/in/tommy-nienchi-chen-a131451b3/">
            <i class="fab fa-linkedin fa-2x"></i>
          </a>
        </div>
        <div className="footer-right">
          <h5>Technologies Used</h5>
          <div className="footer-technologies-used-container">
            <div className="footer-img-container">
              <img alt="pic" src="/technologies/icons8-nodejs-96.png"></img>
            </div>
            <div className="footer-img-container">
              <img
                alt="pic"
                src="/technologies/heroku_logo_icon_169035.png"
              ></img>
            </div>
            <div className="footer-img-container">
              <img alt="pic" src="/technologies/redux-logo.png"></img>
            </div>
            <div className="footer-img-container">
              <img alt="pic" src="/technologies/react-logo.png"></img>
            </div>
            <div className="footer-img-container">
              <img alt="pic" src="/technologies/expressjs.png"></img>
            </div>
            <div className="footer-img-container">
              <img alt="pic" src="/technologies/postgresql-logo.png"></img>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
