import React from "react";
import Dp from "../images/dp.jpeg";

function Home() {
  return (
    <>
      <div className="home-bg" id="home">
        <center>
          <img
            src={Dp}
            data-aos="zoom-in"
            data-aos-offset="0"
            className="dp"
            alt=""
          />
          <br />
          <span className="dp-text">Tajender Batra</span>
          <br />
          <pre>
            <span className="dp-text2">
              FULL STACK
              <br />
              DEVELOPER
            </span>
          </pre>
        </center>
      </div>
    </>
  );
}

export default Home;
