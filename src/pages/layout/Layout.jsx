import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white dark:bg-zinc-900 text-black dark:text-white">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Layout;