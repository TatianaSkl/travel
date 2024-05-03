import { FC } from 'react';
import contacts from '@/data/contacts.json';

const Social: FC = () => {
  return (
    <div className="flex justify-end gap-5 mb-3 m:mb-16 l:flex-row-reverse l:justify-start">
      <p className="text-[12px] font-extralight leading-[20px] pt-[2px] l:pr-[30px]">
        {contacts.social.title}
      </p>
      <ul className="w-[81px]">
        {contacts.social.links.map(({ id, title, link }) => (
          <li key={id}>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer nofollow"
              aria-label={`Visit ${title} website`}
              className="leading-[24px] trans hover:underline focus:underline"
            >
              {title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Social;
