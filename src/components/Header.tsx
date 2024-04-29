'use client';

import { FC, useState } from 'react';
import Logo from './Logo';
import MobileMenu from './MobileMenu';
import NavBar from './NavBar';

const Header: FC = () => {
  const [modalState, setModalState] = useState(false);

  const onOpenModal = () => {
    document.body.style.overflow = 'hidden';
    setModalState(true);
  };

  const onCloseModal = () => {
    document.body.style.overflow = 'auto';
    setModalState(false);
  };

  return (
    <>
      <header className="absolute z-0 w-full pt-9 m:pt-[25px] l:pt-6">
        <div className="container flex justify-between items-center">
          <Logo />
          <div className="m:hidden">
            <button
              type="button"
              aria-label="Button open navigete menu"
              onClick={onOpenModal}
              className="h-10 leading-[1.2] tracking-[1.4px] hover:underline focus:underline trans"
            >
              MENU
            </button>
          </div>
          <div className="hidden m:block">
            <NavBar />
          </div>
        </div>
      </header>
      {modalState && <MobileMenu onClose={onCloseModal} />}
    </>
  );
};

export default Header;
