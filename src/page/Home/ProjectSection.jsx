import AnimateContainer from "../../component/AnimateContainer";
import CardProject from "../../component/CardProject";
import { motion } from "framer-motion";
import { VerticalPanDown, VerticalPanUP } from "../../lib/Animation";
import { MyProject } from "../../lib/Project";

export default function ProjectSection() {
  return (
    <AnimateContainer>
      <div className="mt-10 lg:mx-52 lg:mt-32">
        <motion.h1
          variants={VerticalPanUP}
          className="pt-4 text-start text-3xl font-semibold lg:text-5xl"
        >
          My Projects 🔥
        </motion.h1>
        <motion.p
          variants={VerticalPanDown}
          className="pb-4 text-left text-xs text-violet-200/70 lg:py-4 lg:text-lg"
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae
          placeat voluptates similique, itaque consequatur mollitia fuga
        </motion.p>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-x-8 md:gap-y-16">
          {MyProject.map((item) => {
            return (
              <motion.div variants={VerticalPanUP} className="md:col-span-1">
                <CardProject
                  img={item.img}
                  title={item.title}
                  description={item.description}
                  link={item.link}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </AnimateContainer>
  );
}
