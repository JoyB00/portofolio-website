import Marquee from "react-fast-marquee";
import Thumbnail from "../assets/thumbnail/test.jpg";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
export default function CardProject({ img, title, description, link }) {
  return (
    <NavLink to={link} target="_blank" className="text-white hover:text-white">
      <div className="h-48 rounded-2xl bg-violet-900 lg:h-96">
        <motion.img
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.1 },
          }}
          src={img}
          alt=""
          className="h-full rounded-2xl object-cover"
        />
        {/* <Marquee direction="right">
          <div className="mt-14 lg:mt-28">
            <h1 className="text-2xl lg:text-6xl">Dendy</h1>
          </div>
        </Marquee> */}
      </div>
      <div className="mt-3 flex justify-between">
        <h1 className="text-lg font-semibold">{title}</h1>
        <NavLink to={link}>
          <FontAwesomeIcon
            icon={faGithub}
            className="text-white hover:text-violet-500"
            size="lg"
          />
        </NavLink>
      </div>
      <p className="text-justify text-xs text-violet-200 opacity-70 lg:text-sm">
        {description}
      </p>
    </NavLink>
  );
}
