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
    <div className=" bg-gradient-to-br from-green-50 to-green-100 p-6">
     
 <header className="relative flex h-14 max-h-[56px] flex-row items-center justify-between overflow-y-visible border-b-[0.5px] border-primary-500/60 md:px-2">
      {/* Navigation Items */}
      <nav className="min-w-screen relative inline-flex h-14 min-h-[56px] w-full items-stretch justify-between space-x-3 md:min-w-0 md:justify-start">
        {navItems.map((item, index) => (
          <Link
            key={item.label}
            to={item.path}
            className={`group flex items-center space-x-2 self-stretch border-b-2 px-2 ${
              isActive(item.path) && index === 0
                ? 'border-primary-700 text-primary-900 shadow-[0_0_8px_0_primary-50] hover:shadow-[0_0_8px_0_primary-50] cursor-default'
                : 'border-transparent text-neutral-900'
            }`}
          >
            <div className="flex w-max items-center justify-start gap-1">
              <div className={`uppercase text-base tracking-normal font-mono leading-none antialiased group-hover:font-bold group-hover:text-primary-900 ${
                isActive(item.path) && index === 0 ? 'font-bold' : 'font-normal'
              }`}>
                {item.label}
              </div>
            </div>
          </Link>
        ))}
      </nav>

      {/* Connect Wallet Button - Visible on medium screens and up */}
      <div className="hidden md:flex items-center">
  <button
    onClick={handleConnectWallet}
    className="px-5 py-3 bg-gray-600 hover:bg-green-700 text-white font-mono uppercase text-sm rounded-lg transition-colors duration-200 border border-primary-500/60 w-[150px]"
  >
    Connect Wallet
  </button>
</div>
    </header>


      <div className="max-w-4xl mx-auto flex justify-center">
        {/* Header Section */}
        <img src={logo} alt="" />

      
      </div>
    </div>
  );
};

export default Hero;