import React from "react";
import Marquee from "react-fast-marquee";
import IconComponent from "./IconComponent";
import { MySkills } from "../lib/TechStack";

export default function MarqueeSlider() {
  return (
    <Marquee
      pauseOnHover
      pauseOnClick
      speed={160}
      gradient
      gradientColor={"black"}
      gradientWidth={50}
      style={{ padding: 0, margin: 0 }}
    >
      {console.log(MySkills)}
      {MySkills.map((item, index) => {
        return (
          <div key={index} className="ms-4 lg:ms-8">
            <IconComponent icon={item.icon} title={item.title} />
          </div>
        );
      })}
    </Marquee>
  );
}
