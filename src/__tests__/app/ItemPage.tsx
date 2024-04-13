import { render, screen } from '@testing-library/react';
import TanstackQueryProvider from '@/providers/TanstackQueryProvider';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import Items from '@/app/items/page';

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
  useSearchParams: jest.fn(),
  usePathname: jest.fn(),
}));

it('render home', () => {
  (useRouter as jest.Mock).mockReturnValue({
    route: '/items',
    pathname: '/items',
    query: {
      search: 'test',
      page: '1',
    },
    replace: jest.fn(),
  });

  (useSearchParams as jest.Mock).mockReturnValue(
    new URLSearchParams({ search: 'test', page: '1' }),
  );

  (usePathname as jest.Mock).mockReturnValue('/items');

  render(
    <TanstackQueryProvider>
      <Items searchParams={{ search: 'test', page: '1' }} />
    </TanstackQueryProvider>,
  );
  expect(screen.getByText(/Total results:/i)).toBeInTheDocument();
});
