import Header from "../Components/LandingPage/Header";
import Stats from "../Components/LandingPage/Stats";
import Skills from "../Components/LandingPage/Skills";
import Projects from "../Components/LandingPage/Projects";
import Testimonial from "../Components/LandingPage/Testimonial";
import CTA from "../Components/Footer/CTA";
import Footer from "../Components/Footer/Footer";

const LandingPage = () => {
  return (
    <main className="bg-gray-50">
      <Header />
      <Stats />
      <Skills />
      <Projects />
      <Testimonial />
      <CTA />
      <Footer />
    </main>
  )
};

export default LandingPage;
