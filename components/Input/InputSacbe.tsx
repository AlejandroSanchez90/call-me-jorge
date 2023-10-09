import React from 'react';
import { UseFormRegister, RegisterOptions, FieldErrors } from 'react-hook-form';

import { HeroInputs } from '../HeroSection';
import { cn } from '@/lib/utils';
import { QuoterInputs } from '../Quoter';
type Props = {
  placeholder?: string;
  id: any;
  register: UseFormRegister<any>;
  registerOptions?: RegisterOptions;
  type?: 'number' | 'text' | 'email' | 'tel' | 'password';
  errors: FieldErrors<any>;
  variant?: 'regular' | 'cross';
  className?: string;
  value?: string;
  onFocus?: (e: any) => void;
  step?: string;
};

function InputSacbe({
  placeholder,
  id,
  register,
  registerOptions,
  className,
  type = 'text',
  errors,
  variant = 'cross',
  value,
  step,
  onFocus,
}: Props) {
  return (
    <>
      {variant === 'cross' ? (
        <div className='relative w-full'>
          <input
            id={id}
            placeholder={placeholder}
            className={cn(
              `text-2xl appearance-none no-spinners autofill:fill-none  text-sacbeBlue placeholder:text-sacbeBlue pl-10 bg-inherit border-[2px] border-sacbeBlue w-full font-Tungsten h-12 xl:h-12 outline-none`,
              errors[id] && 'border-rose-800',
              className,
            )}
            type={type}
            {...register(id, registerOptions)}
          />
          <div
            className={cn(
              `h-[2px] w-[18px] transition duration-300 bg-sacbeBlue absolute  left-[12px] top-[50%] translate-y-[-50%]`,
              errors[id] && 'rotate-45 bg-rose-800',
            )}
          />
          <div
            className={cn(
              `h-[18px] w-[2px] transition duration-300 bg-sacbeBlue absolute left-[20px] top-[50%] translate-y-[-50%]`,
              errors[id] && 'rotate-45 bg-rose-800',
            )}
          />
        </div>
      ) : (
        <input
          onFocus={onFocus}
          value={value}
          step={step}
          id={id}
          placeholder={placeholder}
          className={cn(
            `text-3xl appearance-none no-spinners transition-colors focus:border-sacbeBlue  text-sacbeBlue rounded-lg py-1 font-bold placeholder:text-sacbeBlue px-2 bg-inherit  border-[2px] border-sacbeOrangeDarker w-full font-Tungsten  outline-none decoration-transparent`,
            errors[id] && 'border-rose-800 focus:border-rose-800',
            className,
          )}
          type={type}
          {...register(id, registerOptions)}
        />
      )}
    </>
  );
}

export default InputSacbe;
