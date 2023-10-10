import React, { useEffect, useRef, useState } from 'react';
import ButtonRound from './ButtonRound';
import { cn } from '@/lib/utils';
import { BsGooglePlay, BsApple } from 'react-icons/bs';
import Link from 'next/link';
import { set } from 'react-hook-form';
type Props = {
  label: string;
};

function ButtonDownload({ label }: Props) {
  const [isOpen, setIsOpen] = useState(true);
  const downloadBtn = useRef<any>();

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (!downloadBtn.current.contains(event.target)) {
        setIsOpen(false);
        console.log(downloadBtn.current);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
  }, []);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className='w-[80%] flex items-center relative max-w-md  '>
      <ButtonRound
        onClick={toggleMenu}
        label={label}
        className={cn('peer relative peer w-[80%] p-4 font-bold mx-auto')}
      />
      <div
        ref={downloadBtn}
        className={cn(
          'opacity-0  pointer-events-none flex flex-row gap-2 transition-all absolute items-center justify-center   p-2  bg-sacbeBlue border-2 rounded-xl border-sacbeOrangeDarker left-[50%] translate-x-[-50%] top-[200%] ',
          isOpen && 'opacity-100 top-[110%] pointer-events-auto',
        )}
      >
        <Link
          href='#'
          className='flex transition-colors  items-center justify-start gap-2 text-sacbeBeige hover:bg-sacbeOrangeDarker px-4 py-2 rounded-xl text-xl'
        >
          <BsApple className='' size={20} />
          Apple
        </Link>
        <div className='h-6 w-[2px] bg-sacbeOrangeDarker'></div>
        <Link
          href='#'
          className='flex transition-colors  items-center justify-start gap-2 text-sacbeBeige hover:bg-sacbeOrangeDarker px-4 py-2 rounded-xl text-xl'
        >
          <BsGooglePlay size={20} className='' />
          Android
        </Link>
      </div>
    </div>
  );
}

export default ButtonDownload;
