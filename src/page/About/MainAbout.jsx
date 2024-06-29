import Summary from "./Summary";
import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer";
import EmailMe from "../../component/EmailMe";
import SkillsSection from "./SkillsSection";
import OverlayVid from "../../assets/overlay.mp4";

export default function MainAbout() {
  return (
    <div className="min-h-screen">
      <div className="relative min-h-screen overflow-hidden">
        {/* <video
          src={OverlayVid}
          autoPlay
          loop
          muted
          className="absolute left-0 top-0 h-full w-full object-cover opacity-40"
        /> */}
        <div className="relative z-10">
          <Navbar />
          <div className="px-6">
            <Summary />
            <SkillsSection />
          </div>
          <div className="px-6 lg:px-24">
            <EmailMe />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
