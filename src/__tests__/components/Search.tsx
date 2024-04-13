// import { useRouter } from 'next/router';
import { fireEvent, render, screen } from '@testing-library/react';
import SearchInput from '@/components/table/SearchInput';
import { Suspense } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
// import { usePathname, useSearchParams } from 'next/navigation';

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
  useSearchParams: jest.fn(),
  usePathname: jest.fn(),
}));

describe('SearchInput', () => {
  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({
      replace: jest.fn(),
    });

    (useSearchParams as jest.Mock).mockReturnValue(
      new URLSearchParams({ search: 'test', page: '1' }),
    );

    (usePathname as jest.Mock).mockReturnValue('/items');
  });

  it('renders search', () => {
    render(
      <Suspense>
        <SearchInput />
      </Suspense>,
    );

    expect(screen.getByPlaceholderText('Search')).toBeInTheDocument();
    expect(screen.getByText('Search by name')).toBeInTheDocument();
  });

  it('updates search value on input change', () => {
    render(
      <Suspense>
        <SearchInput />
      </Suspense>,
    );

    const searchInput = screen.getByPlaceholderText('Search');
    fireEvent.change(searchInput, { target: { value: 'test' } });

    expect(searchInput).toHaveValue('test');
  });
});
