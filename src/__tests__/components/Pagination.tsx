import { Suspense } from 'react';

import { render, screen, fireEvent } from '@testing-library/react';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';

import Pagination from '@/components/table/Pagination';

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
  useSearchParams: jest.fn(),
  usePathname: jest.fn(),
}));

describe('pagination', () => {
  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({
      replace: jest.fn(),
    });

    (useSearchParams as jest.Mock).mockReturnValue(
      new URLSearchParams({ search: 'test', page: '1' }),
    );

    (usePathname as jest.Mock).mockReturnValue('/items');
  });

  it('increments and decrements the page', async () => {
    render(
      <Suspense>
        <Pagination maxPage={4} />
      </Suspense>,
    );

    const prevButton = screen.getByTestId('prevButton');
    const nextButton = screen.getByTestId('nextButton');

    const pageNumbers = screen.getByTestId('page-numbers');

    expect(pageNumbers).toHaveTextContent('1/4');

    fireEvent.click(nextButton);

    expect(pageNumbers).toHaveTextContent('2/4');

    fireEvent.click(prevButton);

    expect(pageNumbers).toHaveTextContent('1/4');
  });

  it('disables the next button on the last page and the previous button on the first page', async () => {
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
      <Suspense>
        <Pagination maxPage={1} />
      </Suspense>,
    );

    const prevButton = screen.getByTestId('prevButton');

    expect(prevButton).toBeDisabled();
  });
});
