import Hero from '../sections/Hero';
import Benefits from '../sections/Benefits';
import About from '../sections/About';
import Highlights from '../sections/Highlights';
import Catalog from '../sections/Catalog';
import Kits from '../sections/Kits';
import Contact from '../sections/Contact';
import Location from '../sections/Location';
import ContactGuide from '../sections/ContactGuide';
import FAQ from '../sections/FAQ';
import FinalCTA from '../sections/FinalCTA';

export default function LandingPage() {
  return (
    <>
      <Hero />
      <Benefits />
      <About />
      <Highlights />
      <Catalog />
      <Kits />
      <Contact />
      <Location />
      <ContactGuide />
      <FAQ />
      <FinalCTA />
    </>
  );
}
