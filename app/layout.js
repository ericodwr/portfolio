import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'ericodwr',
  description: 'Erico Dwi Rosadi',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta
          name="description"
          content="Erico Dwi Rosadi | Front End Developer"
        />
        <meta name="robots" content="max-image-preview:large" />
        <link rel="canonical" href="https://mitralancar.com/" />
        <meta property="og:locale" content="en_US" />
        <meta
          property="og:site_name"
          content="Erico Dwi Rosadi | Front End Developer"
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Erico Dwi Rosadi | Front End Developer"
        />
        <meta
          property="og:description"
          content="Erico Dwi Rosadi | Front End Developer"
        />
        <meta property="og:url" content="https://mitralancar.com/" />
        <meta
          property="article:published_time"
          content="2022-01-23T23:22:10+00:00"
        />
        <meta
          property="article:modified_time"
          content="2022-01-29T15:42:02+00:00"
        />
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:title"
          content="Erico Dwi Rosadi | Front End Developer"
        />
        <meta
          name="twitter:description"
          content="Erico Dwi Rosadi | Front End Developer"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
