import { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import useFormPersist from 'react-hook-form-persist';
import toast from 'react-hot-toast';
import { ContactsForm } from '@/types';
import contacts from '@/data/contacts.json';

const FormContacts: FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    setValue,
    watch,
  } = useForm<ContactsForm>();

  useFormPersist('contactsForm', {
    watch,
    setValue,
  });

  const submit: SubmitHandler<ContactsForm> = () => {
    toast.success('Your data has been sent successfully!');
    reset();
  };

  return (
    <form onSubmit={handleSubmit(submit)} className="md:max-w-[480px] mx-auto l:pt-[3px]">
      <div className="m:flex m:gap-5 l:flex-col l:gap-0">
        <div className="flex flex-col gap-6 mb-6 m:mb-0 m:gap-7 l:flex-row l:mb-10 l:gap-5">
          <div
            className={`flex flex-col gap-1 relative ${errors.fullNameContacts ? 'text-red' : ''}`}
          >
            <label htmlFor="fullNameContacts" className="label-form">
              {contacts.form.fullNameContacts.label}
            </label>
            <input
              id="fullNameContacts"
              type="text"
              placeholder={contacts.form.fullNameContacts.placeholder}
              {...register('fullNameContacts', {
                required: true,
                pattern: {
                  value: /^[a-zA-Zа-яА-Я]+(?:\s+[a-zA-Zа-яА-Я]+)+$/,
                  message: `${contacts.form.fullNameContacts.error}`,
                },
              })}
              className={`input-form pl-2 l:py-0.5 l:w-[293px] ${
                errors.fullNameContacts ? 'text-red' : ''
              }`}
              aria-invalid={errors.fullNameContacts ? 'true' : 'false'}
            />
            {errors.fullNameContacts && (
              <span className="error absolute bottom-[-22px] right-0 text-red text-[12px] font-extralight leading-[24px] tracking-[2.4px]">
                {errors.fullNameContacts.message || 'Required'}
              </span>
            )}
          </div>
          <div className={`flex flex-col gap-1 relative ${errors.emailContacts ? 'text-red' : ''}`}>
            <label htmlFor="emailContacts" className="label-form">
              {contacts.form.emailContacts.label}
            </label>
            <input
              id="emailContacts"
              type="text"
              placeholder={contacts.form.emailContacts.placeholder}
              {...register('emailContacts', {
                required: true,
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: `${contacts.form.emailContacts.error}`,
                },
              })}
              className={`input-form pl-2 l:py-0.5 l:w-[293px] ${
                errors.emailContacts ? 'text-red' : ''
              }`}
              aria-invalid={errors.emailContacts ? 'true' : 'false'}
            />
            {errors.emailContacts && (
              <span className="error absolute bottom-[-22px] right-0 text-red text-[12px] font-extralight leading-[24px] tracking-[2.4px]">
                {errors.emailContacts.message || 'Required'}
              </span>
            )}
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="messageContacts" className="label-form">
            {contacts.form.messageContacts.label}
          </label>
          <textarea
            id="messageContacts"
            {...register('messageContacts')}
            className="input-form px-2 resize-none h-[196px] m:w-[463px] m:h-[221px] l:w-[607px] l:h-[174px]"
          ></textarea>
        </div>
      </div>
      <button
        type="submit"
        aria-label="submit form"
        className="flex uppercase text-[30px] font-medium leading-[1.2] w-[82px] h-[52px] ml-auto items-end l:h-[63px] l:text-[32px] l:w-[87px] trans hover:underline focus:underline"
      >
        {contacts.btnSubmit}
      </button>
    </form>
  );
};

export default FormContacts;
