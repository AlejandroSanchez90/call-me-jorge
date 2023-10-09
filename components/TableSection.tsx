'use client';
import React from 'react';
import SectionLayout from './SectionLayout';
import SectionFooter from './SectionFooter';
import Image from 'next/image';

type Props = {};

function TableSection({}: Props) {
  return (
    <SectionLayout>
      <div className=' flex items-center justify-evenly h-full w-full px-10 max-w-7xl'>
        {/* TEXT */}
        <div className='h-full w-1/2 flex items-center justify-center '>
          <div className=' flex h-full justify-center items-start text-left w-full flex-col gap-7 '>
            <h1 className='uppercase leading-none text-7xl font-bold text-sacbeBlue'>
              REGÍSTRATE <br />
              <span className='text-sacbeOrangeDarker'>
                con tu móvil <br /> y un id con foto
              </span>
            </h1>
            <div className='flex flex-col gap-2'>
              <p className='font-Sintony font-bold text-lg text-sacbeBlue leading-none'>
                No necesitas Social Security <br /> Number (SSN) ni Green Card*{' '}
              </p>
              <p className='font-Sintony text-lg text-sacbeBlue leading-none'>
                Una solución financiera en Estados Unidos <br /> donde podrás recibir pagos, enviar
                dinero,
                <br /> cargar tiempo aire, y pagar servicios.
              </p>
            </div>

            {/* Legals */}
            <div className=''>
              <p className='font-Sintony text-sacbeBlue leading-none text-xs'>
                *Aplica para personas sin SSN disponible pero que pueden proporcionar formas <br />
                alternas de identificación. **Este cuadro comparativo es meramente informativo{' '}
                <br /> y se actualiza constantemente, por lo que está sujeto a cambios sin previo
                aviso.
              </p>
            </div>
          </div>
        </div>

        {/* TABLE */}
        <div className='max-w-xl  flex h-full justify-center items-center flex-col gap-3 px-5'>
          <Image
            src={'/imgs/table/table-sp.svg'}
            width={700}
            height={700}
            alt=''
            className=' object-cover'
          />
          <p className='text-center font-Sintony font-bold text-sm text-sacbeBlue'>
            Para tu registro necesitarás una identificación con foto, más <br /> un comprobante de
            domicilio bajo tu nombre o algún familiar.
          </p>
        </div>
      </div>

      <SectionFooter variant='lightBlue' textColor='beige'>
        CONTÁCTANOS. <b>ESTAMOS PARA TI</b>
      </SectionFooter>
    </SectionLayout>
  );
}

export default TableSection;
