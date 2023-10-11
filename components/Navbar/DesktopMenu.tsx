'use client';
import useRoutes from '@/hooks/useRoutes';
import Link from 'next/link';
import React from 'react';

type Props = {};

function DesktopMenu({}: Props) {
  const routes = useRoutes();

  return (
    <div className='hidden lg:block'>
      <ul className=' flex items-center justify-center gap-4 text-sacbeBeige text-sm'>
        {routes.map((route) => (
          <li key={route.label} className='hover:text-sacbeOrangeDarker transition-colors'>
            <Link href={route.path}>{route.label}</Link>
          </li>
        ))}

        <li className='bg-sacbeOrangeDarker px-4 py-1 rounded-full font-bold'>
          <Link href='/en'>English</Link>
        </li>
      </ul>
    </div>
  );
}

export default DesktopMenu;
