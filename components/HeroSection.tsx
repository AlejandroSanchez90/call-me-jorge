'use client';
import InputCross from './Input/InputSacbe';
import ButtonRound from './ButtonRound';
import { useForm, SubmitHandler } from 'react-hook-form';
import SectionFooter from './SectionFooter';
import toast from 'react-hot-toast';
import ButtonDownload from './ButtonDownload';
type Props = {};
export type HeroInputs = {
  name: string;
  phone: string;
  email: string;
  postalCode: string;
};
function HeroSection({}: Props) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<HeroInputs>();
  const onSubmit: SubmitHandler<HeroInputs> = (data) => {
    // alert(
    //   `FORM ES VALIDO! Name: ${data.name}, Phone: ${data.phone}, Email: ${data.email}, Postal: ${data.postalCode}`,
    // );
    toast.success('Formulario enviado con éxito');
  };
  return (
    <div className=' h-full pt-14  lg:pb-footer-padding w-ful  flex flex-col lg:flex-row items-center justify-center pb-5 '>
      {/* Texto  DESKTOP*/}
      <div className='hidden lg:flex items-center justify-center bg-sacbeBeige h-full w-full'>
        <div className='relative max-w-[45rem] flex flex-col gap-3 2xl:gap-5  px-2 2xl:px-0'>
          {/* Title */}
          <h1 className='text-sacbeBlue  text-[70px] lg:text-8xl lg:leading-[85px] font-bold  '>
            SI TE RECOMENDÓ JORGE <span className='text-sacbeOrange'>ERES DE LOS NUESTROS</span>
          </h1>
          {/* List */}
          <ul className='list-disc text-sacbeBlue text-2xl  2xl:text-4xl flex flex-col ml-7 '>
            <li className='leading-[29px]'>ABRE UNA CUENTA SACBÉ EN USA SIN SSN*</li>
            <li className='leading-[29px]'>RECIBE UNA TARJETA DE DÉBITO PREPAGADA VISA™</li>
            <li className='leading-[29px]'>ENVIA DINERO AL MEJOR PRECIO DEL MERCADO**</li>
          </ul>
          {/* Form */}
          <form
            action=''
            onSubmit={handleSubmit(onSubmit)}
            className='flex flex-col gap-3 px-5 xl:px-0'
          >
            <div className='w-full flex gap-3'>
              <InputCross
                placeholder='NAME'
                id='name'
                register={register}
                registerOptions={{ required: true }}
                errors={errors}
              />
              <InputCross
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
            </div>
            <div className='w-full flex gap-3'>
              <InputCross
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
              <InputCross
                placeholder='CODIGO POSTAL'
                id='postalCode'
                register={register}
                type='number'
                registerOptions={{ required: true, pattern: /^(0|[1-9]\d*)(\.\d+)?$/ }}
                errors={errors}
              />
            </div>
            <div className='flex w-full gap-3 items-center justify-center'>
              <ButtonRound label='Envíar' className='py-4 font-bold' />
              <div className='w-full text-2xl xl:text-3xl font-Tungsten text-sacbeOrangeDarker '>
                <p className='max-w-[250px] leading-[23px] '>
                  DÉJANOS TUS DATOS PARA RECIBIR UN LINK DE DESCARGA
                </p>
              </div>
            </div>
            <div className='absolute top-[100%]'>
              <p className='lg:leading-[14px] lg:text-xs md:sm max-w-md font-Sintony mt-5 text-sacbeBlue'>
                *Aplica para personas sin SSN disponible pero que pueden proporcionar formas
                alternas de identificación. **Para más información acerca de tasas y tarifas ver el
                Contrato del Titular de la Tarjeta Sacbé Visa™
              </p>
            </div>
          </form>
        </div>
      </div>
      {/*  */}
      <div className=' lg:flex items-center justify-center   h-[50vh] lg:h-full w-full bg-hero-img  bg-no-repeat bg-top  bg-cover'></div>

      {/* Mobile */}
      <div className='lg:hidden flex  gap-3  px-3 pt-3 w-full  flex-col items-center justify-center'>
        <h1 className=' mx-auto text-5xl leading-[45px] font-bold text-sacbeOrange text-center '>
          <span className='text-sacbeBlue'>SI TE RECOMENDÓ JORGE</span> ERES DE LOS NUESTROS
        </h1>
        <ul className=' text-sacbeBlue text-2xl   flex flex-col gap-0  text-center'>
          <li className='leading-[29px]'>&#xB7; ABRE UNA CUENTA SACBÉ EN USA SIN SSN* &#xB7;</li>
          <li className='leading-[29px]'>
            &#xB7; RECIBE UNA TARJETA DE DÉBITO PREPAGADA VISA™ &#xB7;
          </li>
          <li className='leading-[29px]'>
            &#xB7; ENVIA DINERO AL MEJOR PRECIO DEL MERCADO** &#xB7;
          </li>
        </ul>
        <ButtonDownload label='Descargar' />

        <p className='text-[8px] leading-[8px] font-Sintony max-w-[18rem]  text-center pb-1 text-sacbeBlue'>
          *Aplica para personas sin SSN disponible pero que pueden proporcionar formas alternas de
          identificación. **Para más información acerca de tasas y tarifas ver el Contrato del
          Titular de la Tarjeta Sacbé Visa™
        </p>
      </div>
      {/* FOOTER */}
      <SectionFooter variant='blue' textColor='beige'>
        UN ESFUERZO CONJUNTO CON <b className='text-sacbeOrangeDarker '>TECNOLOGÍA DE VANGUARDIA</b>
      </SectionFooter>
    </div>
  );
}

export default HeroSection;
