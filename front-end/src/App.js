import "./App.css";
import Aos from "aos";
import { useEffect } from "react";
import Header from "./components/Header/Header";
import Exercises from "./components/UI/Exercises";
import Hero from "./components/UI/Hero";
import Start from "./components/UI/Start";
import Pricing from "./components/UI/Pricing";
import Testimonial from "./components/UI/Testimonials";
import Footer from "./components/UI/Footer";

function App() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <Header />
      <Hero />
      <Exercises />
      <Start />
      <Pricing />
      <Testimonial />
      <Footer />
    </>
  );
}

export default App;
