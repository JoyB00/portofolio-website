import Marquee from "react-fast-marquee";
import Thumbnail from "../assets/thumbnail/test.jpg";
import { motion } from "framer-motion";
export default function CardProject() {
  return (
    <>
      <div className="h-48 rounded-2xl bg-violet-900 lg:h-96">
        <img
          src={Thumbnail}
          alt=""
          className="h-full rounded-2xl object-cover"
        />
        {/* <Marquee direction="right">
          <div className="mt-14 lg:mt-28">
            <h1 className="text-2xl lg:text-6xl">Dendy</h1>
          </div>
        </Marquee> */}
      </div>
      <div className="flex justify-between">
        <h1 className="text-lg font-semibold">Project Temp</h1>
        <p>Github</p>
      </div>
      <p className="text-justify text-xs text-violet-200 opacity-70 lg:text-sm">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati illo
        blanditiis amet delectus nisi tempore, pariatur autem iusto distinctio
        esse placeat inventore repudiandae maiores, non reiciendis magni
        eligendi ipsa beatae.
      </p>
    </>
  );
}
