'use client';
import React from 'react';
import InputSacbe from './Input/InputSacbe';
import ButtonRound from './ButtonRound';
import { SubmitHandler, useForm } from 'react-hook-form';
import { HeroInputs } from './HeroSection';
import toast from 'react-hot-toast';

type Props = {};

function MobileForm({}: Props) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<HeroInputs>();
  const onSubmit: SubmitHandler<HeroInputs> = (data) => {
    console.log(data);

    // alert(
    //   `FORM ES VALIDO! Name: ${data.name}, Phone: ${data.phone}, Email: ${data.email}, Postal: ${data.postalCode}`,
    // );
    toast.success('Formulario enviado con éxito');
  };
  return (
    <div className=' flex h-full w-[80%] mx-auto items-center justify-center flex-col gap-8 pt-14 pb-14'>
      <div className=''>
        <h1 className='text-3xl font-bold text-center px-4 leading-none  text-sacbeBlue'>
          <span className='text-sacbeOrange'>
            ABRE UNA CUENTA SACBÉ
            <br />
          </span>
          SIN SSN* Y ENVIA DINERO <br /> A MÉXICO POR SOLO $1.50**{' '}
        </h1>
      </div>
      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-3 px-5 w-full xl:px-0'>
        <InputSacbe
          placeholder='NAME'
          id='name'
          register={register}
          registerOptions={{ required: true }}
          errors={errors}
        />
        <InputSacbe
          placeholder='TELÉFONO'
          id='phone'
          register={register}
          type='number'
          registerOptions={{
            required: true,
            pattern: /^(0|[1-9]\d*)(\.\d+)?$/,
            minLength: 8,
          }}
          errors={errors}
        />
        <InputSacbe
          placeholder='EMAIL'
          id='email'
          register={register}
          type='text'
          registerOptions={{
            required: true,
            pattern:
              /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          }}
          errors={errors}
        />
        <InputSacbe
          placeholder='CODIGO POSTAL'
          id='postalCode'
          register={register}
          type='number'
          registerOptions={{ required: true, pattern: /^(0|[1-9]\d*)(\.\d+)?$/ }}
          errors={errors}
        />
        <div className='flex w-[95%] mx-auto gap-3 items-center justify-center mt-6'>
          <ButtonRound label='Envíar' className='py-4 font-bold' />
        </div>
        <p className='text-[10px] font-Sintony mt-5 text-center text-sacbeBlue'>
          *Aplica para personas sin SSN disponible pero que pueden proporcionar formas alternas de
          identificación. **Para más información acerca de tasas y tarifas ver el Contrato del
          Titular de la Tarjeta Sacbé Visa™
        </p>
      </form>
    </div>
  );
}

export default MobileForm;
