import { ReactNode } from 'react';
import { Footer } from '../Footer';
import { Header } from '../Header';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <main className="w-[85vw] max-w-[1200px] mx-auto py-6 md:pt-10">
      <Header />

      {children}

      <Footer />
    </main>
  );
}
