import Summary from "./Summary";
import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer";
import EmailMe from "../../component/EmailMe";
import SkillsSection from "./SkillsSection";

export default function MainAbout() {
  return (
    <>
      <Navbar />
      <div className="px-6">
        <Summary />
        <SkillsSection />
      </div>
      <div className="px-6 pt-12 lg:px-24">
        <EmailMe />
        <Footer />
      </div>
    </>
  );
}
