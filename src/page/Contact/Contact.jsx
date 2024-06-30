import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { HorizontalPanRight, VerticalPanDown } from "../../lib/Animation";
import { VerticalPanUP } from "../../lib/Animation";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Input from "../../component/Input";
import TextArea from "../../component/TextArea";
import AnimateContainer from "../../component/AnimateContainer";
import toast from "react-hot-toast";
import { faEnvelope, faL } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
export default function Contact() {
  const form = useRef();
  const [data, setData] = useState({
    user_name: "",
    user_email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleInput = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    if (!data.message || !data.subject || !data.user_email || !data.user_name) {
      toast.error("Failed to send email. Please try again", {
        position: "top-right",
      });
      setLoading(false);
    } else {
      emailjs
        .sendForm("service_mbix3vt", "template_5lb2jen", form.current, {
          publicKey: "Fd2HP7dHEDBM8A5FW",
        })
        .then(
          () => {
            toast.success("Your Email has been sent successfully", {
              position: "top-right",
            });
            setData({
              user_name: "",
              user_email: "",
              subject: "",
              message: "",
            });
            setLoading(false);
          },
          (error) => {
            toast.error("Failed to send email. Please try again", {
              position: "top-right",
            });
            console.log("FAILED...", error.text);
            setData({
              user_name: "",
              user_email: "",
              subject: "",
              message: "",
            });
            setLoading(false);
          },
        );
    }
  };
  return (
    <div className="pt-32 lg:mx-44 lg:pt-44">
      {console.log(data)}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <div className="col-span-1">
          {/* <motion.div
              className="flex w-full justify-start rounded-2xl lg:justify-center lg:pe-6 lg:ps-8"
              variants={VerticalPanUP}
            >
              <LazyLoadImage
                effect="blur"
                src={Profile}
                alt="profile.jpg"
                className="h-56 w-full rounded-2xl object-cover shadow-2xl shadow-violet-700 lg:h-[35rem]"
              />
            </motion.div> */}
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
              <motion.p
                variants={VerticalPanDown}
                className="text-sm lg:pe-12 lg:text-lg"
              >
                "Let's collaborate on an exciting project! Whether you have a
                creative idea or a challenging task, I'm here to help. Feel free
                to reach out and let's make something amazing together."
              </motion.p>
            </AnimateContainer>
            <AnimateContainer>
              <div className="flex gap-x-4 lg:gap-x-7">
                <motion.p
                  variants={VerticalPanDown}
                  className="pt-4 font-semibold"
                >
                  <NavLink to="https://wa.me/+6289643938007" target="_blank">
                    <FontAwesomeIcon
                      icon={faWhatsapp}
                      size="3x"
                      className="text-white hover:text-violet-400"
                    />
                  </NavLink>
                </motion.p>
                <motion.p
                  variants={VerticalPanDown}
                  className="pt-4 font-semibold"
                >
                  <NavLink
                    to="mailto:dendypramartha03@gmail.com"
                    target="_blank"
                  >
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      size="3x"
                      className="text-white hover:text-violet-400"
                    />
                  </NavLink>
                </motion.p>
              </div>
            </AnimateContainer>
          </div>
        </div>
        <div className="col-span-1">
          <motion.div {...HorizontalPanRight} className="mt-4">
            <form ref={form} onSubmit={sendEmail}>
              <div className="grid grid-cols-2 gap-x-3">
                <div className="lg:col-span-1">
                  <Input
                    label="Your Name"
                    id="user_name"
                    type="text"
                    value={data.user_name}
                    onChange={handleInput}
                  />
                </div>
                <div className="lg:col-span-1">
                  <Input
                    label="Subject"
                    id="subject"
                    type="text"
                    value={data.subject}
                    onChange={handleInput}
                  />
                </div>
              </div>

              <Input
                label="Your Email"
                id="user_email"
                type="email"
                value={data.user_email}
                onChange={handleInput}
              />
              <TextArea
                label="Message"
                id="message"
                value={data.message}
                onChange={handleInput}
              />

              <motion.div {...VerticalPanUP} className="flex justify-start">
                <button
                  type="submit"
                  value="Send"
                  className="mt-4 rounded-3xl bg-violet-700 hover:shadow-2xl hover:shadow-violet-500"
                >
                  {loading ? "Loading..." : "Send"}
                </button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
