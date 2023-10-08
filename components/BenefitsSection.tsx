import React from 'react';
import SectionLayout from './SectionLayout';
import BenefitsCard from './BenefitsCard';

type Props = {};

function BenefitsSection({}: Props) {
  return (
    <SectionLayout>
      <div className='h-full w-full  bg-sacbeBlue flex items-center justify-center'>
        <div className='flex flex-col w-full gap-10'>
          {/* HEADER */}
          <div className='flex items-center flex-col'>
            <h1 className='text-8xl font-bold text-sacbeBeige leading-none'>
              MARCAMOS <span className='text-sacbeOrangeDarker'>LA DIFERENCIA</span>
            </h1>
            <h2 className='uppercase text-6xl text-sacbeBeige leading-none'>
              Conoce todos los servicios que nos hacen únicos
            </h2>
          </div>
          {/* CARDS */}
          <div className='max-w-[1440px]    mx-auto '>
            <div className='grid grid-cols-4 gap-5'>
              <BenefitsCard image='/imgs/benefitsCards/one.png'>
                {/* Caption */}
                <h3 className='font-bold text-3xl leading-none'>
                  DIRECTO A <br /> TU PUERTA
                </h3>
                {/* Description */}
                <p className='text-sm leading-none font-Sintony'>
                  Obtén tu Tarjeta Digital o solicita una{' '}
                  <b>Tarjeta de Débito Prepagada a domicilio sin costo*</b>
                </p>
              </BenefitsCard>

              <BenefitsCard image='/imgs/benefitsCards/two.png'>
                {/* Caption */}
                <h3 className='font-bold text-3xl leading-none'>
                  TRANSFIERE <br /> DESDE TU CELULAR
                </h3>
                {/* Description */}
                <p className='text-sm leading-none font-Sintony'>
                  <b>Envía dinero a tus contactos en México y USA </b>
                  desde tu Cuenta Sacbé
                </p>
              </BenefitsCard>

              <BenefitsCard image='/imgs/benefitsCards/three.png'>
                <h3 className='font-bold text-3xl leading-none'>
                  DIRECTO A <br /> TU PUERTA
                </h3>
                {/* Description */}
                <p className='text-sm leading-none font-Sintony'>
                  Obtén tu Tarjeta Digital o solicita una{' '}
                  <b>Tarjeta de Débito Prepagada a domicilio sin costo*</b>
                </p>
              </BenefitsCard>

              <BenefitsCard image='/imgs/benefitsCards/four.png'>
                <h3 className='font-bold text-3xl leading-none'>
                  DIRECTO A <br /> TU PUERTA
                </h3>
                {/* Description */}
                <p className='text-sm leading-none font-Sintony'>
                  Obtén tu Tarjeta Digital o solicita una{' '}
                  <b>Tarjeta de Débito Prepagada a domicilio sin costo*</b>
                </p>
              </BenefitsCard>
            </div>
          </div>

          {/* Legals */}

          <div className='max-w-[840px]    mx-auto '>
            <p className='font-Sintony text-center text-sm leading-none text-sacbeBeige'>
              *Esta tarjeta es emitida por Metropolitan Commercial Bank (Miembro FDIC) conforme con
              una licencia de Visa U.S.A Inc. Cargos adicionales de terceros pueden aplicar, para
              más información ver el Anexo de tarifas y cargos. **Válido para comercios y
              plataformas que aceptan pagos con tarjeta VISA™.
            </p>
          </div>
        </div>
      </div>
      <div className='hidden absolute  bg-sacbeBeige h-24 bottom-0 w-full lg:flex items-center justify-center'>
        <h1 className='text-sacbeOrangeDarker text-7xl'>
          UNA NUEVA FORMA{' '}
          <span className='text-sacbeBlue font-bold'> DE ENVIAR DINERO A MÉXICO</span>
        </h1>
      </div>
    </SectionLayout>
  );
}

export default BenefitsSection;
