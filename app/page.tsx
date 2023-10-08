import HeroSection from '@/components/HeroSection';
import BenefitsSection from '@/components/BenefitsSection';
import StepsSection from '@/components/StepsSection';
export default function Home() {
  return (
    <main className=''>
      <section id='hero-section' className='h-screen relative z-[0]'>
        <HeroSection />
      </section>

      <section id='benefits-section' className='h-screen relative z-[0] bg-sacbeBlue'>
        <BenefitsSection />
      </section>

      <section id='steps-section' className='h-screen relative z-[0] bg-sacbeBeige'>
        <StepsSection />
      </section>
    </main>
  );
}
