import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.png'
import { Link, useLocation } from 'react-router-dom';


const Hero = () => {
  const navigate = useNavigate();

  const handleNavigation = (e) => {
    e.preventDefault();
    navigate('/wallet');
  };

 const location = useLocation();
  
  const isActive = (path) => {
    return location.pathname === path;
  };

  const navItems = [
    { label: 'Explore', path: '/wallet' },
    { label: 'Vaults', path: '/wallet' },
    { label: 'Protocols', path: '/wallet' },
    { label: '$PIGGY', path: '/wallet' }
  ];

  
  const handleConnectWallet = () => {
    // Add your wallet connection logic here
    console.log('Connecting wallet...');
  };


 return (
  <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 sm:p-6">

    <header className="relative flex h-12 sm:h-14 items-center justify-between border-b border-primary-500/60 px-2 sm:px-4">

      {/* Navigation Items */}
      <nav className="flex items-center gap-2 w-full overflow-x-auto no-scrollbar">
        {navItems.map((item, index) => (
          <Link
            key={item.label}
            to={item.path}
            className={`group flex items-center px-2 pb-1 border-b-2 whitespace-nowrap
              text-xs sm:text-sm
              ${isActive(item.path) && index === 0
                ? 'border-primary-700 text-primary-900 font-bold'
                : 'border-transparent text-neutral-900'
              }`}
          >
            {item.label}
          </Link>
        ))}
      </nav>

      {/* Connect Wallet Button */}
     <div className="flex">
  <Link to="/wallet">
    <button className="px-3 sm:px-5 py-2 sm:py-3 
      bg-gray-600 hover:bg-green-700 
      text-white text-xs sm:text-sm font-mono uppercase 
      rounded-lg border border-primary-500/60 w-[120px] sm:w-[150px]">
      Connect Wallet
    </button>
  </Link>
</div>

    </header>

    {/* Logo Section */}
    <div className="max-w-4xl mx-auto flex justify-center mt-4">
      <img src={logo} alt="logo"
        className="w-32 sm:w-48 md:w-60"
      />
    </div>

  </div>
);

};

export default Hero;