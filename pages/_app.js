import Navigation from '@/components/Navbar';
import AdminNav from '@/components/AdminNav';
import '@/styles/globals.css';
import { useRouter } from 'next/router'; // Change from 'next/navigation' to 'next/router'
import { useEffect, useState } from 'react';
import Footer from '@/components/Footer';

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    if (router.pathname.startsWith('/admin')) {
      setIsAdmin(true);
    } else {
      setIsAdmin(false);
    }
  }, [router.pathname]);

  return (
    <>
      {isAdmin ? <AdminNav /> : <Navigation />}
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
