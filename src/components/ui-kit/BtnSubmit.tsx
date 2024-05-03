import { FC } from 'react';
import { BtnProps } from '@/types';

const BtnSubmit: FC<BtnProps> = ({ text }) => {
  return (
    <button
      type="submit"
      aria-label="submit form"
      className="flex uppercase px-[1px] text-[30px] font-medium leading-[1.2] w-[84px] h-[52px] ml-auto items-end m:h-[51px] m:w-[88px] m:px-[3px] m:items-start l:h-[63px] l:text-[32px] l:w-[87px] l:px-0 trans hover:underline focus:underline"
    >
      {text}
    </button>
  );
};

export default BtnSubmit;
