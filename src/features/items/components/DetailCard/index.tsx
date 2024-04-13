import DetailModal from '@/components/modals/DetailModal';
import React from 'react';

interface Props {
  title: string;
  description: string;
  ref: React.Ref<HTMLDialogElement>;
}

const DetailCard = React.forwardRef<HTMLDialogElement, Props>(function (
  { title, description },
  ref,
) {
  return (
    <DetailModal ref={ref}>
      <div className="w-full h-full">
        <p className="gradient-text font-bold text-2xl capitalize">{title}</p>
        <p className="text-white/75 mt-3">{description}</p>
      </div>
    </DetailModal>
  );
});

DetailCard.displayName = 'DetailCard';

export default DetailCard;
