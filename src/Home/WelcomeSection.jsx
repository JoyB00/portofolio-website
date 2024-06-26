import React from "react";
import Avatar from "../assets/avatar.png";
import MarqueeSlider from "../component/MarqueeSlider";
import Navbar from "../Navbar";
const WelcomeSection = () => {
  return (
    <>
      <div className="pt">
        <div className="mb-4 flex justify-center">
          <div className="flex h-24 w-24 items-center justify-center rounded-full bg-violet-200 shadow-2xl shadow-violet-500">
            <img src={Avatar} alt="Avatar" className="h-20 w-20" />
          </div>
        </div>
        <div className="lg:mx-52">
          <p className="mb-4 font-semibold text-violet-500">Hi I'm Dendy</p>
          <h1 className="text-2xl font-semibold md:text-5xl">
            Full Stack Web Development, Content Creator, Editor and Tech
            Enthusiast
          </h1>
          <p className="mt-4 text-violet-200 opacity-70">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            minima expedita reiciendis
          </p>
        </div>
        <button className="mt-6 rounded-3xl bg-violet-700">Get in touch</button>
        <div className="mt-24 md:mx-24 lg:mx-48">
          <MarqueeSlider />
        </div>
      </div>
    </>
  );
};

export default WelcomeSection;
