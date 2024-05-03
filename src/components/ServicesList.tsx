import { FC } from 'react';
import { ServicesListProps } from '@/types';
import services from '@/data/services.json';

const ServicesList: FC<ServicesListProps> = ({ handleSlideChange, activeIndex, slogan }) => {
  return (
    <ul role="navigation" className="flex flex-col gap-4 mb-9 m:mb-6 l:gap-6">
      {services.listText.map(({ id, title }, index) => (
        <li
          key={id}
          className={`font-extralight text-[20px] leading-[17px] relative m:text-[22px] m:leading-[18px] l:text-[28px] l:leading-[24px] l:flex l:justify-between l:w-[605px] ${
            activeIndex === index
              ? 'services-btn text-white font-medium pl-[17px]'
              : 'text-white/50 hover:pl-2 hover:text-white transition-all duration-500'
          }`}
        >
          <button
            type="button"
            aria-label={`go to page about ${title}`}
            dangerouslySetInnerHTML={{ __html: title }}
            className="uppercase text-left"
            onClick={() => handleSlideChange(index)}
            tabIndex={activeIndex === index ? 0 : -1}
          />
          {activeIndex === index && (
            <p className="ml:hidden text-white text-[12px] font-extralight leading-[24px] tracking-[2.4px] l:w-[293px]">
              {slogan}
            </p>
          )}
        </li>
      ))}
    </ul>
  );
};

export default ServicesList;
