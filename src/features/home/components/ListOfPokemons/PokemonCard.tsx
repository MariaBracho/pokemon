import { useRef } from 'react';
import Image from 'next/image';
import type { PokemonType } from '@/models/pokemonType';
import { ModalDetail } from '@/features/home/components/ModalDetail';
import type { Pokemon } from '@/models/pokemon';

export interface PokemonCardProps extends Pokemon {
  image: string;
  name: string;
  types: PokemonType[];
  hitPoints: number;
}

export default function PokemonCard({
  image,
  name,
  types,
  hitPoints,
  ...rest
}: PokemonCardProps) {
  const modalRef = useRef<HTMLDialogElement | null>(null);

  const openModal = () => {
    if (modalRef.current) {
      modalRef.current.showModal();
    }
  };

  return (
    <>
      <ModalDetail
        ref={modalRef}
        image={image}
        name={name}
        types={types}
        hitPoints={hitPoints}
        {...rest}
      />
      <div
        onClick={openModal}
        className="hover:scale-105 transition-all cursor-pointer min-h-64  w-[160px] md:w-[183px] mt-5 md:mt-3  rounded-xl bg-[#020202] flex flex-col items-center p-1 border border-[#474747] "
      >
        <div className="relative w-full h-[207px] rounded-lg overflow-hidden flex flex-col items-center ">
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
            <p className="text-sm gradient-text">{name}</p>
          </div>
        </div>
      </div>
    </>
  );
}
