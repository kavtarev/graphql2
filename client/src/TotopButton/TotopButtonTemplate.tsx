import React, { useEffect, useRef, useState } from "react";
import "./Totop.scss";

export const TotopButtonTemplate = () => {
  const [scroll2, setScroll2] = useState(0);

  useEffect(() => {
    let scrollFunc = () => {
      setScroll2(window.scrollY);
      console.log("our scroll ", scroll2);
    };
    window.addEventListener("scroll", scrollFunc);
    return () => window.removeEventListener("scroll", scrollFunc);
  });

  return !scroll2 ? (
    <></>
  ) : (
    <div
      onClick={() =>
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth",
        })
      }
      className={"to-top"}
    >
      <div className="to-top-container">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 70 70">
          <g fill="none">
            <circle cx="35" cy="35" r="35" fill="#000"></circle>
            <path
              d="M28 33.024L35.01 25 42 33.024M35 25.5v19"
              stroke="#FFF"
              stroke-width="1.5"
            ></path>
          </g>
        </svg>
      </div>
    </div>
  );
};
