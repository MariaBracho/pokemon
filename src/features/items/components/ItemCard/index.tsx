import Image from 'next/image';
import DetailCard from '../DetailCard';
import { useRef } from 'react';

interface Props {
  image: string;
  name: string;
  description: string;
  cost: number;
}

export default function ItemCard({ image, name, description, cost }: Props) {
  const modalRef = useRef<null | HTMLDialogElement>(null);

  const handleOpenDetail = () => {
    if (modalRef.current) {
      modalRef.current.showModal();
    }
  };
  return (
    <div
      onClick={handleOpenDetail}
      className="h-auto bg-base-100 w-32 min-h-24 rounded-xl border border-outline-primary p-1 transition-all hover:scale-105 relative"
    >
      <div className="w-full h-10 relative overflow-hidden rounded-lg flex">
        <Image
          src="/images/backgroundItem.png"
          alt="background"
          fill
          className="w-full  h-10 object-cover absolute"
        />
        <Image
          src={image}
          alt="item"
          width={24}
          height={24}
          className="w-6 h-6 object-cover absolute mx-auto left-0 right-0 top-[calc(50%-12px)]"
        />
      </div>
      <div className="my-2">
        <p className="gradient-text font-bold text-sm capitalize">{name}</p>
        <p className="text-xs">
          <span className="text-white/75">Cost:</span> $ {cost}
        </p>
      </div>
      <DetailCard description={description} title={name} ref={modalRef} />
    </div>
  );
}
