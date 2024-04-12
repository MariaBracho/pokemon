'use client';

import Image from 'next/image';
import SeacrhInput from '@/components/table/SearchInput';
import Menu from '@/components/layout/Menu';
import SwapButton from '@/components/layout/SwapButton';

import { useToggle } from 'usehooks-ts';

export default function Header() {
  const [value, toggle] = useToggle();

  return (
    <Menu isOpen={value} onCloseModal={toggle}>
      <div className="min-h-20 w-full grid grid-cols-1 md:grid-cols-[1fr,2fr,1fr] items-center justify-center md:px-6">
        <div className="hidden md:block">
          <Image
            src="/images/pokemonLogo.png"
            alt="logo"
            width={96}
            height={36}
            priority
            className="w-auto h-auto object-cover"
          />
        </div>
        <div className="w-full h-full flex">
          <SeacrhInput />
        </div>
        <div className="z-40 relative w-full hidden md:flex justify-end ">
          <SwapButton isToggle={value} onToggle={toggle} />
        </div>
      </div>
    </Menu>
  );
}
