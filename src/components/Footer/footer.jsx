import React from "react";
import "./footer.scss";
import Insta from "./icons8-instagram.svg";
import Dis from "./icons8-discord.svg";
import Linked from "./icons8-linkedin-2.svg";
import Mail from "./icons8-mail.svg";
import DevPost from "./icons8-dev-post.svg";
import PrivacyPolicy from "./Privacy policy.pdf";
import TermsOfUse from "./Terms of use.pdf";
import Twitter from "./icons8-twitter.svg";
export default function Footer() {
  return (
    <div>
      <div className="footer">
        <div className="social-icons-container">
          <div className="social-icon">
            <a
              rel="noreferrer"
              target="_blank"
              href="https://www.instagram.com/limbohacks/"
            >
              <img src={Insta} alt="" />
            </a>
          </div>
          <div className="social-icon">
            <a
              rel="noreferrer"
              target="_blank"
              href="https://discord.gg/un2USMtv"
            >
              <img src={Dis} alt="" />
            </a>
          </div>
          <div className="social-icon">
            <a
              rel="noreferrer"
              target="_blank"
              href="https://www.linkedin.com/company/limbo-hacks/"
            >
              <img src={Linked} alt="" />
            </a>
          </div>
          <div className="social-icon">
            <a
              rel="noreferrer"
              target="_blank"
              href="mailto:hello@limbohacks.tech"
            >
              <img src={Mail} alt="" />
            </a>
          </div>
          <div className="social-icon">
            <a
              rel="noreferrer"
              target="_blank"
              href="https://twitter.com/HacksLimbo"
            >
              <img src={Twitter} alt="" />
            </a>
          </div>
          <div className="social-icon">
            <a
              rel="noreferrer"
              target="_blank"
              href="https://limbo-hacks-12968.devpost.com/"
            >
              <img src={DevPost} alt="" />
            </a>
          </div>
        </div>
        <p>
          Contact us{" "}
          <a href="mailto:hello@limbohack.tech">
            <em>hello@limbohack.tech</em>
          </a>{" "}
        </p>
        <a
          href={PrivacyPolicy}
          download
          target="blank"
          className="privacy-policy"
        >
          <p>Privacy Policy</p>
        </a>
        <a href={TermsOfUse} download target="blank" className="privacy-policy">
          <p>Terms of Use</p>
        </a>
        <p>Made with ❤️ </p>
      </div>
    </div>
  );
}