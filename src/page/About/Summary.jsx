import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Profile from "../../assets/profile.jpg";
import {
  faGithub,
  faInstagramSquare,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { NavLink } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { motion } from "framer-motion";
import { VerticalPanDown } from "../../lib/Animation";
import { VerticalPanUP } from "../../lib/Animation";
import { HorizontalPanLeft } from "../../lib/Animation";
import AnimateContainer from "../../component/AnimateContainer";
import CV from "../../assets/techStack/BLANGKO PIKET.pdf";
export default function Summary() {
  const onButtonClick = () => {
    const pdfUrl = CV;
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "BLANGKO PIKET.pdf"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div className="pt-32 lg:me-60 lg:ms-44 lg:pt-44">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <div className="col-span-1">
          <AnimateContainer>
            <motion.div
              className="flex w-full justify-start rounded-2xl lg:justify-center lg:pe-6 lg:ps-8"
              variants={VerticalPanUP}
            >
              <LazyLoadImage
                effect="blur"
                src={Profile}
                alt="profile.jpg"
                className="h-72 w-full rounded-2xl object-cover shadow-2xl shadow-violet-700 lg:h-[29rem]"
              />
            </motion.div>
          </AnimateContainer>
        </div>
        <div className="col-span-1">
          <div className="text-start">
            <AnimateContainer>
              <motion.p
                variants={VerticalPanDown}
                className="font-semibold text-violet-400"
              >
                About Me
              </motion.p>
              <motion.h1
                variants={VerticalPanUP}
                className="inline-block bg-gradient-to-r from-sky-500 to-indigo-500 bg-clip-text pt-2 text-4xl font-bold text-transparent lg:pt-4 lg:text-5xl"
              >
                I Kadek Dendy Pramartha
              </motion.h1>
              <motion.h1
                variants={VerticalPanUP}
                className="inline-block bg-gradient-to-r from-sky-500 to-indigo-500 bg-clip-text pb-4 text-sm font-normal text-transparent lg:text-lg"
              >
                Full Stack Web Developer, Content Creation, Editor
              </motion.h1>
              <motion.p
                variants={VerticalPanUP}
                className="text-xs font-medium text-violet-200 lg:text-sm"
              >
                I'm an Informatics Student majoring at Universitas Atma Jaya
                Yogyakarta who is dynamic, self-motivated, and strongly
                interested in Full Stack Development and Content Creation. I
                have a passion for exploring new technologies and possess an
                independent mindset and critical thinking skills to tackle
                challenges effectively. I am dedicated to delivering positive
                contributions to every project and my primary focus is on web
                development.
              </motion.p>
            </AnimateContainer>
          </div>
          <motion.div
            {...HorizontalPanLeft}
            className="flex justify-start gap-x-6 pt-6"
          >
            <NavLink to="https://www.instagram.com/dendypramartha_">
              <FontAwesomeIcon
                icon={faInstagramSquare}
                size="2x"
                className="text-violet-500 hover:text-violet-400"
              />
            </NavLink>
            <NavLink to="https://www.linkedin.com/in/dendypramartha">
              <FontAwesomeIcon
                icon={faLinkedin}
                size="2x"
                className="text-violet-500 hover:text-violet-400"
              />
            </NavLink>
            <NavLink to="https://github.com/JoyB00">
              <FontAwesomeIcon
                icon={faGithub}
                size="2x"
                className="text-violet-500 hover:text-violet-400"
              />
            </NavLink>
          </motion.div>
          <motion.div {...HorizontalPanLeft} className="flex justify-start">
            <button
              className="mt-8 rounded-2xl border-violet-600 bg-transparent text-violet-400 hover:border-transparent hover:bg-violet-700 hover:text-white hover:shadow-2xl hover:shadow-violet-500"
              onClick={onButtonClick}
            >
              Curriculum Vitae 📖
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
