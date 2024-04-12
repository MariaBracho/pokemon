import NotResultsFound from '@/components/NotResultsFound';

import ItemCard from '@/features/items/components/ItemCard';
import ItemSkeleton from '@/features/items/components/ItemSkeleton';

import type { Item } from '@/models/heldItems';

interface Props {
  item: Item | undefined;
  isLoading: boolean;
  isError: boolean;
  search: string;
}

export default function SingleItemCard({
  item,
  isLoading,
  isError,
  search,
}: Props) {
  if (isError && !item) {
    return <NotResultsFound search={search} searchName="item" path="/items" />;
  }
  return (
    <div className="w-full mt-5 md:mt-3">
      {!isLoading ? (
        item && (
          <ItemCard
            cost={item.cost}
            description={item.effect_entries[0].effect}
            name={item.name}
            image={item.sprites.default}
          />
        )
      ) : (
        <ItemSkeleton />
      )}
    </div>
  );
}
