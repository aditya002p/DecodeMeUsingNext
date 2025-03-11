import About from "./About";
import ComparisonTable from "./ComparisonTable";
import DidYouKnow from "./DidYouKnow";
import FAQ from "./FAQ";
import Features from "./Features";
import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Outcome from "./Outcome";
import Plans from "./Plans";
import StickyFeatures from "./StickyFeature/StickyFeatures";
export default function LandingPage() {
  return (
    <div>
      <Navbar />
      <Header />
      <Hero />
      <Features />
      <DidYouKnow />
      <StickyFeatures />
      <Plans />
      <About />
      <ComparisonTable />
      {/* <Outcome /> */}
      <FAQ />
      <Footer />
    </div>
  );
}
