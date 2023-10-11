import React, { useEffect, useRef, useState } from 'react';
import ButtonRound from './ButtonRound';
import { cn } from '@/lib/utils';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import MobileForm from './MobileForm';
type Props = {
  label: string;
};

function ButtonDownload({ label }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='w-[80%] flex items-center relative max-w-md  '>
      <ButtonRound
        onClick={() => setIsOpen(!isOpen)}
        label={label}
        className={cn('peer relative peer w-full p-4 font-bold mx-auto')}
      />
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent
          onClick={() => {
            console.log('click');
          }}
          className='bg-sacbeBeige h-full w-full'
        >
          <MobileForm />
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default ButtonDownload;
