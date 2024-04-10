import type { Metadata } from 'next';
import { roboto } from '@/theme/fonts';
import TanstackQueryProvider from '@/providers/TanstackQueryProvider';
import '../theme/globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Pokemons',
    template: '%s | Pokemons',
  },
  description: 'A simple Pokemons app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={roboto.className}>
        <TanstackQueryProvider>{children}</TanstackQueryProvider>
      </body>
    </html>
  );
}
