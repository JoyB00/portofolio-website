import React from "react";
import Avatar from "../../assets/avatar.png";
import MarqueeSlider from "../../component/MarqueeSlider";
import { motion } from "framer-motion";
import { Fade, VerticalPanUP } from "../../lib/Animation";
import { VerticalPanDown } from "../../lib/Animation";
import AnimateContainer from "../../component/AnimateContainer";
const WelcomeSection = () => {
  return (
    <AnimateContainer>
      <div className="pt-32 lg:pt-52">
        <motion.div variants={VerticalPanUP} className="relative">
          <div className="absolute top-10 h-4 w-4 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 lg:left-28 lg:h-9 lg:w-9"></div>
          <div className="absolute right-4 top-0 h-3 w-3 rounded-full bg-gradient-to-r from-sky-500 to-indigo-500 lg:right-48 lg:h-7 lg:w-7"></div>
          <div className="absolute right-4 top-[27rem] h-2 w-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 lg:right-28 lg:h-4 lg:w-4"></div>
          <div className="absolute top-[25rem] h-2 w-2 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 lg:left-48 lg:h-4 lg:w-4"></div>
          {/* Add more circles as needed */}
        </motion.div>
        <div className="mb-8 flex justify-center">
          <motion.div
            variants={VerticalPanUP}
            className="flex h-24 w-24 items-center justify-center rounded-full bg-violet-200 shadow-2xl shadow-violet-500"
          >
            <img src={Avatar} alt="Avatar" className="h-20 w-20" />
          </motion.div>
        </div>
        <div className="lg:mx-52">
          <motion.p
            variants={VerticalPanUP}
            className="mb-8 font-semibold text-violet-500"
          >
            Hi I'm Dendy
          </motion.p>
          <motion.h1
            variants={VerticalPanDown}
            className="text-2xl font-semibold md:text-5xl lg:text-7xl"
          >
            Full Stack Web Development, Content Creator, Editor and Tech
            Enthusiast
          </motion.h1>
          <motion.p
            variants={VerticalPanUP}
            className="mt-8 text-violet-200 opacity-70"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            minima expedita reiciendis
          </motion.p>
        </div>
        <motion.button
          variants={VerticalPanUP}
          className="mt-8 rounded-3xl bg-violet-700 hover:shadow-2xl hover:shadow-violet-500"
        >
          Curriculum Vitae
        </motion.button>
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -10 }}
          transition={{ duration: 1 }}
          className="mt-32 md:mx-24 lg:mx-48"
        >
          <MarqueeSlider />
        </motion.div>
      </div>
    </AnimateContainer>
  );
};

export default WelcomeSection;
