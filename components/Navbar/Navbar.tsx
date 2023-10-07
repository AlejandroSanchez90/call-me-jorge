'use client';
import Image from 'next/image';
import logo from '@/public/imgs/logo.svg';
import MobilMenu from './MobileMenu';
import DesktopMenu from './DesktopMenu';
import Link from 'next/link';
function Navbar() {
  return (
    <div className='bg-sacbeBlue w-full fixed h-14 font-Sintony shadow-md'>
      <div className='flex justify-between  h-full items-center max-w-[1440px] mx-auto px-7 lg:px-14'>
        {/* Logo */}
        <div className=' '>
          <Link href='/'>
            <Image
              src={logo}
              alt='logo'
              className='h-[150px] w-[134px] lg:h-[250px] lg:w-[180px] pb-2'
            />
          </Link>
        </div>
        <div className=''>
          <MobilMenu />
          <DesktopMenu />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
