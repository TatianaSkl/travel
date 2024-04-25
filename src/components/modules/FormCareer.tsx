import { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { BtnSubmit } from '../ui-kit';
import career from '@/data/career.json';
import { CareerForm } from '@/types';

const FormCareer: FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CareerForm>();

  const submit: SubmitHandler<CareerForm> = () => {
    toast.success('Your data has been sent successfully!');
    reset();
  };

  return (
    <form onSubmit={handleSubmit(submit)} className="w-[280px] mx-auto">
      <div className="m:flex m:gap-5 l:gap-6">
        <div className="flex flex-col gap-4 mb-4 m:mb-[9px] l:gap-6 l:mb-6">
          <div className={`flex flex-col gap-1 relative ${errors.fullName ? 'text-red' : ''}`}>
            <label htmlFor="fullName" className="label-form">
              {career.labels.fullName}
            </label>
            <input
              id="fullName"
              type="text"
              placeholder={career.placeholder.fullName}
              {...register('fullName', {
                required: true,
                pattern: {
                  value: /^[a-zA-Zа-яА-Я]+(?:\s+[a-zA-Zа-яА-Я]+)+$/,
                  message: 'Incorrect name',
                },
              })}
              className={`input-form pl-2 l:py-0.5 ${errors.fullName ? 'text-red' : ''}`}
            />
            {errors.fullName && (
              <span className="error absolute bottom-[-22px] right-0 text-red text-[12px] font-extralight leading-[24px] tracking-[2.4px]">
                {errors.fullName.message || 'Required'}
              </span>
            )}
          </div>
          <div className={`flex flex-col gap-1 relative ${errors.email ? 'text-red' : ''}`}>
            <label htmlFor="email" className="label-form">
              {career.labels.email}
            </label>
            <input
              id="email"
              type="text"
              placeholder={career.placeholder.email}
              {...register('email', {
                required: true,
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: 'Invalid email',
                },
              })}
              className={`input-form pl-2 l:py-0.5 ${errors.email ? 'text-red' : ''}`}
            />
            {errors.email && (
              <span className="error absolute bottom-[-22px] right-0 text-red text-[12px] font-extralight leading-[24px] tracking-[2.4px]">
                {errors.email.message || 'Required'}
              </span>
            )}
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="position" className="label-form">
              {career.labels.position}
            </label>
            <input
              id="position"
              type="text"
              placeholder={career.placeholder.position}
              {...register('position')}
              className="input-form pl-2 l:py-0.5"
            />
          </div>
          <div className={`flex flex-col gap-1 relative ${errors.phone ? 'text-red' : ''}`}>
            <label htmlFor="phone" className="label-form">
              {career.labels.phone}
            </label>
            <div className="relative">
              <span className="absolute left-[8px] text-[13px] font-extralight leading-[24px] l:text-[20px] l:top-[2px]">
                + 38
              </span>
              <input
                id="phone"
                type="tel"
                placeholder={career.placeholder.phone}
                {...register('phone', {
                  required: true,
                  pattern: {
                    value: /^\(\d{3}\) \d{2} \d{2} \d{3}$/,
                    message: 'Incorrect phone',
                  },
                })}
                className={`input-form w-full pl-10 l:py-0.5 l:pl-14 ${
                  errors.phone ? 'text-red' : ''
                }`}
              />
              {errors.phone && (
                <span className="error absolute bottom-[-22px] right-0 text-red text-[12px] font-extralight leading-[24px] tracking-[2.4px]">
                  {errors.phone.message || 'Required'}
                </span>
              )}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-1 mb-4 m:mb-0">
          <label htmlFor="message" className="label-form">
            {career.labels.message}
          </label>
          <textarea
            id="message"
            {...register('message')}
            className="input-form px-2 resize-none h-[196px] m:w-[221px] m:h-[228px] l:w-[292px] l:h-[268px]"
          ></textarea>
        </div>
      </div>
      <div className="m:flex m:items-start m:w-[460px] l:w-[606px]">
        <div
          className={`mb-4 relative m:mb-0 m:mt-[7px] l:mt-3 ${errors.policy ? 'text-red' : ''}`}
        >
          <input
            id="policy"
            type="checkbox"
            {...register('policy', { required: true })}
            className="input-checkbox absolute opacity-0"
          />
          <label
            htmlFor="policy"
            className="w-[250] block text-[12px] font-extralight leading-[22px] ml-[30px] label-checkbox m:w-[192px] l:w-[258px] l:leading-[24px] l:ml-8  cursor-pointer"
          >
            {career.labels.policy}
          </label>
        </div>
        <BtnSubmit text={career.btnSubmit} />
      </div>
    </form>
  );
};

export default FormCareer;
