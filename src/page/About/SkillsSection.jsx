import AnimateContainer from "../../component/AnimateContainer";
import IconComponent from "../../component/IconComponent";
import { VerticalPanUP } from "../../lib/Animation";
import { ForEditing, ForProgramming } from "../../lib/TechStack";
import { motion } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function SkillsSection() {
  return (
    <div className="mt-6 lg:mx-72">
      <h1 className="mt-8 py-5 text-start text-3xl font-semibold text-violet-500">
        For Programming 💻
      </h1>
      <AnimateContainer>
        <div className="grid grid-cols-3 gap-3 lg:grid-cols-7 lg:gap-5">
          {ForProgramming.map((item) => {
            return (
              <motion.div variants={VerticalPanUP} className="col-span-1">
                <IconComponent title={item.title} icon={item.icon} />
              </motion.div>
            );
          })}
        </div>
      </AnimateContainer>

      <h1 className="mt-8 py-5 text-start text-3xl font-semibold text-violet-500">
        For Editing 🎨
      </h1>
      <AnimateContainer>
        <div className="grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-5">
          {ForEditing.map((item) => {
            return (
              <motion.div variants={VerticalPanUP} className="col-span-1">
                <IconComponent title={item.title} icon={item.icon} />
              </motion.div>
            );
          })}
        </div>
      </AnimateContainer>
    </div>
  );
}
