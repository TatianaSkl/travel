import { FC } from 'react';
import Image from 'next/image';

const Logo: FC = () => {
  return (
    <a href="/" title="Go to homepage" className="trans hover:scale-125 focus:scale-125">
      <Image
        src="/icons/logo.svg"
        alt="logo company"
        aria-label="logo company"
        width={59}
        height={21}
        className="mb-0.5"
      />
      <p className="font-['Karantina'] tracking-[2.59px] m:text-[14px] l:text-[14px]">CarpTravel</p>
    </a>
  );
};

export default Logo;
