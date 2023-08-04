import './globals.css';
import { Lato } from 'next/font/google';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import { ThemeProvider } from '@mui/material';
import { myTheme } from './utils/theme';

const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export const metadata = {
  title: 'Shop',
  description: 'Some shop',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={lato.className}>
      <body>
        <ThemeProvider theme={myTheme}>
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
