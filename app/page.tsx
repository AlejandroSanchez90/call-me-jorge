import HeroSection from '@/components/HeroSection';
import BenefitsSection from '@/components/BenefitsSection';
import StepsSection from '@/components/StepsSection';
import QuoterSection from '@/components/QuoterSection';
import useExchangeRate from '@/hooks/useExchangeRate';
import TableSection from '@/components/TableSection';
import MobileForm from '@/components/MobileForm';

export default async function Home() {
  const exchangeRate = await useExchangeRate();
  return (
    <main className=''>
      <section id='hero-section' className='min-h-screen lg:h-screen  relative z-[0] bg-sacbeBeige'>
        <HeroSection />
      </section>

      <section id='benefits-section' className=' lg:hidden  relative z-[0] bg-sacbeBeige'>
        <MobileForm />
      </section>

      <section id='benefits-section' className=' lg:h-screen relative z-[0] bg-sacbeBlue'>
        <BenefitsSection />
      </section>

      <section id='steps-section' className='  lg:h-screen relative z-[0] bg-sacbeBeige '>
        <StepsSection />
      </section>

      <section id='quoter-section' className=' lg:h-screen relative z-[0] bg-sacbeBeige '>
        <QuoterSection exchangeRate={exchangeRate} />
      </section>

      <section id='table-section' className='  lg:h-screen relative z-[0] bg-sacbeBeige'>
        <TableSection />
      </section>
    </main>
  );
}
