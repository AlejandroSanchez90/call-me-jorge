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
    <div className=' h-full  pb-0 lg:pb-footer-padding w-ful  flex flex-col lg:flex-row items-center justify-center relative gap-5 lg:gap-0'>
      {/* Texto */}
      <div className='flex items-center justify-center bg-sacbeBeige h-full w-[80%] lg:w-1/2 pt-14'>
        <div className=' flex justify-center items-center  gap-3 2xl:gap-5 h-full  px-2 2xl:px-0 '>
          {/* Title */}
          <div className=' '>
            <h1 className='text-center lg:text-left text-sacbeBlue text-5xl lg:text-8xl font-bold leading-none'>
              CALCULA <br /> <span className='text-sacbeOrangeDarker'>TU ENVÍO</span>
            </h1>
            <p className='font-bold lg:font-normal text-center lg:text-left font-Sintony text-lg  lg:text-xl text-sacbeBlue'>
              Descubre lo fácil que es hacer <br /> envíos desde tu Cuenta Sacbé™
            </p>
          </div>
        </div>
      </div>
      {/* COTIZADOR */}
      <div className='lg:flex items-center justify-center lg:pt-14  h-full w-[90%] lg:w-1/2 lg:bg-quoter-img  bg-no-repeat bg-top  bg-cover '>
        <div className='h-full w-full  flex items-center justify-center'>
          <Quoter exchangeRate={exchangeRate} />
          {/* FOOTER */}
        </div>
      </div>

      <div className='absolute  w-[32rem] left-[50%] lg:left-[75%] -bottom-[15%] lg:bottom-[12%] -translate-x-[25%] lg:-translate-x-[50%] text-white z-50'>
        <p className='max-w-2xl w-1/2 lg:w-full font-Sintony text-center text-[9px] lg:text-xs text-sacbeBlue lg:text-sacbeBeige'>
          *El tipo de cambio mostrado en de carácter meramente informativo y se actualiza
          constantemente, por lo que está sujeto a cambios sin previo aviso. Para más información
          sobre tasas o tarifas ver el Contrato del Titular de Sacbé.
        </p>
      </div>
      {/* FOOTER */}
      <SectionFooter variant='orange' textColor='beige'>
        REGÍSTRATE <b>EN MINUTOS</b>
      </SectionFooter>
    </div>
  );
}

export default QuoterSection;
