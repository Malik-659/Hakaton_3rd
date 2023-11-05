import React from "react";
import "./Footer.css";
import logo from "../../assets/icons/logo.png";

function Footer() {
  const createBubbles = () => {
    const bubbles = [];
    for (let i = 0; i < 128; i++) {
      const size = 2 + Math.random() * 4;
      const distance = 6 + Math.random() * 4;
      const position = -5 + Math.random() * 110;
      const time = 2 + Math.random() * 2;
      const delay = -1 * (2 + Math.random() * 2);

      const bubbleStyle = {
        "--size": `${size}rem`,
        "--distance": `${distance}rem`,
        "--position": `${position}%`,
        "--time": `${time}s`,
        "--delay": `${delay}s`,
      };

      bubbles.push(<div key={i} className="bubble" style={bubbleStyle}></div>);
    }

    return bubbles;
  };

  return (
    <div className="main mt-24">
      <div className="footer">
        <div className="bubbles">{createBubbles()}</div>
        <div className="content">
          <div>
            <img src={logo} alt="logo" className="w-72 h-62" />
          </div>
          <div>
            <a
              className="image"
              href="https://codepen.io/z-"
              target="_blank"
              style={{
                backgroundImage:
                  'url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/199011/happy.svg")',
              }}
            ></a>
            <p className="text-white text-xl font-bold mt-36">©2023 by Redux</p>
          </div>
        </div>
      </div>
      <svg style={{ position: "fixed", top: "100vh" }}>
        <defs>
          <filter id="blob">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="10"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
              result="blob"
            />
            <feComposite in="SourceGraphic" in2="blob" operator="atop" />
          </filter>
        </defs>
      </svg>
    </div>
  );
}

export default Footer;
