'use client';

import { FC } from 'react';
import { FormContacts } from '@/components/modules';
import { Social } from '@/components/ui-kit';
import contacts from '@/data/contacts.json';

const Contacts: FC = () => {
  return (
    <section
      className="section pb-[54px] m:pb-[64px] l:pb-[104px] contacts-bg-m m:contacts-bg-t l:contacts-bg-d"
      id="contacts"
      aria-labelledby="contactsSectionTitle"
    >
      <div className="container">
        <div className="mb-9 l:mb-[71px]">
          <h2
            id="contactsSectionTitle"
            className="uppercase text-[40px] font-thin leading-[1.4] tracking-[-1.6px] m:leading-[66px] m:text-[67px] m:tracking-[-2.68px] l:text-[98px] l:tracking-[-3.92px] l:leading-[1.2]"
          >
            {contacts.title}
            <span className="font-medium">{contacts.titleAccent}</span>
          </h2>
        </div>
        <div className="l:flex l:gap-[231px]">
          <div className="m:flex m:gap-[90px] l:flex-col l:gap-[124px] l:ml-[83px] l:w-[311px]">
            <div>
              <div className="flex gap-5 justify-end mb-6 l:mb-16">
                <div className="w-[137px] m:w-[157px] l:w-[176px]">
                  <a
                    href="tel:+380981234567"
                    className="leading-[24px] trans hover:underline focus:underline"
                    aria-label={`Call ${contacts.phone.numbers[0]}`}
                  >
                    {contacts.phone.numbers[0]}
                  </a>
                  <a
                    href="tel:+380731234567"
                    className="leading-[24px] trans hover:underline focus:underline"
                    aria-label={`Call ${contacts.phone.numbers[1]}`}
                  >
                    {contacts.phone.numbers[1]}
                  </a>
                </div>
                <p className="text-[12px] font-extralight leading-[20px] pt-[3px]">
                  {contacts.phone.title}
                </p>
              </div>
              <div className="flex gap-5 justify-end mb-6 m:mb-0">
                <a
                  href={`mailto:${contacts.email.address}`}
                  className="leading-[24px] trans hover:underline focus:underline"
                  aria-label={`Send email to ${contacts.email.address}`}
                >
                  {contacts.email.address}
                </a>
                <p className="text-[12px] font-extralight leading-[20px] pt-[3px] pr-[46px]">
                  {contacts.email.title}
                </p>
              </div>
            </div>
            <Social />
          </div>
          <FormContacts />
        </div>
      </div>
    </section>
  );
};

export default Contacts;
