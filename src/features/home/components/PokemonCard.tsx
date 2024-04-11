import Image from 'next/image';
import type { PokemonType } from '@/models/pokemonType';

interface Props {
  image: string;
  name: string;
  types: PokemonType[];
}

export default function PokemonCard({ image, name, types }: Props) {
  return (
    <div className="w-44 h-64 rounded-xl bg-[#020202] flex flex-col items-center p-1">
      <div className="relative w-40 h-36 rounded-lg overflow-hidden flex flex-col items-center justify-center">
        <Image
          src="/images/galaxy-background.png"
          alt="galaxy"
          height={144}
          width={160}
          className="w-40 h-36 absolute"
        />
        <div className="relative z-10 w-full flex gap-1">
          {types.map(({ type }) => {
            return (
              <div
                className="badge-primary badge badge-sm text-white"
                key={type.name}
              >
                {type.name}
              </div>
            );
          })}
        </div>
        <Image
          src={image}
          alt={name}
          height={112}
          width={112}
          className="w-28 h-28 object-cover rounded-lg z-10 relative"
        />
      </div>
      <div className="w-full flex justify-center mt-2">
        <div className="w-36">
          <p className="text-sm font-bold">{name}</p>
        </div>
      </div>
    </div>
  );
}
