'use client';

import { FC } from 'react';
import { Link } from 'react-scroll';
import hero from '@/data/hero.json';

const Hero: FC = () => {
  return (
    <section className="pt-[105px] pb-14 hero-bg-m m:hero-bg-t m:pt-[122px] m:pb-16 l:hero-bg-d l:pt-[130px] l:pb-[104px]">
      <div className="container">
        <div className="text-right mb-6 m:hidden">
          <p className="uppercase text-[37px] font-thin leading-[1.2] tracking-[1.665px]">
            <span className="font-medium">{hero.slogan[0]}</span>
            {hero.slogan[1]}
          </p>
          <p className="uppercase text-[12px] font-light leading-[1.2] tracking-[9.48px]">
            {hero.slogan[2]}
          </p>
        </div>
        <div className="m:flex m:justify-between">
          <div>
            <h1 className="uppercase text-[40px] font-thin leading-[1.4] tracking-[-1.6px] m:leading-[1.2] m:text-[67px] m:tracking-[-2.68px] l:text-[98px] l:tracking-[-3.92px] mb-6 w-[280px] m:mb-[68px] m:w-[426px] l:w-[646px] l:mb-[148px]">
              <span className="font-medium">{hero.titleAccent}</span>
              {hero.title}
            </h1>
            <p className="w-[157px] text-[10px] font-extralight leading-[16px] mb-6 m:w-[263px] m:mb-0 m:text-[14px] m:tracking-[1.26px] l:text-[16px] l:leading-[24px] l:tracking-[1.44px] l:w-[608px]">
              {hero.text}
            </p>
          </div>
          <div>
            <div className="md:hidden m:ml-auto m:mb-14 m:w-[230px] l:w-[325px] l:mb-[181px]">
              <p className="uppercase font-thin leading-[1.2] m:text-[67px] m:tracking-[8.71px] l:text-[98px]">
                <span className="font-medium">{hero.slogan[0]}</span>
                {hero.slogan[1]}
              </p>
              <p className="uppercase font-light leading-[1.2] m:text-[14px] m:tracking-[25.9px] l:text-[16px] l:tracking-[36.48px]">
                {hero.slogan[2]}
              </p>
            </div>
            <div className="m:w-[230px] m:ml-auto l:w-[294px]">
              <p className="font-extralight leading-[20px] text-justify mb-6 m:mb-7 l:leading-[24px]">
                {hero.description}
              </p>
            </div>
            <div className="cursor-pointer w-[280px] text-center bg-white/10 relative p-0.5 mx-auto hover:bg-white/20 focus:bg-white/20 trans m:w-[230px] m:bg-white/[.05] m:p-0 m:ml-auto m:mr-0 l:w-[293px] l:p-3">
              <Link
                to="contacts"
                spy={true}
                smooth={true}
                duration={500}
                className="hero-btn text-[18px] leading-[48px] font-bold l:text-[32px]"
                aria-label="navigate to Contacts section"
              >
                {hero.textBtn}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
