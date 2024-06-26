import React from "react";
import Avatar from "../assets/avatar.png";
import MarqueeSlider from "../component/MarqueeSlider";
import { motion } from "framer-motion";
const WelcomeSection = () => {
  const VerticalPanUP = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
    transition: { duration: 1 },
  };
  const VerticalPanDown = {
    initial: { opacity: 0, y: -30 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
    transition: { duration: 1 },
  };

  return (
    <>
      <div className="pt-32 lg:pt-52">
        <div className="relative">
          <motion.div
            {...VerticalPanUP}
            className="absolute top-10 h-4 w-4 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 lg:left-28 lg:h-9 lg:w-9"
          ></motion.div>
          <motion.div
            {...VerticalPanDown}
            className="absolute right-4 top-0 h-3 w-3 rounded-full bg-gradient-to-r from-sky-500 to-indigo-500 lg:right-48 lg:h-7 lg:w-7"
          ></motion.div>
          <motion.div
            {...VerticalPanUP}
            className="absolute right-4 top-[27rem] h-2 w-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 lg:right-28 lg:h-4 lg:w-4"
          ></motion.div>
          <motion.div
            {...VerticalPanUP}
            className="absolute top-[25rem] h-2 w-2 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 lg:left-48 lg:h-4 lg:w-4"
          ></motion.div>
          {/* Add more circles as needed */}
        </div>
        <div className="mb-8 flex justify-center">
          <motion.div
            {...VerticalPanUP}
            className="flex h-24 w-24 items-center justify-center rounded-full bg-violet-200 shadow-2xl shadow-violet-500"
          >
            <img src={Avatar} alt="Avatar" className="h-20 w-20" />
          </motion.div>
        </div>
        <div className="lg:mx-52">
          <motion.p
            {...VerticalPanUP}
            className="mb-8 font-semibold text-violet-500"
          >
            Hi I'm Dendy
          </motion.p>
          <motion.h1
            {...VerticalPanDown}
            className="text-2xl font-semibold md:text-5xl lg:text-7xl"
          >
            Full Stack Web Development, Content Creator, Editor and Tech
            Enthusiast
          </motion.h1>
          <motion.p
            {...VerticalPanUP}
            className="mt-8 text-violet-200 opacity-70"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            minima expedita reiciendis
          </motion.p>
        </div>
        <motion.button
          {...VerticalPanUP}
          className="mt-8 rounded-3xl bg-violet-700 hover:shadow-2xl hover:shadow-violet-500"
        >
          Curriculum Vitae
        </motion.button>
        <motion.div className="mt-32 md:mx-24 lg:mx-48">
          <MarqueeSlider />
        </motion.div>
      </div>
    </>
  );
};

export default WelcomeSection;
