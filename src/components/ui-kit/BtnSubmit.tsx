import { FC } from 'react';
import { BtnProps } from '@/types';

const BtnSubmit: FC<BtnProps> = ({ text }) => {
  return (
    <button
      type="submit"
      aria-label="submit form"
      className="text-[30px] font-medium leading-[1.2] w-full text-right l:text-[32px] trans hover:scale-105 focus:scale-105"
    >
      {text}
    </button>
  );
};

export default BtnSubmit;
