'use client';

import { useToggle } from 'usehooks-ts';
import Image from 'next/image';
import Menu from './Menu';
import SwapButton from './SwapButton';

export default function HeaderMobile() {
  const [value, toggle] = useToggle();

  return (
    <Menu isOpen={value} onCloseModal={toggle}>
      <div className="h-20 flex justify-between items-center md:hidden ">
        <Image
          src="/images/pokemonLogo.png"
          alt="logo"
          width={96}
          height={36}
          priority
          className="w-auto h-auto object-cover"
        />
        <div className="z-40 relative w-full flex md:hidden justify-end">
          <SwapButton isToggle={value} onToggle={toggle} />
        </div>
      </div>
    </Menu>
  );
}
