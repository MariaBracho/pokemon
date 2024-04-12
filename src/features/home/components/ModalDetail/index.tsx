import Image from 'next/image';
import { forwardRef } from 'react';
import type { PokemonCardProps } from '@/features/home/components/ListOfPokemons/PokemonCard';
import CloseIcon from '@/components/icons/CloseIcons';

interface Props extends PokemonCardProps {
  ref: React.Ref<null>;
}
export const ModalDetail = forwardRef<HTMLDialogElement, Props>(
  function (props, ref) {
    return (
      <dialog ref={ref} className="modal">
        <div className="relative modal-box px-4 pt-4 pb-5 min-h-screen md:min-h-[668px] rounded-none w-full md:max-h-[668px] md:max-w-[590px] md:rounded-2xl  md:border border-[#474747] ">
          <div className="modal-action m-0 absolute z-20 w-full justify-end right-8 top-6">
            <form method="dialog">
              <button className="flex gap-1 items-center outline-none">
                <p>Close (esc)</p>
                <CloseIcon />
              </button>
            </form>
          </div>
          <div className="w-full h-[245px] rounded-2xl relative overflow-hidden">
            <Image
              src="/images/galaxy-modal-background.png"
              alt="galaxy background"
              fill
              className="object-cover w-full h-full absolute"
            />
            <Image
              src={props.image}
              alt="pokemon"
              width={260}
              height={240}
              className="object-cover h-60 w-60 absolute left-[calc(50%-120px)] top-0 bottom-0 "
            />
          </div>
          <div className="w-full mt-4 flex items-center gap-2">
            <div>
              <p className="gradient-text text-2xl capitalize">{props.name}</p>
            </div>
            <div className="flex gap-2 flex-wrap">
              {props.types.map((type) => {
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
                <li>Order : {props.order}</li>
                <li>Height : {props.height}cm</li>
                <li>Weight : {props.weight}</li>
                <li>Base experience : {props.base_experience}</li>
                <li className="w-full">
                  <audio
                    src={props.cries?.latest}
                    controls
                    className="h-8 w-full"
                  />
                </li>
              </ul>
            </div>
            <div className="bg-white/5 h-full rounded-2xl w-full">
              <div className="p-4">
                <p className="text-base font-bold">Stats</p>
                <div className="w-full text-xs md:text-sm flex flex-col gap-y-1">
                  {props?.stats?.map((stat) => {
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
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    );
  },
);

ModalDetail.displayName = 'ModalDetail';
