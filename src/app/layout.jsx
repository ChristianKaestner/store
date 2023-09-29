import './globals.css';
import { Open_Sans } from 'next/font/google';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import { ThemeProvider } from '@mui/material';
import { myTheme } from './lib/theme';
import ReduxProvider from './redux/provider';
import Main from './layout/main/main';

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

export const metadata = {
  title: 'Shop',
  description: 'Some shop',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={openSans.className}>
      <body>
        <ThemeProvider theme={myTheme}>
          <ReduxProvider>
            <Header />
            <Main>{children}</Main>
            <Footer />
          </ReduxProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
