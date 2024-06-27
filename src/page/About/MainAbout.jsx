import Summary from "./Summary";
import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer";
import EmailMe from "../../component/EmailMe";

export default function MainAbout() {
  return (
    <>
      <Navbar />
      <div className="px-6">
        <Summary />
      </div>
      <div className="px-6 pt-24">
        <EmailMe />
        <Footer />
      </div>
    </>
  );
}
