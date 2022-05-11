import Image from 'next/image';
import Link from 'next/link';

export function Header() {
  return (
    <header className="flex items-center justify-start pb-10">
      <div className="w-[108px] h-[30px] md:w-[157px] md:h-[35pt] relative">
        <Link href="/">
          <a>
            <Image src="/logo.svg" alt="Logo" layout="fill" />
          </a>
        </Link>
      </div>
    </header>
  );
}
