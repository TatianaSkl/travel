import { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { BtnSubmit } from '../ui-kit';
import { ContactsForm } from '@/types';
import contacts from '@/data/contacts.json';

const FormContacts: FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactsForm>();

  const submit: SubmitHandler<ContactsForm> = () => {
    toast.success('Your data has been sent successfully!');
    reset();
  };

  return (
    <form onSubmit={handleSubmit(submit)} className="md:w-[280px] mx-auto">
      <div className="m:flex m:gap-5 l:flex-col">
        <div className="flex flex-col gap-6 mb-6 m:mb-0 m:gap-7 l:flex-row l:mb-10 l:gap-5">
          <div className={`flex flex-col gap-1 relative ${errors.fullName ? 'text-red' : ''}`}>
            <label htmlFor="fullName" className="label-form">
              {contacts.form.fullName.label}
            </label>
            <input
              id="fullName"
              type="text"
              placeholder={contacts.form.fullName.placeholder}
              {...register('fullName', {
                required: true,
                pattern: {
                  value: /^[a-zA-Zа-яА-Я]+(?:\s+[a-zA-Zа-яА-Я]+)+$/,
                  message: `${contacts.form.fullName.error}`,
                },
              })}
              className={`input-form pl-2 l:py-0.5 l:w-[293px] ${
                errors.fullName ? 'text-red' : ''
              }`}
              aria-invalid={errors.fullName ? 'true' : 'false'}
              aria-describedby="fullNameError"
            />
            {errors.fullName && (
              <span
                id="fullNameError"
                className="error absolute bottom-[-22px] right-0 text-red text-[12px] font-extralight leading-[24px] tracking-[2.4px]"
              >
                {errors.fullName.message || 'Required'}
              </span>
            )}
          </div>
          <div className={`flex flex-col gap-1 relative ${errors.email ? 'text-red' : ''}`}>
            <label htmlFor="email" className="label-form">
              {contacts.form.email.label}
            </label>
            <input
              id="email"
              type="text"
              placeholder={contacts.form.email.placeholder}
              {...register('email', {
                required: true,
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: `${contacts.form.email.error}`,
                },
              })}
              className={`input-form pl-2 l:py-0.5 l:w-[293px] ${errors.email ? 'text-red' : ''}`}
              aria-invalid={errors.email ? 'true' : 'false'}
              aria-describedby="emailError"
            />
            {errors.email && (
              <span
                id="emailError"
                className="error absolute bottom-[-22px] right-0 text-red text-[12px] font-extralight leading-[24px] tracking-[2.4px]"
              >
                {errors.email.message || 'Required'}
              </span>
            )}
          </div>
        </div>
        <div className="flex flex-col gap-1 mb-4">
          <label htmlFor="message" className="label-form">
            {contacts.form.message.label}
          </label>
          <textarea
            id="message"
            {...register('message')}
            className="input-form px-2 resize-none h-[196px] m:w-[463px] m:h-[221px] l:w-[607px] l:h-[174px]"
          ></textarea>
        </div>
      </div>
      <BtnSubmit text={contacts.btnSubmit} />
    </form>
  );
};

export default FormContacts;
