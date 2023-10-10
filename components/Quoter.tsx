import React, { useEffect, useRef, useState } from 'react';
import { SubmitHandler, set, useForm } from 'react-hook-form';
import InputSacbe from './Input/InputSacbe';
import ButtonRound from './ButtonRound';
import toast from 'react-hot-toast';

type Props = {
  exchangeRate: string;
};
export type QuoterInputs = {
  mxInput: number;
  usInput: number;
};

type Currency = 'usInput' | 'mxInput' | '';
function Quoter({ exchangeRate }: Props) {
  const [usCurrent, setUsCurrent] = useState('');
  const [mxCurrent, setMxCurrent] = useState('');
  const enabledInput = useRef<Currency>('');
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
    console.log('mxInput', mxInput);

    if (mxInput > 0 && enabledInput.current === 'mxInput') {
      const exchange = mxInput / Number(exchangeRate);
      setUsCurrent((Math.round(exchange * 1e2) / 1e2).toString());
    } else if (mxInput <= 0) {
      setUsCurrent('');
      setMxCurrent('');
    }
    setMxCurrent(mxInput?.toString());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [exchangeRate, mxInput]);

  useEffect(() => {
    if (usInput > 0 && enabledInput.current === 'usInput') {
      const exchange = usInput * Number(exchangeRate);
      setMxCurrent((Math.round(exchange * 1e2) / 1e2).toString());
    } else if (usInput <= 0) {
      setUsCurrent('');
      setMxCurrent('');
    }
    setUsCurrent(usInput?.toString());

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [exchangeRate, usInput]);

  const onSubmit: SubmitHandler<QuoterInputs> = (data) => {
    toast.success(`Envias ${usCurrent} USD y recibes ${mxCurrent} MXN`);
  };

  const handleFocus = (e: any) => {
    enabledInput.current = e.target.id;
    console.log('enabledInput', enabledInput.current);

    e.target.select();
  };
  return (
    <div className=' bg-sacbeBeige  overflow-hidden rounded-[20px] border-sacbeBlue border-[3px] lg:border-0'>
      <form action='' className='p-8 flex flex-col gap-5' onSubmit={handleSubmit(onSubmit)}>
        {/* INPUT */}
        <div className=''>
          <label htmlFor='mxInput' className='font-Sintony font-bold text-sacbeBlue'>
            SI NECESITA
          </label>
          <div className='flex h-10 lg:h-full  group '>
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
              step='0.01'
              registerOptions={{
                required: true,
              }}
            />
            <div className='h-full w-[80px] transition-colors peer-focus:bg-sacbeBlue bg-sacbeOrangeDarker text-2xl lg:text-3xl font-bold text-sacbeBeige lg:py-2  rounded-lg text-center flex items-center justify-center'>
              MXN
            </div>
          </div>
        </div>
        {/* INPUT */}
        <div className=''>
          <label htmlFor='usInput' className='font-Sintony font-bold text-sacbeBlue'>
            TÚ ENVÍAS
          </label>
          <div className='flex h-10 lg:h-full  group '>
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
              step='0.01'
              registerOptions={{
                required: true,
              }}
            />
            <div className='h-full w-[80px] transition-colors peer-focus:bg-sacbeBlue bg-sacbeOrangeDarker text-2xl lg:text-3xl font-bold text-sacbeBeige lg:py-2  rounded-lg text-center flex items-center justify-center'>
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
