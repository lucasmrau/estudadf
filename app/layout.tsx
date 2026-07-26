import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Estuda DF',
  description: 'Plataforma educacional',
  openGraph: {
    images: ['/estudaDF_white_no_sentence.png'],
  },
  twitter: {
    images: ['/estudaDF_white_no_sentence.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='en'
      className={`${montserrat.className} h-full antialiased`}
    >
      <body className='min-h-full flex flex-col'>{children}</body>
    </html>
  );
}
