import Footer from "../../component/Footer";
import Navbar from "../../component/Navbar";
import Contact from "./Contact";
import OverlayVid from "../../assets/overlay.mp4";

export default function MainContact() {
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
          {" "}
          <Navbar />
          <div className="px-6">
            <Contact />
          </div>
          <div className="px-6 pt-20">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
