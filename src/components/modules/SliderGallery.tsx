import { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import gallery from '@/data/gallery.json';

const SliderGallery: FC = () => {
  return (
    <div className="relative">
      <Swiper
        className="h-[609px] m:h-[306px] l:h-[437px]"
        modules={[Navigation]}
        wrapperTag="ul"
        loop={true}
        direction="vertical"
        centeredSlides={true}
        grabCursor={true}
        slidesPerView={3}
        spaceBetween={24}
        navigation={{
          nextEl: '.btn-next',
          prevEl: '.btn-prev',
        }}
        breakpoints={{
          768: {
            direction: 'horizontal',
          },
        }}
      >
        {gallery.slider.map(({ id, src, alt }) => (
          <SwiperSlide key={id} tag="li" className="gallery-slider">
            <Image
              src={src}
              alt={alt}
              sizes="(min-width: 1280px) 606px, (min-width: 768px) 415px, 440px"
              fill
              className="object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <button
        type="button"
        aria-label="button back"
        className="btn-prev md:hidden absolute z-10 left-[37px] bottom-[17px] text-[33px] font-thin leading-[1.2] l:bottom-0 l:left-[228px]"
      >
        {gallery.btnBack}
      </button>
      <button
        type="button"
        aria-label="button next"
        className="btn-next md:hidden absolute z-10 right-[37px] bottom-[17px] text-[33px] font-thin leading-[1.2] l:bottom-0 l:right-[228px]"
      >
        {gallery.btnNext}
      </button>
    </div>
  );
};

export default SliderGallery;
