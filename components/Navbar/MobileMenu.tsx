import useMobilMenu from '@/hooks/useMobileMenu';
import React from 'react';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';
import logo from '@/public/imgs/logo.svg';
import Image from 'next/image';
import { X } from 'lucide-react';
import useRoutes from '@/hooks/useRoutes';
import Link from 'next/link';
import LanguageSwitcher from '../LanguageSwitcher';
type Props = {};

function MobilMenu({}: Props) {
  const mobileMenu = useMobilMenu();
  const routes = useRoutes();
  return (
    <div className='block lg:hidden h-full'>
      <div className='flex items-center gap-5 justify-center'>
        <button
          onClick={() => {
            mobileMenu.onOpen();
          }}
          className=' h-4 w-[18px] '
        >
          <div className='relative h-full w-full'>
            <div className='h-[2px] rounded-full w-full bg-sacbeBeige absolute bottom-0'></div>
            <div className='h-[2px] w-full bg-sacbeBeige absolute top-0'></div>
            <div className='h-[2px] w-full bg-sacbeBeige absolute top-[50%] translate-y-[-50%]'></div>
          </div>
        </button>
        <button className='bg-sacbeBeige text-xs text-sacbeBlue font-bold px-2 py-1 rounded-full'>
          Cotizar
        </button>
      </div>
      <Sheet open={mobileMenu.isOpen}>
        <SheetContent className='bg-sacbeBlue '>
          <SheetHeader>
            <SheetTitle className=' flex justify-between items-center'>
              <Image height={200} width={250} src={logo} alt='logo' className='pb-3' />
              <div className='flex items-center justify-center '>
                <button onClick={mobileMenu.onClose}>
                  <X size={35} className='stroke-sacbeBeige' />
                </button>
              </div>
            </SheetTitle>
            <SheetDescription className=' flex   h-screen justify-center  text-xl'>
              <div className='h-full w-full flex pt-10 items-start justify-start '>
                <ul className='flex flex-col gap-7'>
                  {routes.map((route) => (
                    <li key={route.label} className='text-left text-sacbeBeige font-Sintony'>
                      <Link onClick={() => mobileMenu.onClose()} href={route.path}>
                        {route.label}
                      </Link>
                    </li>
                  ))}
                  <LanguageSwitcher className='bg-sacbeBeige text-sacbeBlue w-2/3 px-1 py-1 rounded-full font-bold font-Sintony flex items-center justify-center' />
                </ul>
              </div>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default MobilMenu;
