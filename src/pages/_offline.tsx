import Head from 'next/head';

export default function Offline() {
  return (
    <>
      <Head>
        <title>Huddle | Offline at the moment</title>
      </Head>

      <section className="flex flex-col items-center">
        <h1 className="text-xl">Offline at the moment :(</h1>
      </section>
    </>
  );
}
