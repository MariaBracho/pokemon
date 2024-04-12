import Image from 'next/image';
import Link from 'next/link';

export default function NotFoundPokemon({
  pokemonName = '',
}: {
  pokemonName: string;
}) {
  return (
    <div className="w-full flex flex-col justify-center items-center mt-20">
      <div className="text-white text-center text-base grid place-content-center max-w-[450px] w-full place-items-center">
        <Image
          src="/images/pokeBall.png"
          alt="pokemon ball"
          width={212}
          height={106}
        />
        <p className="font-extrabold text-xl">
          “{pokemonName.toLocaleUpperCase()}” pokemon not found
        </p>
        <p>Try typing another pokemon name or explore the beginning</p>
        <Link href="/" replace={true} className="underline cursor-pointer">
          Go to the beginning of my search
        </Link>
      </div>
    </div>
  );
}
