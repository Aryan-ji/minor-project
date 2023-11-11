import Navigation from '@/components/Navbar';
import AdminNav from '@/components/AdminNav';
import '@/styles/globals.css';
import { useRouter } from 'next/router'; // Change from 'next/navigation' to 'next/router'
import { useEffect, useState } from 'react';
import Footer from '@/components/Footer';
import { SessionProvider } from "next-auth/react";

export default function App({ Component, pageProps: { session, ...pageProps } }) {
  const router = useRouter();
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const exemptedRoutes = ['/client/login', '/admin/login', '/super/login', '/client/register', '/admin/register', '/super/register', '/client/forgot-password', '/admin/forgot-password', '/super/forgot-password', '/client/reset-password', '/admin/reset-password', '/super/reset-password']
    if (router.pathname.includes(exemptedRoutes)) {
      setIsAdmin(false);
      return;
    }

    else if (router.pathname.startsWith('/super')) {
      setIsAdmin(true);
    }

    else if (router.pathname.startsWith('/admin')) {
      setIsAdmin(false);
    }

    else {
      setIsAdmin(false);
    }
    console.log(router.pathname, "router.pathname");
  }, [router.pathname]);

  return (
    <>
      <SessionProvider session={session}>

        {isAdmin ? <AdminNav /> : <Navigation />}
        <Component {...pageProps} />
        <Footer />
      </SessionProvider>
    </>
  );
}
