'use client';

import Image from 'next/image';

type Props = {
  children: React.ReactNode;
  image: string;
};

function BenefitsCard({ children, image }: Props) {
  return (
    <div className='bg-sacbeBeige rounded-md hover:scale-110 hover:shadow-md   transition overflow-hidden'>
      <div className='flex  transition-all  h-full flex-col max-w-[275px] '>
        {/* Image */}
        <div className='h-1/2   '>
          <Image
            className=' object-cover transition-all  w-full h-full'
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
