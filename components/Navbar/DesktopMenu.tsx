import Link from 'next/link';
import React from 'react';

type Props = {};

function DesktopMenu({}: Props) {
  return (
    <div className='hidden lg:block'>
      <ul className=' flex items-center justify-center gap-4 text-sacbeBeige text-sm'>
        <li className='hover:text-sacbeOrangeDarker transition-colors'>
          <Link href='#videos-section'>Ver videos</Link>
        </li>
        <li>
          <Link className='hover:text-sacbeOrangeDarker transition-colors' href='#benefits-section'>
            Beneficios
          </Link>
        </li>
        <li>
          <Link className='hover:text-sacbeOrangeDarker transition-colors' href='#steps-section'>
            Socios
          </Link>
        </li>
        <li>
          <Link className='hover:text-sacbeOrangeDarker transition-colors' href='#about-us-section'>
            Sobre nosotros
          </Link>
        </li>
        <li>
          <Link className='hover:text-sacbeOrangeDarker transition-colors' href='#faq-section'>
            FAQs
          </Link>
        </li>
        <li className='bg-sacbeOrangeDarker px-4 py-1 rounded-full font-bold'>
          <Link href='#'>English</Link>
        </li>
      </ul>
    </div>
  );
}

export default DesktopMenu;
