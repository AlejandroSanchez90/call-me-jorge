'use client';

import Image from 'next/image';

type Props = {
  children: React.ReactNode;
  image: string;
};

function BenefitsCard({ children, image }: Props) {
  return (
    <div className='bg-sacbeBeige rounded-md overflow-hidden'>
      <div className='flex group transition-all  h-full flex-col max-w-[240px]'>
        {/* Image */}
        <div className='h-1/2   overflow-hidden'>
          <Image
            className=' object-cover transition-all group-hover:scale-110 w-full h-full'
            width={250}
            height={250}
            src={image}
            alt='cards'
          />
        </div>
        {/* Content */}
        <div
          className=' p-4 h-1/2 text-sacbeBlue flex flex-col gap-3
        justify-start '
        >
          {children}
        </div>
      </div>
    </div>
  );
}

export default BenefitsCard;
