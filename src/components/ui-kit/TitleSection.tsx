import { FC } from 'react';
import { headingType } from '@/types';

const TitleSection: FC<headingType> = ({ text, textAccent }) => {
  return (
    <h2 className="title">
      {text}
      <span className="titleAccent">{textAccent}</span>
    </h2>
  );
};

export default TitleSection;
