import WelcomeSection from "./WelcomeSection";
import ProjectSection from "./ProjectSection";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
export default function HomeMain() {
  return (
    <>
      <Navbar />
      <div className="px-6">
        <WelcomeSection />
        <ProjectSection />
      </div>
      <div className="px-6">
        <Footer />
      </div>
    </>
  );
}
