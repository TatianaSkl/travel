'use client';

import { FC } from 'react';
import { Link } from 'react-scroll';
import { NavBarProps } from '@/types';
import header from '@/data/header.json';

const NavBar: FC<NavBarProps> = ({ onClose }) => {
  return (
    <nav role="navigation">
      <ul className="flex flex-col items-center gap-12 m:flex-row m:gap-6 l:gap-14">
        {header.map(({ id, title, to }) => (
          <li key={id} className="cursor-pointer">
            <Link
              to={to}
              spy={true}
              smooth={true}
              duration={500}
              href=""
              onClick={onClose}
              className="text-[18px] tracking-[1.8px] leading-[1.2] p-5 m:text-[14px] m:tracking-[1.4px] m:px-0 m:py-2.5 trans hover:underline focus:underline"
              aria-label={`Navigate to ${title} section`}
            >
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
