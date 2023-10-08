'use client';
import Image from 'next/image';
import logo from '@/public/imgs/logo.svg';
import MobilMenu from './MobileMenu';
import DesktopMenu from './DesktopMenu';
import Link from 'next/link';
function Navbar() {
  return (
    <div className='bg-sacbeBlue  z-50 w-full fixed h-14 font-Sintony shadow-md'>
      <div className='flex justify-between  h-full items-center max-w-[1300px] mx-auto px-7 lg:px-7'>
        {/* Logo */}
        <Link href='/'>
          <Image src={logo} alt='logo' className='w-[70%] lg:w-full  pb-2 ' />
        </Link>
        <div className=''>
          <MobilMenu />
          <DesktopMenu />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
