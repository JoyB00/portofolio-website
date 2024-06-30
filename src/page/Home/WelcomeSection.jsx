import React, { useRef } from "react";
import Avatar from "../../assets/avatar.png";
import MarqueeSlider from "../../component/MarqueeSlider";
import { motion, useScroll, useTransform } from "framer-motion";
import { Fade, VerticalPanUP } from "../../lib/Animation";
import { VerticalPanDown } from "../../lib/Animation";
import { NavLink } from "react-router-dom";
import AnimateContainer from "../../component/AnimateContainer";
const WelcomeSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const nodeY = useTransform(scrollYProgress, [0, 1], ["0%", "-1000%"]);
  console.log(scrollYProgress);
  return (
    <AnimateContainer>
      <div className="z-10 pt-32 lg:pt-52" ref={ref}>
        <motion.div variants={VerticalPanUP} className="relative">
          <motion.div
            style={{ y: nodeY }}
            className="absolute top-10 h-4 w-4 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 lg:left-28 lg:h-9 lg:w-9"
          ></motion.div>
          <motion.div
            style={{ y: nodeY }}
            className="absolute right-4 top-0 h-3 w-3 rounded-full bg-gradient-to-r from-sky-500 to-indigo-500 lg:right-48 lg:h-7 lg:w-7"
          ></motion.div>
          <motion.div
            style={{ y: nodeY }}
            className="absolute right-4 top-[27rem] h-2 w-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 lg:right-28 lg:h-4 lg:w-4"
          ></motion.div>
          <motion.div
            style={{ y: nodeY }}
            className="absolute top-[25rem] h-2 w-2 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 lg:left-48 lg:h-4 lg:w-4"
          ></motion.div>
        </motion.div>
        <div className="mb-8 flex justify-center">
          <motion.div
            variants={VerticalPanUP}
            className="flex h-24 w-24 items-center justify-center rounded-full bg-violet-200"
          >
            <img
              src={Avatar}
              alt="Avatar"
              className="h-full w-full rounded-full object-cover shadow-2xl shadow-violet-500"
            />
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
            className="mt-8 text-xs text-violet-200 opacity-70 lg:text-lg"
          >
            "Welcome to my portfolio website. Let's collaborate on a project
            together!"
          </motion.p>
        </div>
        <NavLink to="/about">
          <motion.button
            variants={VerticalPanUP}
            className="mt-8 rounded-3xl bg-violet-700 text-white hover:shadow-2xl hover:shadow-violet-500"
          >
            Get in touch 👋
          </motion.button>
        </NavLink>
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -10 }}
          transition={{ duration: 1 }}
          className="mt-16 md:mx-24 lg:mx-48 lg:mt-24"
        >
          <h1 className="pb-4 text-sm font-semibold text-violet-500">
            Confidence with:
          </h1>
          <MarqueeSlider />
        </motion.div>
      </div>
    </AnimateContainer>
  );
};

export default WelcomeSection;
