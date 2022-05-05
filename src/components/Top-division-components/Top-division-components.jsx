import React from "react";
import "./top-division-c.css";
import MytypedComponent from "../typing-effect/typing.js";

import {TOP_SECTION} from "../../Module/General";

function Btn(props) {
  React.useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://apply.devfolio.co/v2/sdk.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <div
      class="apply-button"
      data-hackathon-slug="hack-the-crisis"
      data-button-theme="light"
      style={{height: "44px", width: "312px"}}
    ></div>
    // <button className={props.class}>
    //   <i className={props.ico}></i>
    //   {props.type}
    //   {/* <div className="overlay">
    //     <div className="overlay-text">{props.overlay}</div>
    //   </div> */}
    // </button>
  );
}

function About() {
  return (
    <div className="AboutMe">
      <h2>{TOP_SECTION.TITLE}</h2>
      <MytypedComponent />
    </div>
  );
}

function Myinfo() {
  return (
    <div className="Myinfo">
      <About />
      <p> {TOP_SECTION.SHORT_DESCRIPTION}</p>
      <div className="join_dis">
        {/* <a rel="noreferrer" target="_blank" href={"#"}> */}
        <a rel="noreferrer" href={"./"}>
          <Btn
            // ico="fab fa-2x fa-discord"
            class="join_disco"
            type="Register Now"
            overlay="Comming Soon"
          />
        </a>
      </div>
      {/* This is judges application button */}
      {/* <a href={TOP_SECTION.JUDGES_FORM_LINK}>
        {" "}
        <Btn class="sponsor_btn" type="Judges" overlay="Fill the form" />
      </a>

      <a href={TOP_SECTION.HACKERS_REGISTRATION_FORM_LINK}>
        {" "}
        <Btn class="register" type="Register " overlay="Hackers registration" />
      </a> */}
    </div>
  );
}

export {Btn, Myinfo};
