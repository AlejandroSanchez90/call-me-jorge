'use client';
import React from 'react';
import SectionLayout from './SectionLayout';
import BenefitsCard from './BenefitsCard';
import SectionFooter from './SectionFooter';
import { useTranslations } from 'next-intl';

type Props = {};

function BenefitsSection({}: Props) {
  const t = useTranslations('Benefits');

  return (
    <SectionLayout>
      <div className='h-full w-full  bg-sacbeBlue flex items-center justify-center pb-5 lg:pb-0'>
        <div className='flex flex-col w-full gap-10'>
          {/* HEADER */}
          <div className='flex items-center flex-col'>
            <h1 className='text-5xl leading-[45px] text-center  lg:w-fit  lg:text-8xl lg:leading-[85px] font-bold text-sacbeBeige '>
              {t('title.white')}
              <span className='text-sacbeOrangeDarker'>
                <br className='lg:hidden' /> {t('title.orange')}
              </span>
            </h1>
            <h2 className='uppercase hidden lg:block text-6xl text-sacbeBeige leading-none'>
              {t('title.caption')}
            </h2>
          </div>
          {/* CARDS */}
          <div className='max-w-[1440px]    mx-auto '>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 '>
              {/* CARD 1 */}
              <BenefitsCard image='/imgs/benefitsCards/one.png'>
                {/* Caption */}
                <h3 className='font-bold text-3xl leading-[25px] uppercase'>
                  {t.rich('cards.primera.title', {
                    b: (chunks) => <b>{chunks}</b>,
                    br: () => <br />,
                  })}
                </h3>
                {/* Description */}
                <p className='text-sm leading-none font-Sintony'>
                  {t.rich('cards.primera.text', {
                    b: (chunks) => <b>{chunks}</b>,
                    br: () => <br />,
                  })}
                </p>
              </BenefitsCard>

              {/* CARD 2 */}
              <BenefitsCard image='/imgs/benefitsCards/two.png'>
                {/* Caption */}
                <h3 className='font-bold text-3xl leading-[25px] uppercase'>
                  {t.rich('cards.segunda.title', {
                    b: (chunks) => <b>{chunks}</b>,
                    br: () => <br />,
                  })}
                </h3>
                {/* Description */}
                <p className='text-sm leading-none font-Sintony'>
                  {t.rich('cards.segunda.text', {
                    b: (chunks) => <b>{chunks}</b>,
                    br: () => <br />,
                  })}
                </p>
              </BenefitsCard>

              {/* CARD 3 */}
              <BenefitsCard image='/imgs/benefitsCards/three.png'>
                <h3 className='font-bold text-3xl leading-[25px] uppercase'>
                  {t.rich('cards.tercera.title', {
                    b: (chunks) => <b>{chunks}</b>,
                    br: () => <br />,
                  })}
                </h3>
                {/* Description */}
                <p className='text-sm leading-none font-Sintony'>
                  {t.rich('cards.tercera.text', {
                    b: (chunks) => <b>{chunks}</b>,
                    br: () => <br />,
                  })}
                </p>
              </BenefitsCard>

              {/* CARD4 */}
              <BenefitsCard image='/imgs/benefitsCards/four.png'>
                <h3 className='font-bold text-3xl leading-[25px] uppercase'>
                  {t.rich('cards.cuarta.title', {
                    b: (chunks) => <b>{chunks}</b>,
                    br: () => <br />,
                  })}
                </h3>
                {/* Description */}
                <p className='text-sm leading-none font-Sintony'>
                  {t.rich('cards.cuarta.text', {
                    b: (chunks) => <b>{chunks}</b>,
                    br: () => <br />,
                  })}
                </p>
              </BenefitsCard>
            </div>
          </div>

          {/* Legals */}

          <div className='max-w-[330px] lg:max-w-[840px]    mx-auto '>
            <p className='lg:leading-[14px] lg:text-xs  font-Sintony text-center text-[8px] leading-[8px] px-2 lg:px-0 l  text-sacbeBeige '>
              {t('disclaimer.text')}
            </p>
          </div>
        </div>
      </div>
      <SectionFooter variant='beige' textColor='orange'>
        {t('footer.orange')} <b className='text-sacbeBlue'>{t('footer.blue')}</b>
      </SectionFooter>
    </SectionLayout>
  );
}

export default BenefitsSection;
