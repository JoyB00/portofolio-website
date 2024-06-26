import React from "react";
import Marquee from "react-fast-marquee";
import IconComponent from "./IconComponent";

export default function MarqueeSlider() {
  return (
    <Marquee
      pauseOnClick
      speed={160}
      gradient
      gradientColor={"black"}
      gradientWidth={100}
    >
      {Array.from({ length: 5 }).map((_, index) => (
        <div key={index} style={{ marginRight: "50px" }}>
          <IconComponent />
        </div>
      ))}
    </Marquee>
  );
}
