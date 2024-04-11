import SeacrhInput from '@/components/SearchInput';
import MenuIcon from '@/components/icons/MenuIcon';
import Image from 'next/image';

export default function Header() {
  return (
    <div className="min-h-20 w-full grid grid-cols-1  md:grid-cols-[1fr,551px,1fr] items-center justify-center md:px-14">
      <div className="h-20 flex justify-between items-center md:hidden ">
        <Image
          src="/images/pokemonLogo.png"
          alt="logo"
          width={96}
          height={36}
          className="w-24 h-9 object-cover"
        />
        <button>
          <MenuIcon />
        </button>
      </div>
      <div className="hidden md:block">
        <Image
          src="/images/pokemonLogo.png"
          alt="logo"
          width={96}
          height={36}
          className="w-24 h-9 object-cover"
        />
      </div>
      <div className="w-full h-full flex">
        <SeacrhInput />
      </div>
    </div>
  );
}
