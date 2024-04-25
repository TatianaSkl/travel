'use client';

import { FC } from 'react';
import { TitleSection } from '@/components/ui-kit';
import career from '@/data/career.json';
import { FormCareer } from '@/components/modules';

const Career: FC = () => {
  return (
    <>
      <section className="section career-bg-m m:career-bg-t l:career-bg-d" id="career">
        <div className="container">
          <div className="m:flex m:justify-between">
            <div className="mb-6 m:mb-3 l:mb-6">
              <TitleSection text={career.title} textAccent={career.titleAccent} />
            </div>
            <p className="w-[179px] ml-auto mb-9 font-extralight leading-[20px] m:w-[221px] m:text-[13px] m:text-justify m:m-0 m:pt-2 l:w-[293px] l:text-[18px] l:leading-[24px] l:pt-4">
              {career.description}
            </p>
          </div>
          <div className="l:flex l:gap-[333px]">
            <p className="uppercase w-[181px] ml-auto text-[30px] font-extralight leading-[1.2] mb-9 pr-10 m:w-[221px] m:ml-0 m:pr-0 m:pl-20 m:mb-14 l:w-[293px] l:pl-[123px] l:text-[36px] l:leading-[39px] l:mb-[45px]">
              {career.question}
            </p>
            <div className="hidden l:block l:w-[234px] l:leading-[24px] l:font-extralight l:text-[18px]">
              <p>{career.text[0]}</p>
              <p>{career.text[1]}</p>
            </div>
          </div>
          <div className="m:flex m:gap-5 l:gap-6">
            <ul className="w-[181px] text-right flex flex-col gap-4 m:w-[221px] m:gap-6 l:w-[602px]">
              {career.info.map(({ id, title, text }) => (
                <li key={id} className="l:flex l:gap-6">
                  <p className="leading-[20px] mb-2 l:leading-[24px] l:mb-0 l:w-[293px]">{title}</p>
                  <p className="text-[12px] font-extralight leading-[20px] l:leading-[24px] l:w-[285px] l:text-left">
                    {text}
                  </p>
                </li>
              ))}
            </ul>
            <div className="md:hidden">
              <div className="m:w-[170px] m:text-[13px] m:font-extralight m:leading-[20px] m:mb-8 l:hidden">
                <p>{career.text[0]}</p>
                <p>{career.text[1]}</p>
              </div>
              <FormCareer />
            </div>
          </div>
        </div>
      </section>
      <section className="section career-bg-m m:hidden">
        <div className="container">
          <div className="w-[179px] mb-6 ml-auto font-extralight leading-[20px]">
            <p>{career.text[0]}</p>
            <p>{career.text[1]}</p>
          </div>
          <FormCareer />
        </div>
      </section>
    </>
  );
};

export default Career;
