import Image from 'next/image';
import Link from 'next/link';

export default function NotResultsFound({
  search = '',
  path = '/',
  searchName = '',
}: {
  search: string;
  path: string;
  searchName: string;
}) {
  return (
    <div className="w-full flex flex-col justify-center items-center mt-20">
      <div className="text-white text-center text-base grid place-content-center max-w-[450px] w-full place-items-center">
        <Image
          src="/images/poke-Ball.png"
          alt="pokemon ball"
          width={212}
          height={106}
        />
        <p className="font-extrabold text-xl">
          <span className="uppercase">“{search}”</span> {searchName} not found
        </p>
        <p>Try typing another {searchName} name or explore the beginning</p>
        <Link href={path} replace={true} className="underline cursor-pointer">
          Go to the beginning of my search
        </Link>
      </div>
    </div>
  );
}
