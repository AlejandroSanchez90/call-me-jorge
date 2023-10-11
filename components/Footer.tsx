'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

type Props = {};

type Languages = 'Español' | 'English';

function Footer({}: Props) {
  const [language, setLanguage] = useState<Languages>('Español');

  const handleLanguage = () => {
    if (language === 'Español') {
      setLanguage('English');
    } else {
      setLanguage('Español');
    }
  };
  return (
    <div className='bg-sacbeBlue font-Sintony'>
      <div className='flex flex-col max-w-[1440px] p-10 mx-auto gap-12'>
        {/* LINKS */}
        <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-6'>
          {/* Logo */}
          <div className=''>
            <Image
              width={200}
              height={100}
              src={'/imgs/footer/logo-footer.png'}
              alt='logo sacbe'
              className='object-cover w-[150px] lg:w-[200px]'
            />
          </div>
          {/* Términos de uso */}
          <div className='w-60'>
            <h3 className='text-sacbeOrangeDarker text-2xl font-bold mb-3'>Términos de uso</h3>
            <ul className='flex flex-col gap-3 text-sacbeBeige text-sm'>
              <li>
                <Link href='#Política'>Política de Privacidad</Link>
              </li>
              <li>
                <Link href='#Política'>Contrato de titular</Link>
              </li>
              <li>
                <Link href='#Política'>Tarifas y cargos</Link>
              </li>
              <li>
                <Link href='#Política'>Política de Cancelaciones y Reembolsos</Link>
              </li>
              <li>
                <Link href='#Política'>Renuncia de Responsabilidad y Notificaciones</Link>
              </li>
            </ul>
          </div>
          {/* Servicio al cliente */}
          <div className='w-60'>
            <h3 className='text-sacbeOrangeDarker text-2xl font-bold mb-3'>Servicio al Cliente</h3>
            <ul className='flex flex-col gap-3 text-sacbeBeige text-sm'>
              <li>
                <Link href='#Política'>Preguntas Frecuentes</Link>
              </li>
              <li>
                <Link href='#Política'>Contacto</Link>
              </li>
              <li>
                <Link href='#Política' className='font-bold'>
                  support@sacbepayments.com
                </Link>
              </li>
              <li>
                <Link href='#Política'>
                  {' '}
                  <span className='font-bold'>+1 928 237 9808</span> <br /> 9am - 9pm EST / 365 días
                </Link>
              </li>
            </ul>
          </div>
          {/* Nosotros */}
          <div className='w-60'>
            <h3 className='text-sacbeOrangeDarker text-2xl font-bold mb-3'>Nosotros</h3>
            <ul className='flex flex-col gap-3 text-sacbeBeige text-sm'>
              <li>
                <Link href='#Política'>Quienes somos</Link>
              </li>
              <li>
                <Link href='#Política'>Facebook</Link>
              </li>
              <li>
                <Link href='#Política'>YouTube</Link>
              </li>
              <li>
                <Link href='#Política'>
                  3480 Main Highway, <br /> Suite 400,
                  <br /> Miami, FL 33133
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <hr className='border-sacbeOrangeDarker' />
        {/* LEGALS */}
        <div className='flex flex-col gap-10 text-sacbeBeige text-[8px] lg:text-[xs] whitespace-pre-wrap'>
          <div className='flex justify-between items-center'>
            <div className=''>
              <Image
                width={150}
                height={75}
                src={'/imgs/footer/logo-footer.png'}
                alt='logo sacbe'
                className='object-cover w-[100px] lg:w-[150px]'
              />
            </div>
            <div className=''>
              <button
                onClick={handleLanguage}
                className='text-sacbeBlue bg-sacbeBeige py-1 px-2 rounded-full font-bold text-[11px] lg:text-xs'
              >
                {language}
              </button>
            </div>
          </div>
          {/* TEXT */}
          <div className='flex flex-col gap-5 text-xs break-all'>
            <p>
              POR ACEPTAR O UTILIZAR ESTA TARJETA, USTED ACEPTA ESTAR OBLIGADO POR LOS TÉRMINOS Y
              CONDICIONES CONTENIDAS EN ESTE ACUERDO DEL TITULAR DE LA TARJETA Y PROGRAMA DE
              TARIFAS, SI LO HUBIERA. La Tarjeta Prepago Visa® Sacbé es emitida por Metropolitan
              Commercial Bank (Miembro FDIC) conforme con una licencia de Visa U.S.A. Inc.
              “Metropolitan Commercial Bank” y ‘Metropolitan” son marcas registradas de Metropolitan
              Commercial Bank ©2014.
            </p>
            <p className='text-sacbeOrange text-center'>
              PARA SERVICIO AL CLIENTE LLAMAR A Sacbé AL +1 928 237 9808. 9AM - 9PM EST / 365 días.
            </p>

            <p>
              <span className='text-sacbeOrangeDarker'>
                INFORMACION IMPORTANTE SOBRE LOS PROCEDIMIENTOS PARA ABRIR UNA CUENTA NUEVA DE
                TARJETA:
              </span>{' '}
              Para ayudar al gobierno a luchar contra el financiamiento de actividades de terrorismo
              y lavado de dinero, la ley federal requiere que todas las instituciones financieras y
              sus administradores de programas o proveedores de servicios externos obtener,
              verificar y registrar información que identifique a cada persona que abre una cuenta
              de Tarjeta.{' '}
              <span className='text-sacbeOrangeDarker'>LO QUE ESTO SIGNIFICA PARA USTED:</span>{' '}
              Cuando abra una Cuenta de Tarjeta, le pediremos que proporcione su nombre, dirección,
              fecha de nacimiento u otra información que nos permita identificarlo. También podemos
              pedirle ver su licencia de conducir u otros documentos de identificación.
            </p>

            <p>
              <span className='text-sacbeOrangeDarker'>DIVULGACIÓN PARA CUENTAS PREPAGADAS:</span>{' '}
              Sus fondos se retendrán o transferirán a Metropolitan Commercial Bank, una institución
              asegurada por la FDIC. Mientras estén allí, sus fondos están asegurados hasta $250,000
              por la FDIC en caso de que Metropolitan Commercial Bank quiebre y si se cumplen los
              requisitos específicos de seguro de depósito y su tarjeta está registrada. Consulte{' '}
              <a
                href='fdic.gov/deposit/deposits/prepaid_esp.html'
                className='text-sacbeOrangeDarker'
              >
                fdic.gov/deposit/deposits/prepaid_esp.html
              </a>{' '}
              para obtener detalles. El seguro de la FDIC no protege sus fondos en caso de que Sacbé
              quiebre o del riesgo de robo o fraude.
            </p>
            <p>
              Una vez activada la tarjeta, puede depositar fondos a su cuenta de Tarjeta Prepagada
              Visa® Sacbé (llamado “carga de valor” o “carga”) en cualquier momento mediante el uso
              de una tarjeta de débito de los Estados Unidos, un depósito directo, o mediante
              transferencias de pagos domiciliados (ACH por las siglas en inglés de Automated
              Clearing House). También puede cargar su tarjeta con dinero en efectivo en las
              ubicaciones de recarga de Green Dot participantes.
            </p>
            <p>
              Las compras realizadas con su Tarjeta Prepago Visa® Sacbé que no estén autorizadas por
              usted pueden estar protegidas por la Política de Responsabilidad Cero de Visa® (Para
              más detalles por favor ver{' '}
              <span className='text-sacbeOrangeDarker'>
                El contrato al titular de la Tarjeta Débito Prepago Visa® Sacbé
              </span>{' '}
              ). Esto significa que usted no es responsable de ninguna compra no autorizada, siempre
              y cuando nos notifique de inmediato. La Política de responsabilidad cero de Visa® no
              se aplica a las transacciones en cajeros automáticos fuera de las redes de Visa® y
              PLUS ni a las transacciones realizadas con un PIN (Número de identificación personal)
              que no son procesadas por Visa®. Sujeto a actualizaciones por parte de Visa®. Se
              pueden aplicar ciertas limitaciones. Consulte su Acuerdo del titular de la tarjeta
              prepagada Visa® Sacbé para obtener más detalles.
            </p>
            <p className='text-sacbeOrangeDarker'>2023© Copyright Sacbé</p>
          </div>
        </div>
        {/* Image */}
        <div
          className='lg:flex justify-center items-center hidden
        '
        >
          {' '}
          <Image
            width={300}
            height={300}
            src={'/imgs/footer/img-footer.png'}
            alt='logo sacbe'
            className='object-cover pt-[10%]'
          />
        </div>
        <div className='w-full '></div>
      </div>
    </div>
  );
}

export default Footer;
