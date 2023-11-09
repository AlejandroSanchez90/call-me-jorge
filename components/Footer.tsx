'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useTranslations } from 'next-intl';
import LanguageSwitcher from './LanguageSwitcher';

type Props = {};

type Languages = 'Español' | 'English';

function Footer({}: Props) {
  const t = useTranslations('Footer');

  const [language, setLanguage] = useState<Languages>('Español');
  const year = new Date().getFullYear();
  const handleLanguage = () => {
    if (language === 'Español') {
      setLanguage('English');
    } else {
      setLanguage('Español');
    }
  };
  return (
    <div className='bg-sacbeBlue font-Sintony'>
      <div className='flex flex-col max-w-[1440px] p-10 mx-auto gap-12'>
        {/* LINKS */}
        <div className='grid grid-cols-1 lg:grid-cols-2  xl:grid-cols-4 gap-6'>
          {/* Logo */}
          <div className=''>
            <Image
              width={200}
              height={100}
              src={'/imgs/footer/logo-footer.png'}
              alt='logo sacbe'
              className='object-cover w-[150px] lg:w-[200px]'
            />
          </div>
          {/* Términos de uso */}
          <div className='w-60'>
            <h3 className='text-sacbeOrangeDarker text-2xl font-bold mb-3'>
              {t('links.terms.title')}
            </h3>
            <ul className='flex flex-col gap-3 text-sacbeBeige text-sm'>
              <li>
                <a href={t('links.terms.one.url')}>{t('links.terms.one.label')}</a>
              </li>
              <li>
                <a href={t('links.terms.two.url')}>{t('links.terms.two.label')}</a>
              </li>
              <li>
                <a href={t('links.terms.three.url')}>{t('links.terms.three.label')}</a>
              </li>
              <li>
                <a href={t('links.terms.four.url')}>{t('links.terms.four.label')}</a>
              </li>
              <li>
                <a href={t('links.terms.five.url')}>{t('links.terms.five.label')}</a>
              </li>
            </ul>
          </div>
          {/* Servicio al cliente */}
          <div className='w-60'>
            <h3 className='text-sacbeOrangeDarker text-2xl font-bold mb-3'>
              {t('links.customer.title')}
            </h3>
            <ul className='flex flex-col gap-3 text-sacbeBeige text-sm'>
              <li>
                <a href={t('links.customer.one.url')}>{t('links.customer.one.label')}</a>
              </li>
              <li>
                <a href={t('links.customer.two.url')}>{t('links.customer.two.label')}</a>
              </li>
              <li>
                <a href='#Política' className='font-bold'>
                  support@sacbepayments.com
                </a>
              </li>
              <li>
                <a href='#Política'>
                  {' '}
                  <span className='font-bold'>+1 928 237 9808</span> <br />{' '}
                  {t('links.customer.hours')}
                </a>
              </li>
            </ul>
          </div>
          {/* Nosotros */}
          <div className='w-60'>
            <h3 className='text-sacbeOrangeDarker text-2xl font-bold mb-3'>
              {t('links.us.title')}
            </h3>
            <ul className='flex flex-col gap-3 text-sacbeBeige text-sm'>
              <li>
                <a href={t('links.us.one.url')}>{t('links.us.one.label')}</a>
              </li>
              <li>
                <a href={t('links.us.two.url')}>{t('links.us.two.label')}</a>
              </li>
              <li>
                <a href={t('links.us.three.url')}>{t('links.us.three.label')}</a>
              </li>
              <li>
                3480 Main Highway, <br /> Suite 400,
                <br /> Miami, FL 33133
              </li>
            </ul>
          </div>
        </div>
        <hr className='border-sacbeOrangeDarker' />
        {/* LEGALS */}
        <div className='flex flex-col gap-10 text-sacbeBeige text-[8px] lg:text-[xs] whitespace-pre-wrap'>
          <div className='flex justify-between items-center'>
            <div className=''>
              <Image
                width={150}
                height={75}
                src={'/imgs/footer/logo-footer.png'}
                alt='logo sacbe'
                className='object-cover w-[100px] lg:w-[150px]'
              />
            </div>
            <div className=''>
              <LanguageSwitcher className='text-sacbeBlue bg-sacbeBeige py-1 px-2 rounded-full font-bold text-[11px] lg:text-xs' />
            </div>
          </div>
          {/* TEXT */}
          <div className='flex flex-col gap-5 text-xs break-all'>
            <p>
              <span className='text-sacbeOrangeDarker'>{t('legals.pOne.orange')}</span>{' '}
              {t('legals.pOne.normal')}
            </p>
            <p className='text-sacbeOrange text-center'>{t('legals.pTwo.orange')}</p>

            <p>
              <span className='text-sacbeOrangeDarker'>{t('legals.pThree.orange')}</span>{' '}
              {t('legals.pThree.normal')}
              <span className='text-sacbeOrangeDarker'>{t('legals.pThree.orangeTwo')}</span>{' '}
              {t('legals.pThree.normalTwo')}
            </p>

            <p>
              <span className='text-sacbeOrangeDarker'>{t('legals.pFour.orange')}</span>{' '}
              {t('legals.pFour.normal')}
              <a href={t('legals.pFour.orangeTwo')} className='text-sacbeOrangeDarker'>
                {' '}
                {t('legals.pFour.orangeTwo')}
              </a>{' '}
              {t('legals.pFour.normalTwo')}
            </p>
            <p>{t('legals.pFive.normal')}</p>
            <p>
              {t('legals.pSix.normal')}
              <span className='text-sacbeOrangeDarker'>{t('legals.pSix.orange')}</span>{' '}
              {t('legals.pSix.normalTwo')}
            </p>
            <p className='text-sacbeOrangeDarker'>{year}© Copyright Sacbé</p>
          </div>
        </div>
        {/* Image */}
        <div
          className='lg:flex justify-center items-center hidden
        '
        >
          {' '}
          <Image
            width={300}
            height={300}
            src={'/imgs/footer/img-footer.png'}
            alt='logo sacbe'
            className='object-cover pt-[10%]'
          />
        </div>
        <div className='w-full '></div>
      </div>
    </div>
  );
}

export default Footer;
