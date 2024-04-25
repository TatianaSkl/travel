import { FC } from 'react';
import { HeadingProps } from '@/types';

const TitleSection: FC<HeadingProps> = ({ text, textAccent }) => {
  return (
    <h2 className="uppercase text-[40px] font-thin leading-[1.4] tracking-[-1.6px] m:leading-[1.2] m:text-[67px] m:tracking-[-2.68px] l:text-[98px] l:tracking-[-3.92px]">
      {text}
      <span className="font-medium">{textAccent}</span>
    </h2>
  );
};

export default TitleSection;
