'use client';
import InputCross from './Input/InputSacbe';
import ButtonRound from './ButtonRound';
import { useForm, SubmitHandler } from 'react-hook-form';
import SectionFooter from './SectionFooter';
import toast from 'react-hot-toast';
import ButtonDownload from './ButtonDownload';
import { useTranslations } from 'next-intl';
import { postData } from '@/utils/helperts';
import { useState } from 'react';
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

  const [isLoading, setIsLoading] = useState(false);
  const onSubmit: SubmitHandler<HeroInputs> = async (data) => {
    try {
      setIsLoading(true);
      await postData({ url: '/api/sheet', data: data });
      setTimeout(() => {
        toast.success('Formulario enviado con éxito');
      }, 3000);
    } catch (error) {
      toast.error('Internal Error');
    } finally {
      setTimeout(() => {
        setIsLoading(false);
      }, 3000);
    }
  };
  const t = useTranslations('Hero');

  return (
    <div className=' h-full pt-14  lg:pb-footer-padding w-ful  flex flex-col lg:flex-row items-center justify-center pb-5 '>
      {/* Texto  DESKTOP*/}
      <div className='hidden lg:flex items-center justify-center  h-full w-full  '>
        <div className=' relative max-w-[39rem] px-8  mx-auto flex  flex-col gap-3 2xl:gap-5   2xl:px-0'>
          {/* Title */}
          <h1 className='text-sacbeOrange first-line:text-sacbeBlue text-[70px] lg:text-6xl  lg:leading-[45px] xl:text-7xl  xl:leading-[55px]  font-bold  '>
            {t('title.green')} <span className=''>{t('title.orange')}</span>
          </h1>
          {/* List */}
          <ul className='list-disc text-sacbeBlue text-2xl  2xl:text-3xl flex flex-col ml-7 mb-2'>
            <li className='leading-[29px]'>{t('list.primera')}</li>
            <li className='leading-[29px]'>{t('list.segunda')}</li>
            <li className='leading-[29px]'>{t('list.tercera')}</li>
          </ul>
          {/* Form */}
          <form
            action=''
            onSubmit={handleSubmit(onSubmit)}
            className='flex flex-col gap-3 px-5 xl:px-0'
          >
            <div className=' flex gap-3 w-[100%]'>
              <InputCross
                placeholder={t('form.name')}
                id='name'
                register={register}
                registerOptions={{ required: true }}
                errors={errors}
              />
              <InputCross
                placeholder={t('form.phone')}
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
            <div className=' flex gap-3 w-[100%]'>
              <InputCross
                placeholder={t('form.email')}
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
                placeholder={t('form.postalCode')}
                id='postalCode'
                register={register}
                type='number'
                registerOptions={{ required: true, pattern: /^(0|[1-9]\d*)(\.\d+)?$/ }}
                errors={errors}
              />
            </div>
            <div className='flex w-[100%] gap-3 items-center justify-center mt-4 mb-2'>
              <ButtonRound
                diabled={isLoading}
                label={t('form.submit')}
                className='py-4 font-bold'
              />
              <div className='w-full text-2xl xl:text-3xl font-Tungsten text-sacbeOrangeDarker '>
                <p className='max-w-[250px] leading-[23px] '>{t('form.note')}</p>
              </div>
            </div>
            <div className='absolute top-[97%]'>
              <p className='lg:leading-[14px] lg:text-xs md:sm max-w-[500px] font-Sintony mt-5 text-sacbeBlue'>
                {t('disclaimer.text')}
              </p>
            </div>
          </form>
        </div>
      </div>
      {/*  */}
      <div className=' lg:flex items-center justify-center   h-[50vh] lg:h-full w-full lg:w-2/3 xl:w-full bg-hero-img  bg-no-repeat bg-top  bg-cover'></div>

      {/* Mobile */}
      <div className='lg:hidden flex  gap-3  px-3 pt-3 w-full  flex-col items-center justify-center'>
        <h1 className=' mx-auto text-5xl leading-[45px] font-bold text-sacbeOrange text-center '>
          <span className='text-sacbeBlue'>{t('title.green')}</span> {t('title.orange')}
        </h1>
        <ul className=' text-sacbeBlue text-2xl   flex flex-col gap-0  text-center'>
          <li className='leading-[29px]'>&#xB7; {t('list.primera')} &#xB7;</li>
          <li className='leading-[29px]'>&#xB7; {t('list.segunda')} &#xB7;</li>
          <li className='leading-[29px]'>&#xB7; {t('list.tercera')} &#xB7;</li>
        </ul>
        <ButtonDownload label={t('download.label')} />

        <p className='text-[8px] leading-[8px] font-Sintony max-w-[18rem]  text-center pb-1 text-sacbeBlue'>
          {t('disclaimer.text')}
        </p>
      </div>
      {/* FOOTER */}
      <SectionFooter variant='blue' textColor='beige'>
        {t('footer.primero')} <b className='text-sacbeOrangeDarker '>{t('footer.segundo')}</b>
      </SectionFooter>
    </div>
  );
}

export default HeroSection;
