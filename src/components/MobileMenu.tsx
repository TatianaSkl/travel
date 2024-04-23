'use client';

import { FC, useEffect } from 'react';
import NavBar from './NavBar';
import { MobileMenuProps } from '@/types';

const MobileMenu: FC<MobileMenuProps> = ({ onClose }) => {
  useEffect(() => {
    const handleClick = (e: KeyboardEvent) => {
      if (e.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleClick);
    return () => {
      window.removeEventListener('keydown', handleClick);
    };
  }, [onClose]);

  return (
    <div className="modal m:hidden">
      <button
        type="button"
        aria-label="Button close navigete menu"
        onClick={onClose}
        className="absolute top-[36px] right-[20px] h-10 leading-[1.2] tracking-[1.4px] hover:underline focus:underline trans"
      >
        CLOSE
      </button>
      <NavBar onClose={onClose} />
    </div>
  );
};

export default MobileMenu;
