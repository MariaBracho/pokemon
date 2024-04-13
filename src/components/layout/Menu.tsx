import { NAVIGATION_ROUTER } from '@/constants/navigationRouter';
import Link from 'next/link';

interface Props {
  children: React.ReactNode;
  isOpen: boolean;
  onCloseModal: () => void;
}

export default function Menu({ children, isOpen, onCloseModal }: Props) {
  return (
    <div className="drawer drawer-end">
      <input
        type="checkbox"
        className="drawer-toggle"
        checked={isOpen}
        readOnly
      />
      <div className="drawer-content">{children}</div>
      <div className="drawer-side z-30">
        <label
          onClick={onCloseModal}
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="w-full md:w-80 min-h-full bg-base-200 text-base-content menu">
          <ul className="mt-12 p-4 ">
            {NAVIGATION_ROUTER.map(({ path, label }) => {
              return (
                <li key={label} onClick={onCloseModal}>
                  <Link href={path}>{label}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
