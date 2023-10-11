import React from 'react';

type Props = {
  children: React.ReactNode;
};

function SectionLayout({ children }: Props) {
  return (
    <div className=' h-full pt-16 lg:pt-14  lg:pb-footer-padding w-ful  flex  items-center justify-center'>
      {children}
    </div>
  );
}

export default SectionLayout;
