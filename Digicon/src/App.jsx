import About from "./components/About";
import Caraousel from "./components/Caraousel";
import Footer from "./components/Footer";
import Industries from "./components/Industries";
import Navbar from "./components/Navbar";
import Services from "./components/Services";

export default function App() {
  return (
    <div className="h-screen">
      <Navbar />
      <div className="flex justify-center items-center md:h-[540px]">
        <video
          src="/header-cover.mp4"
          autoPlay
          loop
          muted
          preload="auto"
          className="w-full md:h-full h-[50vh] object-cover"
        />
      </div>
      <Caraousel />
      <div className="flex justify-center p-4">
        <img src="/home-banner.png" alt="home-banner" />
      </div>
      <About />
      <Services />
      <Industries />
      <Footer />
    </div>
  );
}