import React from 'react';
import Image from 'next/image';

import DetailModal from '@/components/modals/DetailModal';

import type { PokemonCardProps } from '@/features/home/components/ListOfPokemons/PokemonCard';

interface Props extends PokemonCardProps {
  ref: React.Ref<HTMLDialogElement>;
}

const DetailCard = React.forwardRef<HTMLDialogElement, Props>(function (
  { name, types, order, height, weight, baseExperience, cries, stats, image },
  ref,
) {
  return (
    <DetailModal ref={ref}>
      <div className="w-full h-full">
        <div className="w-full h-[245px] rounded-2xl relative overflow-hidden">
          <Image
            src="/images/galaxy-modal-background.png"
            alt="galaxy background"
            fill
            sizes="100% 100%"
            className="object-cover w-full h-full absolute"
          />
          <Image
            src={image}
            alt="pokemon"
            width={260}
            height={240}
            className="object-cover h-60 w-60 absolute left-[calc(50%-120px)] top-0 bottom-0 "
          />
        </div>
        <div className="w-full mt-4 flex items-center gap-2">
          <div>
            <p className="gradient-text text-2xl capitalize">{name}</p>
          </div>
          <div className="flex gap-2 flex-wrap">
            {types.map((type) => {
              return (
                <div
                  key={type.type.name}
                  className="badge badge-primary capitalize"
                >
                  {type.type.name}
                </div>
              );
            })}
          </div>
        </div>
        <div className="mt-5 w-full h-full grid grid-cols-1 md:grid-cols-[1fr,2fr] gap-3">
          <div className="bg-white/5 rounded-2xl w-full p-4 h-min">
            <ul className="text-white/75 flex flex-col gap-y-2 text-sm">
              <li>Order : {order}</li>
              <li>Height : {height}cm</li>
              <li>Weight : {weight}</li>
              <li>Base experience : {baseExperience}</li>
              <li className="w-full">
                <audio src={cries?.latest} controls className="h-8 w-full" />
              </li>
            </ul>
          </div>
          <div className="bg-white/5 h-full rounded-2xl w-full">
            <div className="p-2 w-full">
              <p className="text-base font-bold">Stats</p>
              <div className="w-full text-xs md:text-sm flex flex-col gap-y-1">
                {stats?.map((stat) => {
                  return (
                    <div
                      key={stat.stat.name}
                      className="grid grid-cols-[60px,3fr,1fr] grid-rows-[40px] items-center gap-x-1 justify-center"
                    >
                      <div className="text-white/75">
                        <p>{stat.stat.name}</p>
                      </div>
                      <progress
                        className="progress progress-primary  max-w-56"
                        value={stat.base_stat}
                        max="100"
                      ></progress>
                      <div className="flex justify-end">
                        <p>{stat.base_stat} %</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </DetailModal>
  );
});

DetailCard.displayName = 'DetailCard';

export default DetailCard;
