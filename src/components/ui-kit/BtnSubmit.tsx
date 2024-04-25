import { FC } from 'react';
import { BtnProps } from '@/types';

const BtnSubmit: FC<BtnProps> = ({ text }) => {
  return (
    <button
      type="submit"
      aria-label="Submit form"
      className="text-[30px] font-medium leading-[1.2] w-full text-right l:text-[32px] hover:scale-y-125 focus:scale-y-125 trans"
    >
      {text}
    </button>
  );
};

export default BtnSubmit;
