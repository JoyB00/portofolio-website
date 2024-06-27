import AnimateContainer from "../../component/AnimateContainer";
import CardProject from "../../component/CardProject";
import { animate, motion } from "framer-motion";
import { VerticalPanUP } from "../../lib/Animation";
export default function ProjectSection() {
  return (
    <AnimateContainer>
      <div className="mt-32 lg:mx-52">
        <motion.h1
          variants={VerticalPanUP}
          className="py-6 text-start text-3xl font-semibold lg:text-6xl"
        >
          Highlight Projects 🔥
        </motion.h1>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-6">
          <motion.div variants={VerticalPanUP} className="md:col-span-1">
            <CardProject />
          </motion.div>
          <motion.div variants={VerticalPanUP} className="md:col-span-1">
            <CardProject />
          </motion.div>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-6">
          <motion.div variants={VerticalPanUP} className="md:col-span-1">
            <CardProject />
          </motion.div>
          <motion.div variants={VerticalPanUP} className="md:col-span-1">
            <CardProject />
          </motion.div>
        </div>
      </div>
    </AnimateContainer>
  );
}
