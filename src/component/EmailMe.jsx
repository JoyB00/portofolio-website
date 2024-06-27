import { VerticalPanDown, VerticalPanUP } from "../lib/Animation";
import AnimateContainer from "./AnimateContainer";
import { motion } from "framer-motion";

export default function EmailMe() {
  return (
    <AnimateContainer>
      <div className="mt-24 text-start lg:mx-52">
        <motion.p
          variants={VerticalPanUP}
          className="font-semibold text-violet-500"
        >
          Let's collab
        </motion.p>
        <motion.h1
          variants={VerticalPanUP}
          className="text-5xl font-semibold md:text-6xl"
        >
          Got a project? Let's talk
        </motion.h1>
        <motion.h1
          variants={VerticalPanUP}
          className="text-5xl font-semibold md:text-6xl"
        >
          Email me
        </motion.h1>
      </div>
    </AnimateContainer>
  );
}
