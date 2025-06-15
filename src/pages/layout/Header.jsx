import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-white shadow p-4 flex gap-4">
      <img
  src="/assets/layout/logo.svg"
  alt="logo"
  className="block dark:hidden w-40"
/>

{/* 어두운 배경용 로고 */}
<img
  src="/assets/layout/logo_white.svg"
  alt="logo"
  className="hidden dark:block w-40"
/>
      <Link to="/" className="text-blue-500 hover:underline">Home</Link>
      <Link to="/about" className="text-blue-500 hover:underline">About</Link>
    </header>
  );
}

export default Header;