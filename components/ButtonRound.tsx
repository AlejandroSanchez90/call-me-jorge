import { cn } from '@/lib/utils';
import React from 'react';

type Props = {
  label: string;
  className?: string;
};

function ButtonRound({ label, className }: Props) {
  return (
    <button
      className={cn(
        `bg-sacbeBlue w-full border-sacbeOrangeDarker border-2 rounded-full font-Sintony text-sacbeBeige hover:brightness-90`,
        className,
      )}
    >
      {label}
    </button>
  );
}

export default ButtonRound;
