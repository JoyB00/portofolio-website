import WelcomeSection from "./WelcomeSection";
import ProjectSection from "./ProjectSection";
import Footer from "../../component/Footer";
import Navbar from "../../component/Navbar";
import EmailMe from "../../component/EmailMe";
import OverlayVid from "../../assets/new_overlay.mp4";

export default function HomeMain() {
  return (
    <>
      <div className="relative min-h-screen overflow-hidden bg-black">
        {/* <video
          src={OverlayVid}
          autoPlay
          loop
          muted
          className="absolute left-0 top-0 h-1/5 w-full object-cover opacity-40 mix-blend-screen lg:h-1/3"
        /> */}
        <div className="relative z-10">
          <Navbar />
          <div className="px-6">
            <WelcomeSection />
            <ProjectSection />
          </div>
          <div className="px-6">
            <EmailMe />
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}
