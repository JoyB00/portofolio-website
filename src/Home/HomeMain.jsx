import WelcomeSection from "./WelcomeSection";
import ProjectSection from "./ProjectSection";
import ClosingSection from "./ClosingSection";
import Footer from "../Footer";
import Navbar from "../Navbar";
export default function HomeMain() {
  return (
    <>
      <Navbar />
      <div className="px-6">
        <WelcomeSection />
        <ProjectSection />
        <ClosingSection />
      </div>
      <Footer />
    </>
  );
}
