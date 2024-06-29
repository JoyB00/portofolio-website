import AnimateContainer from "../../component/AnimateContainer";
import CardProject from "../../component/CardProject";
import { motion } from "framer-motion";
import { VerticalPanDown, VerticalPanUP } from "../../lib/Animation";
export default function ProjectSection() {
  return (
    <AnimateContainer>
      <div className="mt-10 lg:mx-52 lg:mt-32">
        <motion.h1
          variants={VerticalPanUP}
          className="pt-4 text-start text-3xl font-semibold lg:text-5xl"
        >
          Highlight Projects 🔥
        </motion.h1>
        <motion.p
          variants={VerticalPanDown}
          className="pb-4 text-left text-xs text-violet-200/70 lg:py-4 lg:text-lg"
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae
          placeat voluptates similique, itaque consequatur mollitia fuga
        </motion.p>
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
