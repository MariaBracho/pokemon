import ListOfPokemons from '@/features/home/components/ListOfPokemons';
import { HydrationBoundary } from '@tanstack/react-query';

export default function Home({
  dehydratedState,
}: {
  dehydratedState: unknown;
}) {
  return (
    <HydrationBoundary state={dehydratedState}>
      <div>
        <p>Pokemon App</p>
        <ListOfPokemons />
      </div>
    </HydrationBoundary>
  );
}
