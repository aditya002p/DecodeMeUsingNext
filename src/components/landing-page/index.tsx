import About from "./About";
import DidYouKnow from "./DidYouKnow";
import Features from "./Features";
import Header from "./Header";
import Hero from "./Hero";
import Navbar from "./Navbar";
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
    </div>
  );
}
