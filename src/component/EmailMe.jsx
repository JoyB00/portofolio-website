import { useState } from "react";
import { VerticalPanDown, VerticalPanUP } from "../lib/Animation";
import AnimateContainer from "./AnimateContainer";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleDown,
  faArrowTurnUp,
} from "@fortawesome/free-solid-svg-icons";

export default function EmailMe() {
  const [showArrow, setShowArrow] = useState(false);
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
        <NavLink to="/contact" className="flex items-center">
          <motion.h1
            variants={VerticalPanUP}
            className="text-5xl font-semibold text-white hover:text-violet-600 md:text-6xl"
            onHoverStart={() => setShowArrow(true)}
            onHoverEnd={() => setShowArrow(false)}
          >
            Email me
          </motion.h1>

          {showArrow && (
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
            >
              <FontAwesomeIcon
                icon={faArrowTurnUp}
                className="ps-4 text-violet-600"
                size="2x"
              />
            </motion.p>
          )}
        </NavLink>
      </div>
    </AnimateContainer>
  );
}
