import { Inter } from 'next/font/google';
import './globals.css';
import AuthProvider from '@/components/AuthProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: "Stargame Studio | Bot Department",
  description: "Elite Bot Hosting & Management",
  icons: { icon: 'https://i.postimg.cc/fyV0wV6B/Summer-icon.png' } // Summer icon for the tab!
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#fafafa] text-slate-900`}>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
