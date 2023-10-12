'use client';
import React from 'react';
import SectionLayout from './SectionLayout';
import SectionFooter from './SectionFooter';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

type Props = {};

function TableSection({}: Props) {
  const t = useTranslations('Table');

  return (
    <SectionLayout>
      <div className=' flex flex-col lg:flex-row items-center justify-center h-full w-full gap-5 lg:gap-0 px-2 lg:px-0 pb-5 lg:pb-0'>
        {/* TEXT */}
        <div className='w-1/2 h-full flex items-center justify-center '>
          <div className='h-full flex items-center justify-center '>
            <div className=' flex h-full justify-center items-start text-left w-full flex-col gap-7 '>
              {/* DESKTOP */}
              <h1 className='hidden lg:block lg:text-8xl uppercase lg:leading-[85px] font-bold text-sacbeBlue w-[30rem] text-left'>
                {t.rich('title.blue', {
                  b: (chunks) => <b>{chunks}</b>,
                  br: () => <br />,
                })}
                <span className='text-sacbeOrangeDarker'>
                  {t.rich('title.orange', {
                    b: (chunks) => <b>{chunks}</b>,
                    br: () => <br />,
                  })}
                </span>
              </h1>
              {/* MOBILE */}
              <h1 className='lg:hidden block uppercase text-5xl leading-[45px]  font-bold text-sacbeBlue w-[12rem]  text-center '>
                {t('titleMobile.blue')}
                <span className='text-sacbeOrangeDarker'> {t('titleMobile.orange')}</span>
              </h1>
              <div className='hidden lg:flex flex-col gap-2'>
                <p className='font-Sintony font-bold text-md lg:text-xl text-sacbeBlue leading-none lg:leading-[22px]'>
                  {t.rich('title.caption', {
                    b: (chunks) => <b>{chunks}</b>,
                    br: () => <br />,
                  })}
                </p>
                <p className='font-Sintony text-md lg:text-xl text-sacbeBlue lg:leading-[22px]'>
                  {t.rich('title.text', {
                    b: (chunks) => <b>{chunks}</b>,
                    br: () => <br />,
                  })}
                </p>
              </div>

              {/* Legals */}
              <div className='hidden lg:block'>
                <p className='font-Sintony text-sacbeBlue leading-none lg:leading-[14px] lg:text-xs '>
                  {t.rich('disclaimer.text', {
                    b: (chunks) => <b>{chunks}</b>,
                    br: () => <br />,
                  })}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* TABLE */}

        <div className='w-full lg:w-1/2 flex h-full justify-center items-center flex-col gap-3 px-2'>
          <Image src={t('table.image')} width={700} height={700} alt='' className=' object-cover' />
          <p className='hidden lg:block text-center font-Sintony font-bold text-sm text-sacbeBlue'>
            {t.rich('table.text', {
              b: (chunks) => <b>{chunks}</b>,
              br: () => <br />,
            })}
          </p>
        </div>

        {/* Mobile text */}
        <div className='flex flex-col lg:hidden gap-3 px-5'>
          <p className='font-Sintony font-bold text-md  text-sacbeBlue leading-none text-center'>
            {t.rich('title.caption', {
              b: (chunks) => <b>{chunks}</b>,
              br: () => <br />,
            })}
          </p>
          <p className='font-Sintony text-md  text-sacbeBlue leading-none text-center'>
            {t.rich('titleMobile.text', {
              b: (chunks) => <b>{chunks}</b>,
              br: () => <br />,
            })}
          </p>
        </div>
        <p className='font-Sintony text-[8px] leading-[8px] text-center w-[80%]  lg:hidden text-sacbeBlue'>
          {t('disclaimer.mobile')}
        </p>
      </div>

      <SectionFooter variant='lightBlue' textColor='beige'>
        {t.rich('footer.text', {
          b: (chunks) => <b>{chunks}</b>,
        })}
      </SectionFooter>
    </SectionLayout>
  );
}

export default TableSection;
