import Image from 'next/image';
import { RegisterButton } from '../RegisterButton';

export function MainContent() {
  return (
    <section className="grid grid-cols-1 items-center justify-items-center md:grid-cols-2 md:gap-6 lg:grid-cols-[50%_50%] xl:grid-cols-[55%_45%] lg:items-start">
      <div className="relative w-[252px] h-[180px] mb-8 md:w-full md:h-[250px] lg:h-[350px] xl:h-[450px]">
        <Image
          src="/illustration.svg"
          alt="Mockups illustration"
          layout="fill"
          priority
        />
      </div>

      <div className="flex flex-col items-center md:items-start lg:pt-10">
        <h2 className="text-center md:text-left text-xl md:text-2xl font-bold mb-4 lg:text-3xl xl:text-4xl">
          Build The Community Your Fans Will Love
        </h2>

        <p className="text-center md:text-left text-sm mb-6">
          Huddle re-imagines the way we build communities. You have a choice,
          but so does your audience. Create connections with your users as you
          engage in genuine discussion.
        </p>

        <RegisterButton />
      </div>
    </section>
  );
}
