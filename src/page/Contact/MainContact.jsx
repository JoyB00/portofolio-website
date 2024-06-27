import Footer from "../../component/Footer";
import Navbar from "../../component/Navbar";
import Contact from "./Contact";

export default function MainContact() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="px-6">
        <Contact />
      </div>
      <div className="px-6 pt-24">
        <Footer />
      </div>
    </div>
  );
}
