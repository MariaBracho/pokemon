import { render, screen } from '@testing-library/react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import TanstackQueryProvider from '@/providers/TanstackQueryProvider';

import Home from '@/app/home/page';

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
  useSearchParams: jest.fn(),
  usePathname: jest.fn(),
}));

it('render home', () => {
  (useRouter as jest.Mock).mockReturnValue({
    route: '/home',
    pathname: '/home',
    query: {
      search: 'pikachu',
      page: '1',
    },
    replace: jest.fn(),
  });

  (useSearchParams as jest.Mock).mockReturnValue(
    new URLSearchParams({ search: 'pikachu', page: '1' }),
  );

  (usePathname as jest.Mock).mockReturnValue('/home');

  render(
    <TanstackQueryProvider>
      <Home searchParams={{ search: 'pikachu', page: '1' }} />
    </TanstackQueryProvider>,
  );
  expect(screen.getByText(/Total results:/i)).toBeInTheDocument();
});
