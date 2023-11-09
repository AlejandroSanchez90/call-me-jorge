import { cn } from '@/lib/utils';
import React from 'react';

type Props = {
  label: string;
  className?: string;
  onClick?: () => void;
  diabled?: boolean;
};

function ButtonRound({ label, className, onClick, diabled }: Props) {
  return (
    <button
      onClick={onClick}
      disabled={diabled}
      className={cn(
        `bg-sacbeBlue disabled:opacity-80 disabled:cursor-wait w-full border-sacbeOrangeDarker border-2 rounded-full font-Sintony text-sacbeBeige hover:brightness-90`,
        className,
      )}
    >
      {label}
    </button>
  );
}

export default ButtonRound;
