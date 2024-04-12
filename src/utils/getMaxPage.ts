const DEFAULT_PER_PAGE = 15;

export const getMaxPage = (
  total: number | undefined,
  perPage: number | undefined = DEFAULT_PER_PAGE,
) => {
  if (!total) return 1;

  return Math.ceil(total / perPage);
};
