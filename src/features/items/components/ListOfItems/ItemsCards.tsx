import cls from 'classnames';

import ItemCard from '@/features/items/components/ItemCard';
import ItemSkeleton from '@/features/items/components/ItemSkeleton';

import { generateArray } from '@/utils/generateArray';

import type { Item } from '@/models/heldItems';

import style from './itemsGalleryGrid.module.css';

interface Props {
  isLoading: boolean;
  items: Item[] | undefined;
}

export default function ItemsCards({ isLoading, items }: Props) {
  const skeletonList = generateArray(40);
  return (
    <div
      className={cls(
        style.itemsGalleryGrid,
        'gap-2 md:gap-3 mt-5 md:mt-3 cursor-pointer min-h-[70vh]',
      )}
    >
      {items && !isLoading
        ? items.map(({ id, name, cost, sprites, ...rest }) => (
            <ItemCard
              key={id}
              name={name}
              description={rest.effect_entries?.[0].effect ?? ''}
              cost={cost}
              image={sprites.default}
            />
          ))
        : skeletonList.map((item) => <ItemSkeleton key={item} />)}
    </div>
  );
}
