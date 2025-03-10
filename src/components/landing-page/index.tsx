import DidYouKnow from "./DidYouKnow";
import Features from "./Features";
// import Features2 from "./Features2";
import Header from "./Header";
import Hero from "./Hero";
import Navbar from "./Navbar";
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
    </div>
  );
}
