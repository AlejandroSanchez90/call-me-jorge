'use client';
import useRoutes from '@/hooks/useRoutes';
import Link from 'next/link';
import React from 'react';
import LanguageSwitcher from '../LanguageSwitcher';

type Props = {};

function DesktopMenu({}: Props) {
  const routes = useRoutes();

  return (
    <div className='hidden lg:block'>
      <ul className=' flex items-center justify-center gap-8 text-sacbeBeige text-sm'>
        {routes.map((route) => (
          <li key={route.label} className='hover:text-sacbeOrangeDarker transition-colors'>
            <Link href={route.path}>{route.label}</Link>
          </li>
        ))}

        <LanguageSwitcher />
      </ul>
    </div>
  );
}

export default DesktopMenu;
