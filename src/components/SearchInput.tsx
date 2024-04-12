'use client';

import React, { useState } from 'react';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import SearchIcon from './icons/SearchIcon';

export default function SeacrhInput() {
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const router = useRouter();

  const searchQuery = searchParams.get('search') ?? '';

  const [search, setSearch] = useState(searchQuery);

  const submitValue = (event: React.FormEvent) => {
    event.preventDefault();
    const params = new URLSearchParams(searchParams);
    if (search === '') {
      params.delete('search');
    } else {
      params.set('search', search);
    }
    router.replace(`${pathname}?${params.toString()}`);
  };

  const updateValue = (event: React.FormEvent<HTMLInputElement>) => {
    if (event.currentTarget) {
      setSearch(event.currentTarget.value.toLowerCase());
    }
    if (event.currentTarget.value === '') {
      const params = new URLSearchParams(searchParams);
      params.delete('search');
      router.replace(`${pathname}?${params.toString()}`);
    }
  };

  return (
    <form
      onSubmit={submitValue}
      className="w-full flex gap-2 h-full flex-wrap md:flex-nowrap items-center"
    >
      <div className="h-9 flex grow">
        <label className="input h-full input-bordered w-full bg-[#121213] flex items-center gap-1">
          <SearchIcon />
          <input
            type="text"
            value={search}
            placeholder="Search pokemon"
            className="grow"
            onChange={updateValue}
          />
        </label>
      </div>
      <button
        type="submit"
        className="btn btn-primary btn-sm w-full md:max-w-48"
      >
        Search Pokemon
      </button>
    </form>
  );
}
