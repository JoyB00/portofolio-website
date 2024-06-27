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
export default function Summary() {
  return (
    <div className="pt-32 lg:mx-44 lg:pt-52">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <div className="col-span-1">
          <AnimateContainer>
            <motion.div
              className="w-full rounded-2xl lg:pe-6 lg:ps-8"
              variants={VerticalPanUP}
            >
              <LazyLoadImage
                effect="blur"
                src={Profile}
                alt="profile.jpg"
                className="h-[29rem] w-full rounded-2xl object-cover shadow-2xl shadow-violet-700"
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
                className="inline-block bg-gradient-to-r from-sky-500 to-indigo-500 bg-clip-text pt-4 font-semibold text-transparent"
              >
                I Kadek Dendy Pramartha
              </motion.h1>
              <motion.h1
                variants={VerticalPanUP}
                className="inline-block bg-gradient-to-r from-sky-500 to-indigo-500 bg-clip-text pb-4 text-lg font-normal text-transparent"
              >
                Full Stack Web Developer, Content Creation, Editor
              </motion.h1>
              <motion.p
                variants={VerticalPanUP}
                className="text-violet-200 opacity-70"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
                veritatis ipsa nulla hic recusandae, inventore dolorum impedit!
                Praesentium ad natus adipisci, repudiandae esse, deserunt
                cupiditate dolores, labore sequi aut consequuntur! Consectetur
                architecto autem maiores molestiae delectus esse, quia tenetur
                iure porro excepturi officiis earum soluta numquam laboriosam
                voluptatum molestias. Excepturi dicta molestiae vitae iusto qui
                optio sint earum veritatis fuga.
              </motion.p>
            </AnimateContainer>
          </div>
          <motion.div
            {...HorizontalPanLeft}
            className="flex justify-start gap-x-6 pt-6"
          >
            <NavLink>
              <FontAwesomeIcon
                icon={faInstagramSquare}
                size="2x"
                className="text-violet-700"
              />
            </NavLink>
            <NavLink>
              <FontAwesomeIcon
                icon={faLinkedin}
                size="2x"
                className="text-violet-700"
              />
            </NavLink>
            <NavLink>
              <FontAwesomeIcon
                icon={faGithub}
                size="2x"
                className="text-violet-700"
              />
            </NavLink>
          </motion.div>
          <motion.div {...HorizontalPanLeft} className="flex justify-start">
            <button className="mt-8 rounded-2xl border-violet-700 bg-transparent text-violet-600 hover:border-transparent hover:bg-violet-700 hover:text-white hover:shadow-2xl hover:shadow-violet-500">
              Curriculum Vitae
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
