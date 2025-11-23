import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import DocumentConverter from '@/components/DocumentConverter';
import FeaturesSection from '@/components/FeaturesSection';
import PricingSection from '@/components/PricingSection';
import FaqSection from '@/components/FaqSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <DocumentConverter />
      <FeaturesSection />
      <PricingSection />
      <FaqSection />
      <Footer />
    </main>
  );
}
