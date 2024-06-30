import Footer from "../../component/Footer";
import Navbar from "../../component/Navbar";
import Contact from "./Contact";
import OverlayVid from "../../assets/new_overlay.mp4";

export default function MainContact() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="relative flex-1">
        {/* <video
          src={OverlayVid}
          autoPlay
          loop
          muted
          className="absolute left-0 top-0 h-full w-full object-cover opacity-40"
        /> */}
        <div className="relative z-10 flex min-h-screen flex-col">
          <Navbar />
          <div className="flex-1 px-6 pb-6">
            <Contact />
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}
