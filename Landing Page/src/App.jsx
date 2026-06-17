import Header from './components/Header';
import Hero from './components/Hero';
import Clients from './components/Clients';
import Community from './components/Community';
import FeaturePixelgrade from './components/FeaturePixelgrade';
import Stats from './components/Stats';
import FeatureFooterDesign from './components/FeatureFooterDesign';
import Testimonial from './components/Testimonial';
import Blog from './components/Blog';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Clients />
        <Community />
        <FeaturePixelgrade />
        <Stats />
        <FeatureFooterDesign />
        <Testimonial />
        <Blog />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
