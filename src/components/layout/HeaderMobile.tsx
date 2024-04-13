'use client';

import Link from 'next/link';

import Image from 'next/image';

import { useToggle } from 'usehooks-ts';

import Menu from './Menu';
import SwapButton from './SwapButton';

export default function HeaderMobile() {
  const [value, toggle] = useToggle();

  return (
    <Menu isOpen={value} onCloseModal={toggle}>
      <div className="p-2 h-20 flex justify-between items-center md:hidden ">
        <Link href="/home">
          <Image
            src="/images/pokemon-logo.png"
            alt="logo"
            width={96}
            height={36}
            priority
            className="w-auto h-auto object-cover"
          />
        </Link>
        <div className="z-40 relative w-full flex md:hidden justify-end">
          <SwapButton isToggle={value} onToggle={toggle} />
        </div>
      </div>
    </Menu>
  );
}
