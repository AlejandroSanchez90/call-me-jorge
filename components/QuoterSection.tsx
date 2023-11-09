'use client';
import React, { useEffect, useState } from 'react';
import InputSacbe from './Input/InputSacbe';
import { SubmitHandler, useForm } from 'react-hook-form';
import ButtonRound from './ButtonRound';
import Quoter from './Quoter';
import SectionFooter from './SectionFooter';
import { useTranslations } from 'next-intl';

type Props = {
  exchangeRate: string;
};

function QuoterSection({ exchangeRate }: Props) {
  const t = useTranslations('Quoter');

  return (
    <div className=' h-full   lg:pb-footer-padding w-ful  flex flex-col lg:flex-row items-center justify-center relative pb-5  gap-5 lg:gap-0'>
      {/* Texto */}
      <div className='flex items-center justify-center bg-sacbeBeige h-full w-[80%] lg:w-1/2 pt-16 lg:pt-14'>
        <div className=' flex justify-center items-center  gap-3 2xl:gap-5 h-full  px-2 2xl:px-0 '>
          {/* Title */}
          <div className='flex flex-col gap-3 lg:gap-0'>
            <h1 className='text-center lg:text-left text-sacbeBlue text-5xl leading-[45px] lg:text-8xl lg:leading-[80px] font-bold '>
              {t('title.blue')} <br />{' '}
              <span className='text-sacbeOrangeDarker'> {t('title.orange')} </span>
            </h1>
            <p className='font-bold leading-[22px] lg:font-normal text-center lg:text-left font-Sintony text-lg  lg:text-xl text-sacbeBlue'>
              {t.rich('title.caption', {
                b: (chunks) => <b>{chunks}</b>,
                br: () => <br />,
              })}
            </p>
          </div>
        </div>
      </div>
      {/* COTIZADOR */}
      <div className='lg:flex items-center justify-center lg:pt-14  h-full w-[90%] lg:w-1/2 lg:bg-quoter-img  bg-no-repeat bg-top  bg-cover '>
        <div className='h-full w-full  flex items-center justify-center'>
          <Quoter exchangeRate={exchangeRate} />
          {/* FOOTER */}
        </div>
      </div>
      {/* FOOTER MOBILE */}
      <p className='lg:hidden max-w-2xl w-[80%] lg:w-full font-Sintony text-center text-[8px] leading-[8px] text-sacbeBlue lg:text-sacbeBeige'>
        {t('disclaimer.text')}
      </p>
      <div className='absolute lg:block hidden w-[32rem]  lg:left-[75%] lg:bottom-[16%]  lg:-translate-x-[50%]  z-50'>
        <p className='max-w-2xl w-1/2 lg:w-full font-Sintony text-center text-[9px] lg:leading-[14px] lg:text-xs  text-sacbeBlue lg:text-sacbeBeige'>
          {t('disclaimer.text')}
        </p>
      </div>
      {/* FOOTER */}
      <SectionFooter variant='orange' textColor='beige'>
        {t.rich('footer.text', {
          b: (chunks) => <b>{chunks}</b>,
          br: () => <br />,
        })}
      </SectionFooter>
    </div>
  );
}

export default QuoterSection;
