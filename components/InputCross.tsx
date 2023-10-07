import React from 'react';
import { UseFormRegister, RegisterOptions, FieldErrors } from 'react-hook-form';

import { HeroInputs } from './HeroSection';
import { cn } from '@/lib/utils';
type Props = {
  placeholder?: string;
  id: any;
  register: UseFormRegister<HeroInputs>;
  registerOptions?: RegisterOptions;
  type?: 'number' | 'text' | 'email' | 'tel' | 'password';
  errors: FieldErrors<any>;
};

function InputCross({ placeholder, id, register, registerOptions, type = 'text', errors }: Props) {
  console.log(errors[id]);

  return (
    <div className='relative w-full'>
      <input
        placeholder={placeholder}
        className={cn(
          `text-2xl appearance-none no-spinners  text-sacbeBlue placeholder:text-sacbeBlue pl-10 bg-inherit border-[2px] border-sacbeBlue w-full font-Tungsten h-8 xl:h-12 outline-none`,
          errors[id] && 'border-rose-800',
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
  );
}

export default InputCross;
