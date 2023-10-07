import HeroSection from '@/components/HeroSection';
import BenefitsSection from '@/components/BenefitsSection';
export default function Home() {
  return (
    <main className=''>
      <section id='hero-section' className='h-screen relative z-[0]'>
        <HeroSection />
      </section>

      <section id='benefits-section' className='h-screen relative z-[0] bg-sacbeBlue'>
        <BenefitsSection />
      </section>
    </main>
  );
}
