'use client';
import React from 'react';
import SectionLayout from './SectionLayout';
import SectionFooter from './SectionFooter';
import Image from 'next/image';

type Props = {};

function TableSection({}: Props) {
  return (
    <SectionLayout>
      <div className=' flex flex-col lg:flex-row items-center justify-center h-full w-full gap-5 lg:gap-0 px-2 lg:px-0 pb-14 lg:pb-0'>
        {/* TEXT */}
        <div className='w-1/2 h-full flex items-center justify-center '>
          <div className='h-full flex items-center justify-center '>
            <div className=' flex h-full justify-center items-start text-left w-full flex-col gap-7 '>
              <h1 className='uppercase leading-none text-5xl lg:text-8xl font-bold text-sacbeBlue w-[12rem] lg:w-[22rem] text-center lg:text-left'>
                REGÍSTRATE
                <span className='text-sacbeOrangeDarker'> EN MINUTOS</span>
              </h1>
              <div className='hidden lg:flex flex-col gap-2'>
                <p className='font-Sintony font-bold text-md lg:text-xl text-sacbeBlue leading-none'>
                  Sin Social Security <br /> Number (SSN) ni Green Card*{' '}
                </p>
                <p className='font-Sintony text-md lg:text-xl text-sacbeBlue leading-none'>
                  Una solución financiera en Estados Unidos <br /> donde podrás recibir pagos,
                  enviar dinero,
                  <br /> cargar tiempo aire, y pagar servicios.
                </p>
              </div>

              {/* Legals */}
              <div className='hidden lg:block'>
                <p className='font-Sintony text-sacbeBlue leading-none text-xs mt-8'>
                  *Aplica para personas sin SSN disponible pero que pueden proporcionar formas{' '}
                  <br />
                  alternas de identificación. **Este cuadro comparativo es meramente informativo{' '}
                  <br /> y se actualiza constantemente, por lo que está sujeto a cambios sin previo
                  aviso.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* TABLE */}

        <div className='w-full lg:w-1/2 flex h-full justify-center items-center flex-col gap-3 '>
          <Image
            src={'/imgs/table/table-sp.svg'}
            width={700}
            height={700}
            alt=''
            className=' object-cover'
          />
          <p className='hidden lg:block text-center font-Sintony font-bold text-sm text-sacbeBlue'>
            Para tu registro necesitarás una identificación con foto, más <br /> un comprobante de
            domicilio bajo tu nombre o algún familiar.
          </p>
        </div>

        {/* Mobile text */}
        <div className='flex flex-col lg:hidden gap-3'>
          <p className='font-Sintony font-bold text-md  text-sacbeBlue leading-none text-center'>
            Sin Social Security <br /> Number (SSN) ni Green Card*{' '}
          </p>
          <p className='font-Sintony text-md  text-sacbeBlue leading-none text-center'>
            Una solución financiera en Estados Unidos donde podrás recibir pagos, enviar dinero,
            cargar tiempo aire, y pagar servicios.
          </p>
        </div>
        <p className='font-Sintony text-[8px] text-center w-[80%] mt-5 lg:hidden text-sacbeBlue'>
          *Este cuadro comparativo es meramente informativo y se actualiza constantemente, por lo
          que está sujeto a cambios sin previo aviso. **Aplica para personas sin SSN disponible pero
          que pueden proporcionar formas alternas de identificación.
        </p>
      </div>

      <SectionFooter variant='lightBlue' textColor='beige'>
        CONTÁCTANOS. <b>ESTAMOS PARA TI</b>
      </SectionFooter>
    </SectionLayout>
  );
}

export default TableSection;
