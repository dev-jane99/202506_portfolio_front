import React, { useState } from 'react';

const snsData = [
  { id: 'linkedin', url: 'https://www.linkedin.com/in/jane-ryo', display: 'Jane Ryo' },
  { id: 'github', url: 'https://github.com/dev-jane99', display: 'https://github.com/dev-jane99' }
];

const Footer = () => {
  const [popupContent, setPopupContent] = useState(null);

  const handleSnsClick = (sns) => {
    setPopupContent(popupContent === sns.id ? null : sns.id);
  };

  const handlePopupClick = (url) => {
    window.open(url, '_blank');
  };

  return (
    <footer className="w-full fixed bottom-0 left-0 bg-white text-black flex justify-between items-center px-4 py-3 z-50">
      {/* SNS */}
      <div className="flex gap-4">
        {snsData.map((sns) => (
          <div key={sns.id} className="relative flex items-center">
            <img
              src={`/assets/layout/${sns.id}.svg`}
              alt={sns.id}
              onClick={() => handleSnsClick(sns)}
              className="w-5 h-5 cursor-pointer hover:scale-110 transition-transform"
            />
            {popupContent === sns.id && (
              <div
                onClick={() => handlePopupClick(sns.url)}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-white text-black px-3 py-1 rounded-md shadow-md text-xs cursor-pointer hover:bg-gray-100 z-10"
              >
                <p className="m-0">{sns.display}</p>
                <div className="absolute bottom-[-6px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-6 border-r-6 border-t-6 border-transparent border-t-white"></div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Logo */}
      <div className="flex items-center">
          <img
            src="/assets/layout/logo.svg"
            alt="logo"
            className="block dark:hidden w-24"
          />
          <img
            src="/assets/layout/logo_white.svg"
            alt="logo"
            className="hidden dark:block w-24"
          />
        </div>

      {/* Info */}
      <div className="text-[9px] text-right">
        <p className="m-0">Portfolio purpose</p>
        <p className="m-0">Update 2025.ver</p>
      </div>
    </footer>
  );
};

export default Footer;
