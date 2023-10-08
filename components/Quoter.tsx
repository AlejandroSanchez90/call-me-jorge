import React, { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import InputSacbe from './Input/InputSacbe';
import ButtonRound from './ButtonRound';

type Props = {
  exchangeRate: string;
};
export type QuoterInputs = {
  mxInput: number;
  usInput: number;
};
function Quoter({ exchangeRate }: Props) {
  const [usCurrent, setUsCurrent] = useState('');
  const [mxCurrent, setMxCurrent] = useState('');
  console.log(exchangeRate);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors },
  } = useForm<QuoterInputs>();

  const usInput = watch('usInput');
  const mxInput = watch('mxInput');

  useEffect(() => {
    if (mxInput > 0) {
      const exchange = (mxInput / parseFloat(exchangeRate)).toFixed(2);
      setUsCurrent(exchange?.toString());
    } else if (mxInput <= 0) {
      setUsCurrent('');
      setMxCurrent('');
    }
    setMxCurrent(mxInput?.toString());
  }, [exchangeRate, mxInput, reset, setValue]);

  useEffect(() => {
    if (usInput > 0) {
      const exchange = (usInput * parseFloat(exchangeRate)).toFixed(2);
      setMxCurrent(exchange?.toString());
    } else if (usInput <= 0) {
      setUsCurrent('');
      setMxCurrent('');
    }
    setUsCurrent(usInput?.toString());
  }, [exchangeRate, usInput, setValue, reset]);

  const onSubmit: SubmitHandler<QuoterInputs> = (data) => {
    alert(`FORM ES VALIDO! MX: ${data.mxInput}, US: ${data.usInput}`);
  };

  const handleFocus = (e: any) => {
    e.target.select();
  };
  return (
    <div className=' bg-sacbeBeige  overflow-hidden rounded-[20px] '>
      <form action='' className='p-5 flex flex-col gap-5' onSubmit={handleSubmit(onSubmit)}>
        {/* INPUT */}
        <div className=''>
          <label htmlFor='mxInput' className='font-Sintony font-bold text-sacbeBlue'>
            SI NECESITA
          </label>
          <div className='flex h-full  group '>
            <InputSacbe
              variant='regular'
              errors={errors}
              register={register}
              id='mxInput'
              type='number'
              placeholder='0.00'
              className='peer'
              value={mxCurrent?.toString()}
              onFocus={(e) => handleFocus(e)}
              registerOptions={{
                required: true,
              }}
            />
            <div className='h-full w-[80px] transition-colors peer-focus:bg-sacbeBlue bg-sacbeOrangeDarker text-3xl font-bold text-sacbeBeige py-2  rounded-lg text-center'>
              MXN
            </div>
          </div>
        </div>
        {/* INPUT */}
        <div className=''>
          <label htmlFor='usInput' className='font-Sintony font-bold text-sacbeBlue'>
            TÚ ENVÍAS
          </label>
          <div className='flex h-full  group '>
            <InputSacbe
              variant='regular'
              errors={errors}
              register={register}
              id='usInput'
              type='number'
              placeholder='0.00'
              className='peer'
              value={usCurrent?.toString()}
              onFocus={(e) => handleFocus(e)}
              registerOptions={{
                required: true,
              }}
            />
            <div className='h-full w-[80px] transition-colors peer-focus:bg-sacbeBlue bg-sacbeOrangeDarker text-3xl font-bold text-sacbeBeige py-2  rounded-lg text-center'>
              USD
            </div>
          </div>
        </div>
        {/* COTIZADOR PRECIO */}
        <div className=''>
          <p className='font-Sintony text-center text-sm'>
            Dólar hoy: 1 USD = ${exchangeRate} MXN*
          </p>
        </div>

        <ButtonRound label='Enviar ahora' className='p-3' onClick={() => reset()} />
      </form>
    </div>
  );
}

export default Quoter;
