import { forwardRef } from 'react';
import CloseIcon from '@/components/icons/CloseIcons';

interface Props {
  ref: React.Ref<null | HTMLDialogElement>;
  children: React.ReactNode;
}
const DetailModal = forwardRef<HTMLDialogElement, Props>(function (props, ref) {
  return (
    <dialog ref={ref} className="modal">
      <div className="relative modal-box px-4 pt-4 pb-5 min-h-screen md:min-h-fit rounded-none w-full md:max-h-[668px] md:max-w-[590px] md:rounded-2xl  md:border border-outline-primary">
        <div className="modal-action m-0 absolute z-20 w-full justify-end right-8 top-6">
          <form method="dialog">
            <button className="flex gap-1 items-center outline-none">
              <p>Close (esc)</p>
              <CloseIcon />
            </button>
          </form>
        </div>

        <div className="w-full h-full">{props.children}</div>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
});

DetailModal.displayName = 'ModalDetail';

export default DetailModal;
