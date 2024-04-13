'use client';

import Image from 'next/image';

import Link from 'next/link';

import { Suspense } from 'react';

import { useToggle } from 'usehooks-ts';

import SeacrhInput from '@/components/table/SearchInput';
import SwapButton from '@/components/layout/SwapButton';
import Menu from '@/components/layout/Menu';

export default function Header() {
  const [value, toggle] = useToggle();

  return (
    <Menu isOpen={value} onCloseModal={toggle}>
      <div className="min-h-20 w-full grid grid-cols-1 md:grid-cols-[1fr,2fr,1fr] items-center justify-center px-2 md:px-6">
        <div className="hidden md:block">
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
        </div>
        <div className="w-full h-full flex">
          <Suspense>
            <SeacrhInput />
          </Suspense>
        </div>
        <div className="z-40 relative w-full hidden md:flex justify-end ">
          <SwapButton isToggle={value} onToggle={toggle} />
        </div>
      </div>
    </Menu>
  );
}
