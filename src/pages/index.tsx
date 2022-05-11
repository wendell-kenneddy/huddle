import Head from 'next/head';
import { MainContent } from '../components/MainContent';

export default function Home() {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="A landing page with a single section."
        />
        <meta name="author" content="Wendell Kenneddy" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Huddle" />
        <meta property="og:site_name" content="Huddle" />
        <meta
          property="og:description"
          content="A landing page with a single section."
        />
        <meta property="og:url" content="https://huddlewk.vercel.app/" />
        <meta property="og:locale" content="en-US" />
        <meta property="twitter:card" content="summary" />
        <meta property="twitter:title" content="Huddle" />
        <meta
          property="twitter:description"
          content="A landing page with a single section."
        />
        <meta property="twitter:url" content="https://huddlewk.vercel.app/" />
        <title>Huddle</title>
        <link rel="canonical" href="https://huddlewk.vercel.app/" />
      </Head>

      <main>
        <MainContent />
      </main>
    </>
  );
}
