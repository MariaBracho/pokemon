import MenuIcon from '@/components/icons/MenuIcon';
import CloseIcon from '@/components/icons/CloseIcons';

interface Props {
  isToggle: boolean;
  onToggle: () => void;
}

export default function SwapButton({ isToggle, onToggle }: Props) {
  return (
    <div className="swap swap-rotate drawer-button text-9xl" onClick={onToggle}>
      <input type="checkbox" checked={isToggle} readOnly />

      <div className="swap-off">
        <MenuIcon />
      </div>
      <div className="swap-on">
        <CloseIcon />
      </div>
    </div>
  );
}
