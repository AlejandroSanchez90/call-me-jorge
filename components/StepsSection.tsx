'use client';
import React from 'react';
import SectionLayout from './SectionLayout';
import Image from 'next/image';
import SectionFooter from './SectionFooter';
import { useTranslations } from 'next-intl';

type Props = {};

function StepsSection({}: Props) {
  const t = useTranslations('Steps');

  return (
    <SectionLayout>
      <div className='flex flex-col h-full justify-center w-full gap-2 lg:gap-4 pb-5 lg:pb-0'>
        {/* Header */}
        <div className='flex items-center flex-col'>
          <h1 className='text-5xl leading-[45px] lg:text-8xl lg:leading-[85px] text-center font-bold text-sacbeOrangeDarker  uppercase'>
            {t.rich('title.orange', {
              b: (chunks) => <b>{chunks}</b>,
              br: () => <br />,
            })}
            <span className='text-sacbeBlue'>
              {' '}
              {t.rich('title.blue', {
                b: (chunks) => <b>{chunks}</b>,
                br: () => <br />,
              })}
            </span>
          </h1>
        </div>
        {/* Squares */}
        <div className='hidden lg:grid grid-cols-3 max-w-[1440px] mx-auto gap-5'>
          {/* SQUARE 1 */}
          <div className='relative border-[3px] border-sacbeOrangeDarker rounded-lg flex flex-col items-center justify-start text-center p-2 pt-12 gap-4'>
            <h1 className='uppercase text-sacbeOrangeDarker text-6xl font-bold leading-[55px]'>
              {t.rich('cards.primera.title', {
                b: (chunks) => <b>{chunks}</b>,
                br: () => <br />,
              })}
            </h1>
            <p className='font-Sintony text-lg text-sacbeBlue max-w-[300px] leading-none'>
              {t.rich('cards.primera.text', {
                b: (chunks) => <b>{chunks}</b>,
                br: () => <br />,
              })}
            </p>
            <Image
              src={'/imgs/steps/stores.png'}
              width={200}
              height={200}
              alt='stores'
              className='object-cover w-full'
            />
            <div className='absolute rounded-full overflow-hidden h-[90px] w-[90px] border-sacbeOrangeDarker border-[3px] top-[-15%] left-[-15%]'>
              <Image
                src='/imgs/steps/usa-flag.png'
                width={100}
                height={100}
                className='object-cover'
                alt='usa flag'
              />
            </div>
          </div>
          {/* SQUARE  2*/}
          <div className=' border-[3px] border-sacbeOrangeDarker rounded-lg flex flex-col items-center justify-start text-center p-2 pt-12 gap-4'>
            <h1 className='uppercase text-sacbeOrangeDarker text-6xl font-bold leading-[55px]'>
              {t.rich('cards.segunda.title', {
                b: (chunks) => <b>{chunks}</b>,
                br: () => <br />,
              })}
            </h1>
            <p className=' font-bold text-[180px] text-sacbeBlue max-w-[300px] leading-none'>
              $1.50
            </p>
            <p className='font-Sintony text-lg leading-none text-sacbeBlue font-bold -mt-3'>
              {t.rich('cards.segunda.text', {
                b: (chunks) => <b>{chunks}</b>,
                br: () => <br />,
              })}
            </p>
          </div>
          {/* SQUARE 3 */}
          <div className='relative border-[3px] border-sacbeOrangeDarker rounded-lg flex flex-col items-center justify-start text-center p-2 pt-12 gap-4'>
            <h1 className='uppercase text-sacbeOrangeDarker text-6xl font-bold leading-[55px]'>
              {t.rich('cards.tercera.title', {
                b: (chunks) => <b>{chunks}</b>,
                br: () => <br />,
              })}
            </h1>
            <div className='font-Sintony text-lg text-sacbeBlue max-w-[300px] leading-none flex-1 flex items-center justify-center pb-3'>
              <p>
                {t.rich('cards.tercera.text', {
                  b: (chunks) => <b>{chunks}</b>,
                  br: () => <br />,
                })}
              </p>
            </div>
            <Image
              src={'/imgs/steps/atm_logos.png'}
              width={200}
              height={200}
              alt='stores'
              className='object-cover w-full '
            />
            <div className='absolute rounded-full overflow-hidden h-[90px] w-[90px] border-sacbeOrangeDarker border-[3px] top-[-15%] right-[-15%]'>
              <Image
                src='/imgs/steps/mx-flag.png'
                width={100}
                height={100}
                className='object-cover'
                alt='mexico flag'
              />
            </div>
          </div>
        </div>
        {/* MOBILE */}
        <div className='flex flex-col items-center gap-6 lg:hidden px-3'>
          <div className=''>
            <Image src={t('mobile.image')} width={500} height={500} alt='sacbe partners' />
          </div>
          <p className='font-Sintony text-sacbeBlue font-bold text-center w-[80%] leading-none'>
            {t('mobile.text')}
          </p>
        </div>
        {/* FOOTER */}
        <div className=''>
          <p className='text-center font-Sintony text-[8px] leading-[8px]  lg:leading-[14px] lg:text-xs  w-[80%] lg:max-w-6xl mx-auto lg:mt-5 footer  pt-5'>
            {t('disclaimer.text')}
          </p>
        </div>
      </div>
      <SectionFooter variant='blue' textColor='beige'>
        <b className='uppercase'>{t('footer.text')}</b>
      </SectionFooter>
    </SectionLayout>
  );
}

export default StepsSection;
