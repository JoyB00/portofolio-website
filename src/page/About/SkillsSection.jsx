import AnimateContainer from "../../component/AnimateContainer";
import IconComponent from "../../component/IconComponent";
import { VerticalPanUP } from "../../lib/Animation";
import { ForEditing, ForProgramming } from "../../lib/TechStack";
import { motion } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function SkillsSection() {
  return (
    <div className="mt-6 lg:mx-72">
      <h1 className="mt-8 py-5 text-start text-3xl font-semibold text-violet-400">
        For Programming 💻
      </h1>
      <AnimateContainer>
        <div className="grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-5">
          {ForProgramming.map((item) => {
            return (
              <motion.div variants={VerticalPanUP} className="col-span-1">
                <div className="flex h-14 items-center justify-start rounded-full border-2 border-violet-500/60 px-2 opacity-80 hover:bg-violet-200/10 lg:h-14 lg:px-4 lg:py-8">
                  {/* <LazyLoadImage
                  effect="blur"
                  src={item.icon}
                  alt={item.title}
                  className="h-10 w-10 object-cover p-2 lg:h-14 lg:w-14"
                /> */}
                  <h1 className="px-4 text-left text-sm font-medium lg:text-lg">
                    {item.title}
                  </h1>
                </div>
              </motion.div>
            );
          })}
        </div>
      </AnimateContainer>

      <h1 className="mt-8 py-5 text-start text-3xl font-semibold text-violet-400">
        For Editing 🎨
      </h1>
      <AnimateContainer>
        <div className="grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-5">
          {ForEditing.map((item) => {
            return (
              <motion.div variants={VerticalPanUP} className="col-span-1">
                <div className="flex h-14 items-center justify-start rounded-full border-2 border-violet-500/60 px-2 opacity-80 hover:bg-violet-200/10 lg:h-14 lg:px-4 lg:py-8">
                  {/* <LazyLoadImage
                  effect="blur"
                  src={item.icon}
                  alt={item.title}
                  className="h-10 w-10 object-cover p-2 lg:h-14 lg:w-14"
                /> */}
                  <h1 className="px-4 text-left text-sm font-medium lg:text-lg">
                    {item.title}
                  </h1>
                </div>
              </motion.div>
            );
          })}
        </div>
      </AnimateContainer>
    </div>
  );
}
