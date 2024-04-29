'use client';

import { FC, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade } from 'swiper/modules';
import { TitleSection } from '@/components/ui-kit';
import 'swiper/css/effect-fade';
import services from '@/data/services.json';
import Image from 'next/image';
import ServicesList from '../ServicesList';

const SliderServices: FC = () => {
  const swiperRef = useRef<any>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const handleSlideChange = (index: number): void => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideTo(index);
    }
    setActiveIndex(index);
  };

  return (
    <Swiper effect={'fade'} modules={[EffectFade]} ref={swiperRef}>
      {services.slider.map(({ id, url, src, alt, date, slogan, description }) => (
        <SwiperSlide
          key={id}
          style={{
            background: `linear-gradient(rgba(2, 15, 8, 0.5), rgba(2, 15, 8, 0.5)),url(${url}) lightgray 80% / cover no-repeat`,
          }}
        >
          <div className="section container">
            <div className="m:flex m:justify-between l:justify-normal l:gap-[162px]">
              <div className="mb-6 m:mb-9 l:mb-6">
                <TitleSection text={services.title} textAccent={services.titleAccent} />
              </div>
              <div className="flex text-[43px] font-thin leading-[1.2] justify-end mb-4 m:mb-0 m:text-[67px] m:leading-[78px] m:pr-[54px] l:text-[98px]">
                <p>{date[0]}</p>
                <p className="text-white/20">{date[1]}</p>
              </div>
            </div>
            <div className="m:flex m:justify-between l:justify-normal l:gap-[20px]">
              <Image
                src={src}
                width={280}
                height={213}
                alt={alt}
                className="mb-3 mx-auto w-full h-full object-cover m:mx-0 m:mb-0 m:w-[463px] m:h-[370px] l:w-[607px] l:h-[429px]"
              />
              <div className="l:w-[605px]">
                <div className="m:flex m:flex-col-reverse m:gap-1 l:flex-row-reverse l:justify-between">
                  <p className="text-right text-[12px] font-extralight leading-[24px] tracking-[2.4px] mb-6 m:text-left m:mb-[34px] l:hidden">
                    {slogan}
                  </p>
                  <ServicesList
                    handleSlideChange={handleSlideChange}
                    activeIndex={activeIndex}
                    slogan={slogan}
                  />
                </div>
                <p className="font-extralight leading-[20px] mx-auto h-[120px] w-[280px] flex items-end m:w-[221px] m:text-[13px] m:text-justify l:text-[18px] l:leading-[24px] l:h-[168px] l:w-[293px] l:mx-0 l:ml-auto">
                  {description}
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SliderServices;
