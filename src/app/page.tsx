import Header from '@/features/home/components/Header';
import ListOfPokemons from '@/features/home/components/ListOfPokemons/ListOfPokemons';

export default function Home({
  searchParams,
}: {
  searchParams: {
    search: string;
    page: string;
  };
}) {
  return (
    <div className="w-full h-full">
      <Header />
      <ListOfPokemons search={searchParams.search} page={searchParams.page} />
    </div>
  );
}
