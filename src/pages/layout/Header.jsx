import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

function Header() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white dark:bg-zinc-900 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* 로고 */}
        <div className="flex items-center">
          <img
            src="/assets/layout/logo.svg"
            alt="logo"
            className="w-32 max-w-[97px] h-auto"
          />
        </div>
        <nav className="flex items-center gap-[63px] text-2xl font-medium">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/about" className="hover:underline">About</Link>
          <Link to="/projects" className="hover:underline">Projects</Link>
          <Link
            to="/contact"
            className="bg-black text-white px-4 py-2 rounded hover:opacity-90 transition"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;