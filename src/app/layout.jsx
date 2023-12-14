import './globals.css';
import { Open_Sans } from 'next/font/google';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import CursorComponent from './components/cursor/cursor';
import RefreshUser from './components/auth/refreshUser';
import { ThemeProvider } from '@mui/material/styles';
import { myTheme } from './lib/theme';
import ReduxProvider from './redux/provider';
import Main from './layout/main/main';

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

export const metadata = {
  title: 'Smokey - Hookah shop',
  description:
    'Store hookahs which is pleased to provide you with a large assortment of hookahs, tobacco, charcoal and accessories. Our prices are the best. Our goods are of high quality.',
  metadataBase: new URL('https://smokey.top'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
    },
  },
  openGraph: {
    title: 'Smokey - Hookah shop',
    description:
      'Store hookahs which is pleased to provide you with a large assortment of hookahs, tobacco, charcoal and accessories. Our prices are the best. Our goods are of high quality.',
    url: 'https://smokey.top',
    siteName: 'Smokey',
    images: [
      {
        url: 'https://smokey-s3.s3.eu-central-1.amazonaws.com/og-logo.png',
        width: 1200,
        height: 1600,
        alt: 'Smokey logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={openSans.className}>
      <body>
        <ThemeProvider theme={myTheme}>
          <ReduxProvider>
            <RefreshUser />
            <CursorComponent />
            <Header />
            <Main>{children}</Main>
            <Footer />
          </ReduxProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
