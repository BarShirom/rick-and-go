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
      <a className="skip-link" href="#main-content">דלגו לתוכן הראשי</a>
      <Navbar />

      <main id="main-content" tabIndex={-1}>
        <Hero />
        <Services />
        <WhyUs />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
