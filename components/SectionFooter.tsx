import { cn } from '@/lib/utils';
import React, { Children } from 'react';

type Props = {
  variant?: 'orange' | 'blue' | 'beige';
  textColor?: 'orange' | 'blue' | 'beige';
  classNameContainer?: string;
  classNameText?: string;
  children?: React.ReactNode;
};

function SectionFooter({
  variant = 'orange',
  textColor = 'beige',
  classNameContainer,
  classNameText,
  children,
}: Props) {
  return (
    <div
      className={cn(
        `hidden absolute  bg-sacbeOrangeDarker h-footer-height bottom-0 w-full lg:flex items-center justify-center`,
        variant === 'blue' && 'bg-sacbeBlue',
        variant === 'beige' && 'bg-sacbeBeige',
        classNameContainer,
      )}
    >
      <h1
        className={cn(
          `text-sacbeBeige text-6xl`,
          textColor === 'orange' && 'text-sacbeOrangeDarker',
          textColor === 'blue' && 'text-sacbeBlue',
          classNameText,
        )}
      >
        {children}
      </h1>
    </div>
  );
}

export default SectionFooter;
