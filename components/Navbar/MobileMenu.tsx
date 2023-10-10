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
              <div className='flex items-center justify-center'>
                <button onClick={mobileMenu.onClose}>
                  <X size={35} className='stroke-sacbeBeige' />
                </button>
              </div>
            </SheetTitle>
            <SheetDescription className='bg-sacbeOrange flex  items-center justify-center h-full text-2xl'>
              PLACE HOLDER
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default MobilMenu;
