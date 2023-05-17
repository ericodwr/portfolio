import Footer from './components/Footer';
import Navigation from './components/Navigation';
import './globals.css';

import { Almarai } from 'next/font/google';
import BackgroundAnimation from './components/BackgroundAnimation';
import SplashScreen from './components/SplashScreen';
import Content from './components/Content';

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

const RootLayout = ({ children }) => {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`lg:mx-[100px] md:mx-[50px] mx-[10px] sm:mx-[20px] relative ${almarai.className}`}
      >
        <Content>{children}</Content>
      </body>
    </html>
  );
};

export default RootLayout;
