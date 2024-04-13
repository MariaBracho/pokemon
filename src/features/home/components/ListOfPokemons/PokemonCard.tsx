import { useRef } from 'react';
import Image from 'next/image';
import type { PokemonType } from '@/models/pokemonType';
import type { Pokemon } from '@/models/pokemon';
import usePokemonHistoryStore from '@/features/home/stores/pokemonHistory';
import DetailCard from '@/features/home/components/DetailCard';

export interface PokemonCardProps extends Pokemon {
  image: string;
  name: string;
  types: PokemonType[];
  hitPoints: number;
  baseExperience: number;
}

export default function PokemonCard({
  image,
  name,
  types,
  hitPoints,
  baseExperience,
  ...rest
}: PokemonCardProps) {
  const modalRef = useRef<HTMLDialogElement | null>(null);

  const { setPokemonHistory, pokemonHistory } = usePokemonHistoryStore();

  const openModal = () => {
    if (modalRef.current) {
      modalRef.current.showModal();
      setPokemonHistory(rest.id);
    }
  };

  const isActiveHistory = pokemonHistory.includes(rest.id);

  return (
    <>
      <DetailCard
        ref={modalRef}
        image={image}
        name={name}
        types={types}
        hitPoints={hitPoints}
        baseExperience={baseExperience}
        {...rest}
      />
      <div
        onClick={openModal}
        className="hover:scale-105 transition-all cursor-pointer min-h-64  w-[160px] md:w-[183px] mt-5 md:mt-3  rounded-xl  bg-[#020202] flex flex-col items-center p-1 border border-outline-primary"
      >
        <div className="relative w-full h-[207px] rounded-lg overflow-hidden flex flex-col items-center ">
          <div
            data-isactive={isActiveHistory}
            className="hidden gap-1 absolute z-20 bottom-1 right-1 items-center data-[isactive=true]:flex"
          >
            <Image
              src="/icons/eyeOpen.svg"
              alt="eye icon"
              height={8}
              width={11}
              className="w-auto h-auto object-contain"
            />
            <p className="text-[10px]">Visto</p>
          </div>
          <Image
            src="/images/galaxy-background.png"
            alt="galaxy"
            height={207}
            width={160}
            className="w-auto h-auto absolute object-cover -top-[24%]"
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
            <div className="relative z-10 flex-1 flex items-center h-full">
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
        <div className="w-full flex justify-between mt-2">
          <div className="w-full">
            <p className="text-sm gradient-text">{name}</p>
          </div>
        </div>
      </div>
    </>
  );
}
