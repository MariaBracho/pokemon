export interface PaginateProps {
  limit?: number;
  page: number;
  search?: string;
}

export interface PaginateResponse<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
}
