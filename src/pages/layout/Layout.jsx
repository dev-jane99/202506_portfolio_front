import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <>
      <Header />
      <main className="min-h-screen px-4 py-8">
        <Outlet /> 
      </main>
      <Footer />
    </>
  );
}

export default Layout;