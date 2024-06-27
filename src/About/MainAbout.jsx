import Summary from "./Summary";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

export default function MainAbout() {
  return (
    <>
      <Navbar />
      <div className="px-6">
        <Summary />
      </div>
      <div className="px-6 pt-24">
        <Footer />
      </div>
    </>
  );
}
