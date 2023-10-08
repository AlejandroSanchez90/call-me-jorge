import React from 'react';
import SectionLayout from './SectionLayout';
import Image from 'next/image';

type Props = {};

function StepsSection({}: Props) {
  return (
    <SectionLayout>
      <div className='flex flex-col w-full gap-4'>
        {/* Header */}
        <div className='flex items-center flex-col'>
          <h1 className='text-[80px] text-center font-bold text-sacbeOrangeDarker leading-[80px] uppercase'>
            envía dinero <br />
            <span className='text-sacbeBlue'>a México* en minutos</span>
          </h1>
        </div>
        {/* Squares */}
        <div className='grid grid-cols-3 max-w-[1440px] mx-auto gap-5'>
          {/* SQUARE */}
          <div className='relative border-[3px] border-sacbeOrangeDarker rounded-lg flex flex-col items-center justify-center text-center p-2 pt-12 gap-4'>
            <h1 className='uppercase text-sacbeOrangeDarker text-6xl font-bold leading-[55px]'>
              Carga tu <br /> cuenta en usa
            </h1>
            <p className='font-Sintony text-lg text-sacbeBlue max-w-[300px] leading-none'>
              Carga dinero desde{' '}
              <b> cuentas bancarias, tarjetas o en efectivo en tiendas cercanas**</b>
            </p>
            <Image
              src={'/imgs/steps/stores.png'}
              width={200}
              height={200}
              alt='stores'
              className='object-cover w-full'
            />
            <div className='absolute rounded-full overflow-hidden h-[90px] w-[90px] border-sacbeOrangeDarker border-[3px] top-[-15%] left-[-15%]'>
              <Image
                src='/imgs/steps/usa-flag.png'
                width={100}
                height={100}
                className='object-cover'
                alt='usa flag'
              />
            </div>
          </div>
          {/* SQUARE */}
          <div className=' border-[3px] border-sacbeOrangeDarker rounded-lg flex flex-col items-center justify-center text-center p-2 pt-12 gap-4'>
            <h1 className='uppercase text-sacbeOrangeDarker text-6xl font-bold leading-[55px]'>
              ENVÍA DINERO <br /> PAGANDO SÓLO
            </h1>
            <p className=' font-bold text-[180px] text-sacbeBlue max-w-[300px] leading-none'>
              $1.50
            </p>
            <p className='font-Sintony text-lg leading-none text-sacbeBlue font-bold -mt-6'>
              Cargo de Transferencia <br /> internacional directa con un <br /> atractivo tipo de
              cambio***
            </p>
          </div>
          {/* SQUARE */}
          <div className='relative border-[3px] border-sacbeOrangeDarker rounded-lg flex flex-col items-center justify-center text-center p-2 pt-12 gap-4'>
            <h1 className='uppercase text-sacbeOrangeDarker text-6xl font-bold leading-[55px]'>
              RETIRAN DONDE <br /> LO NECESITEN
            </h1>
            <div className='font-Sintony text-lg text-sacbeBlue max-w-[300px] leading-none flex-1 flex items-start justify-center'>
              <p>
                Directamente en establecimientos o en uno <br /> de los{' '}
                <span>
                  <b>
                    +44,000 cajeros <br /> (ATM) en el país****
                  </b>
                </span>
              </p>
            </div>
            <Image
              src={'/imgs/steps/atm_logos.png'}
              width={200}
              height={200}
              alt='stores'
              className='object-cover w-full '
            />
            <div className='absolute rounded-full overflow-hidden h-[90px] w-[90px] border-sacbeOrangeDarker border-[3px] top-[-15%] right-[-15%]'>
              <Image
                src='/imgs/steps/mx-flag.png'
                width={100}
                height={100}
                className='object-cover'
                alt='mexico flag'
              />
            </div>
          </div>
        </div>
        <div className=''>
          <p className='text-center font-Sintony text-[10px] max-w-6xl mx-auto mt-5'>
            *El destinatario deberá aplicar a una cuenta Sacbé en México. En México, las cuentas con
            tarjeta Sacbé están patrocinadas por separado por Sacbé Payments de México, S.A.P.I de
            C.V. Institución de Fondos de Pago Electrónico conforme a una licencia de Mastercard
            International. **Servicio proporcionado por la Red Greendot, Los logos de terceros no
            son propiedad de Metropolitan Commercial Bank o de Sacbe Payments. ***Aplica cargo de
            Transferencia internacional directa $1.50. El tipo de cambio aplicado se muestra al
            momento de la transacción. Para mas información sobre tasas o tarifas ver el contrato
            del titular de Sacbé. ****En México, las cuentas con tarjeta Sacbé están patrocinadas
            por separado por Sacbé Payments de México, S.A.P.I de C.V. Institución de Fondos de Pago
            Electrónico conforme a una licencia de Mastercard International.
          </p>
        </div>
      </div>
      <div className='hidden absolute  bg-sacbeBlue h-24 bottom-0 w-full lg:flex items-center justify-center'>
        <h1 className=' leading-none text-6xl font-bold text-sacbeBeige'>
          ENVÍOS 24/7 DESDE TU TELÉFONO
        </h1>
      </div>
    </SectionLayout>
  );
}

export default StepsSection;
