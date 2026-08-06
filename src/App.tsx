import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Services from "./components/services/Services";
import WhyUs from "./components/why-us/WhyUs";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import "./styles/reset.css";
import "./styles/variables.css";
import "./styles/globals.css";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Services />
        <WhyUs />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default App;
