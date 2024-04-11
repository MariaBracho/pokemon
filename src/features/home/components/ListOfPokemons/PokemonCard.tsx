import Image from 'next/image';
import type { PokemonType } from '@/models/pokemonType';
import cls from 'classnames';
import style from './pokemon.module.css';

interface Props {
  image: string;
  name: string;
  types: PokemonType[];
  hitPoints: number;
}

export default function PokemonCard({ image, name, types, hitPoints }: Props) {
  return (
    <div className="w-[160px] mt-5 md:mt-3 md:w-[183px] min-h-64 rounded-xl bg-[#020202] flex flex-col items-center p-1 border border-[#474747] ">
      <div className="relative w-full h-[207px] rounded-lg overflow-hidden flex flex-col items-center ">
        <Image
          src="/images/galaxy-background.png"
          alt="galaxy"
          height={207}
          width={160}
          className="w-full h-[207px] absolute"
        />
        <div className="relative z-10 w-full flex flex-col justify-center items-center flex-1 ">
          <div className="w-full flex items-center justify-between p-1">
            <div className="flex gap-1">
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
            <div>
              <p className="text-white font-bold">
                <span className="text-[6px]">ps</span>{' '}
                <span className="text-xs">{hitPoints}</span>
              </p>
            </div>
          </div>
          <div className="relative z-10 flex-1 flex items-center">
            <Image
              src={image}
              alt={name}
              height={112}
              width={112}
              className="w-28 h-28 object-cover rounded-lg -mt-8"
            />
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center mt-2">
        <div className="w-36">
          <p
            className={cls(
              style.linearGradientText,
              'text-sm font-bold text-transparent bg-clip-text capitalize',
            )}
          >
            {name}
          </p>
        </div>
      </div>
    </div>
  );
}