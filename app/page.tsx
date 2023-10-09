import HeroSection from '@/components/HeroSection';
import BenefitsSection from '@/components/BenefitsSection';
import StepsSection from '@/components/StepsSection';
import QuoterSection from '@/components/QuoterSection';
import useExchangeRate from '@/hooks/useExchangeRate';
import TableSection from '@/components/TableSection';

export default async function Home() {
  const exchangeRate = await useExchangeRate();
  return (
    <main className=''>
      <section id='hero-section' className='min-h-screen lg:h-screen  relative z-[0] bg-sacbeBeige'>
        <HeroSection />
      </section>

      <section
        id='benefits-section'
        className='min-h-screen lg:h-screen relative z-[0] bg-sacbeBlue'
      >
        <BenefitsSection />
      </section>

      <section
        id='steps-section'
        className=' min-h-screen lg:h-screen relative z-[0] bg-sacbeBeige'
      >
        <StepsSection />
      </section>

      <section id='quoter-section' className='h-screen relative z-[0] bg-sacbeBeige '>
        <QuoterSection exchangeRate={exchangeRate} />
      </section>

      <section
        id='table-section'
        className=' min-h-screen lg:h-screen relative z-[0] bg-sacbeBeige'
      >
        <TableSection />
      </section>
    </main>
  );
}
