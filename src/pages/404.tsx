import Head from 'next/head';
import Image from 'next/image';

export default function NotFound() {
  return (
    <>
      <Head>
        <title>Huddle | Page not found</title>
      </Head>

      <section className="flex flex-col items-center">
        <h1 className="text-xl mb-6">Page not found :(</h1>

        <Image
          src="/warning.svg"
          alt="Warning illustration"
          width={250}
          height={200}
          priority
        />
      </section>
    </>
  );
}
