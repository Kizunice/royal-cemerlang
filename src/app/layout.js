import { Inter } from 'next/font/google';
import './globals.css';
import FlareCursor from '@/components/UI/FlareCursor';
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Royal Cemerlang Technology',
  description: 'We offer state-of-the art Technology',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <FlareCursor />
        {children}
      </body>
    </html>
  );
}
