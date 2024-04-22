import { FC } from 'react';
import { textType } from '@/types';

const Text: FC<textType> = ({ text }) => {
  return <p>{text}</p>;
};

export default Text;
