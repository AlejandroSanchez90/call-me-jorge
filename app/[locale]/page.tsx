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
      {/* HERO */}
      <section id='hero-section' className=' lg:h-screen  relative z-[0] bg-sacbeBeige'>
        <HeroSection />
      </section>

      {/* MOBILE FORM */}
      {/* <section id='benefits-section' className=' lg:hidden  relative z-[0] bg-sacbeBeige'>
        <MobileForm />
      </section> */}

      {/* BENEFITS */}
      <section id='benefits-section' className=' lg:h-screen relative z-[0] bg-sacbeBlue'>
        <BenefitsSection />
      </section>

      {/* STEPS */}
      <section id='steps-section' className='  lg:h-screen relative z-[0] bg-sacbeBeige '>
        <StepsSection />
      </section>

      {/* QUOTER */}
      <section id='quoter-section' className=' lg:h-screen relative z-[0] bg-sacbeBeige '>
        <QuoterSection exchangeRate={exchangeRate} />
      </section>

      {/* TABLE */}
      <section id='table-section' className='  lg:h-screen relative z-[0] bg-sacbeBeige'>
        <TableSection />
      </section>
    </main>
  );
}
