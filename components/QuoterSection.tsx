'use client';
import React, { useEffect, useState } from 'react';
import InputSacbe from './Input/InputSacbe';
import { SubmitHandler, useForm } from 'react-hook-form';
import ButtonRound from './ButtonRound';
import Quoter from './Quoter';
import SectionFooter from './SectionFooter';

type Props = {
  exchangeRate: string;
};

function QuoterSection({ exchangeRate }: Props) {
  return (
    <div className=' h-full  pb-0 lg:pb-footer-padding w-ful  flex flex-col lg:flex-row items-center justify-center'>
      {/* Texto */}
      <div className='flex items-center justify-center bg-sacbeBeige h-full w-1/2 lg:pt-14'>
        <div className=' max-w-[35rem] flex justify-center items-start flex-col gap-3 2xl:gap-5 h-full w-full px-2 2xl:px-0 '>
          {/* Title */}
          <div className=' '>
            <h1 className='text-sacbeBlue text-[90px] font-bold leading-none'>
              CALCULA <br /> <span className='text-sacbeOrangeDarker'>TU ENVÍO</span>
            </h1>
            <p className='font-Sintony text-xl text-sacbeBlue'>
              Descubre lo fácil que es hacer <br /> envíos desde tu Cuenta Sacbé™
            </p>
          </div>
        </div>
      </div>
      {/* COTIZADOR */}
      <div className='lg:flex items-center justify-center lg:pt-14  h-full w-1/2 lg:bg-quoter-img  bg-no-repeat bg-top  bg-cover '>
        <div className='h-full w-full relative flex items-center justify-center'>
          <Quoter exchangeRate={exchangeRate} />
          {/* FOOTER */}
          <div className='absolute bottom-8 text-white'>
            <p className='max-w-xl font-Sintony text-center text-sm'>
              *El tipo de cambio mostrado en de carácter meramente informativo y se actualiza
              constantemente, por lo que está sujeto a cambios sin previo aviso. Para más
              información sobre tasas o tarifas ver el Contrato del Titular de Sacbé.
            </p>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <SectionFooter variant='orange' textColor='beige'>
        REGÍSTRATE <b>EN MINUTOS</b>
      </SectionFooter>
    </div>
  );
}

export default QuoterSection;
