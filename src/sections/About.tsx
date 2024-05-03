'use client';

import { FC } from 'react';
import { TitleSection } from '@/components/ui-kit';
import about from '@/data/about.json';

const About: FC = () => {
  return (
    <section
      aria-labelledby="aboutSectionTitle"
      className="section about-bg-m m:about-bg-t l:about-bg-d"
      id="about"
    >
      <div className="container">
        <div className="m:flex m:justify-between l:justify-start l:mb-[72px]">
          <div className="mb-2 m:mb-0">
            <TitleSection
              id="aboutSectionTitle"
              text={about.title}
              textAccent={about.titleAccent}
            />
          </div>
          <div className="leading-5 font-extralight w-[180px] m:w-[220px] l:leading-6 l:w-[292px] l:ml-6">
            <p className="mb-5 m:mb-4 m:pt-2.5 l:pt-4 l:mb-6">
              <span className="font-normal">{about.textAccent1}</span>
              {about.text1}
            </p>
            <p className="mb-10 m:mb-0">
              <span className="font-normal">{about.textAccent2}</span>
              {about.text2}
            </p>
          </div>
        </div>
        <div className="l:flex l:flex-row-reverse l:justify-between l:items-end">
          <div className="leading-5 text-right m:text-left m:mt-[-60px] l:mt-0 l:leading-6">
            <p className="uppercase pr-9 m:pr-0">{about.slogan1}</p>
            <p className="uppercase m:pl-10 l:pl-0 l:text-right">{about.slogan2}</p>
            <p className="font-extralight mb-10 tracking-[-0.14px] m:mb-16 m:tracking-[0.32px] l:m:mb-0 l:tracking-[2.16px]">
              {about.slogan3}
            </p>
          </div>
          <div className="m:w-[463px] m:ml-auto l:ml-0 l:w-[605px] l:leading-6">
            <p className="text-justify leading-5 font-extralight">
              <span className="font-normal">{about.textAccent3}</span>
              {about.text3}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
