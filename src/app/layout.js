import './globals.css';
import { Inter } from 'next/font/google';
import Header from './components/header/header';
import Footer from './components/footer/footer';

const inter = Inter({
  subsets: ['latin'],
});

export const metadata = {
  title: 'Shop',
  description: 'Some shop',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
