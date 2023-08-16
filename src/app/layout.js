import './globals.css';
import { Lato } from 'next/font/google';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import { ThemeProvider } from '@mui/material';
import { myTheme } from './utils/theme';
import ReduxProvider from './redux/provider';

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
          <ReduxProvider>
            <Header />
            <main>{children}</main>
            <Footer />
          </ReduxProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
