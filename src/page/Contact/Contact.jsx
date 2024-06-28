import Profile from "../../assets/profile.jpg";
import { NavLink } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { motion } from "framer-motion";
import { HorizontalPanRight, VerticalPanDown } from "../../lib/Animation";
import { VerticalPanUP } from "../../lib/Animation";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Input from "../../component/Input";
import TextArea from "../../component/TextArea";
import AnimateContainer from "../../component/AnimateContainer";
export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_mbix3vt", "template_5lb2jen", form.current, {
        publicKey: "Fd2HP7dHEDBM8A5FW",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        },
      );
  };
  return (
    <div className="pt-32 lg:mx-44 lg:pt-52">
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
                Contact me
              </motion.p>
              <motion.h1
                variants={VerticalPanUP}
                className="pt-4 font-semibold text-white"
              >
                Feel free to reach out for collabs
              </motion.h1>
            </AnimateContainer>
          </div>
          <motion.div {...HorizontalPanRight} className="mt-4">
            <form ref={form} onSubmit={sendEmail}>
              <div className="grid grid-cols-2 gap-x-3">
                <div className="lg:col-span-1">
                  <Input label="Your Name" id="user_name" type="text" />
                </div>
                <div className="lg:col-span-1">
                  <Input label="Subject" id="subject" type="text" />
                </div>
              </div>

              <Input label="Your Email" id="user_email" type="email" />
              <TextArea label="Message" id="message" />

              <motion.div {...VerticalPanUP} className="flex justify-start">
                <button
                  type="submit"
                  value="Send"
                  className="mt-4 rounded-3xl bg-violet-700 hover:shadow-2xl hover:shadow-violet-500"
                >
                  Send
                </button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
