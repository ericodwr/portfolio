import Image from 'next/image';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import './globals.css';

import { Almarai } from 'next/font/google';
import BackgroundAnimation from './components/BackgroundAnimation';

export const metadata = {
  title: 'ercdwr',
  description: 'Portofolio',
  icons: {
    icon: '/logo_2.svg',
  },
};

const almarai = Almarai({
  variable: '--font-almarai',
  subsets: ['arabic'],
  weight: '400',
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`lg:mx-[100px] md:mx-[50px] mx-[10px] sm:mx-[20px] relative ${almarai.className}`}
      >
        <div className="fixed w-[89%] h-[100%] -z-10 flex justify-center items-center">
          <div className="w-[100%] lg:w-[50%]">
            <BackgroundAnimation />
          </div>
        </div>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
