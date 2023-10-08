import { cn } from '@/lib/utils';
import React from 'react';

type Props = {
  label: string;
  className?: string;
  onClick?: () => void;
};

function ButtonRound({ label, className, onClick }: Props) {
  return (
    <button
      onClick={onClick}
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
