'use client';
import InputCross from '../InputCross';
import ButtonRound from '../ButtonRound';
import { useForm, SubmitHandler } from 'react-hook-form';
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
    alert(
      `Name: ${data.name}, Phone: ${data.phone}, Email: ${data.email}, Postal: ${data.postalCode}`,
    );
  };
  return (
    <section id='hero-section' className='h-screen relative z-[0]'>
      <div className=' h-full pt-14 pb-0 lg:pb-28 w-ful  flex flex-col-reverse lg:flex-row items-center justify-center'>
        {/* Texto */}
        <div className='flex items-center justify-center bg-sacbeBeige h-full w-full'>
          <div className='relative max-w-[35rem] flex flex-col gap-3 2xl:gap-5  px-2 2xl:px-0'>
            {/* Title */}
            <h1 className='text-sacbeBlue text-[70px] 2xl:text-[80px] font-bold leading-[55px] 2xl:leading-[60px]'>
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
                  type='text'
                  registerOptions={{
                    required: true,
                    pattern: /^(0|[1-9]\d*)(\.\d+)?$/,
                  }}
                  errors={errors}
                />
              </div>
              <div className='w-full flex gap-3'>
                <InputCross
                  placeholder='EMAIL'
                  id='email'
                  register={register}
                  type='email'
                  registerOptions={{ required: true }}
                  errors={errors}
                />
                <InputCross
                  placeholder='CODIGO POSTAL'
                  id='postalCode'
                  register={register}
                  type='text'
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
                <p className='text-xs md:sm max-w-md font-Sintony mt-5'>
                  *Aplica para personas sin SSN disponible pero que pueden proporcionar formas
                  alternas de identificación. **Para más información acerca de tasas y tarifas ver
                  el Contrato del Titular de la Tarjeta Sacbé Visa™
                </p>
              </div>
            </form>
          </div>
        </div>
        {/*  */}
        <div className='hidden lg:flex items-center justify-center   h-full w-full bg-hero-img  bg-no-repeat bg-top  bg-cover'></div>

        {/* FOOTER */}
        <div className='hidden absolute  bg-sacbeBlue h-28 bottom-0 w-full lg:flex items-center justify-center'>
          <h1 className='text-sacbeBeige text-7xl'>
            A JOINT EFFORT WITH{' '}
            <span className='text-sacbeOrangeDarker font-bold'>CUTTING-EDGE TECHNOLOGY</span>
          </h1>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
