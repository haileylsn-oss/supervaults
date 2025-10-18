import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.png'

const Hero = () => {
  const navigate = useNavigate();

  const handleNavigation = (e) => {
    e.preventDefault();
    navigate('/wallet');
  };

  const menuSections = [
    {
      title: "",
      items: [
        { name: "EARN", href: "/wallet" },
        { name: "PORTFOLIO", href: "/wallet" },
        { name: "REWARDS", href: "/wallet" },
        { name: "THEME", href: "/wallet" },
        { name: "CONTACT WALLET", href: "/wallet" }
      ]
    },
    {
      title: "",
      items: [
        { name: "EXPLORE", href: "/wallet" },
        { name: "VAULTS", href: "/wallet" },
        { name: "PROTOCOLS", href: "/wallet" },
        { name: "$PIGGY", href: "/wallet" },
        { name: "SUPERVAULTS", href: "/wallet" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <img src={logo} alt="" />

        {/* Navigation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {menuSections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="bg-white rounded-2xl shadow-lg p-6">
              {section.title && (
                <h2 className="text-lg font-semibold text-gray-800 mb-4">
                  {section.title}
                </h2>
              )}
              <div className="space-y-3">
                {section.items.map((item, itemIndex) => (
                  <button
                    key={itemIndex}
                    onClick={handleNavigation}
                    className="w-full text-left p-4 rounded-xl hover:bg-blue-50 hover:shadow-md transition-all duration-200 border border-transparent hover:border-blue-200 group"
                  >
                    <span className="text-lg font-medium text-gray-900 group-hover:text-blue-700">
                      {item.name}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Features Grid */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Platform Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-blue-600 text-xl">⚡</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Fast Execution</h3>
              <p className="text-gray-600 text-sm">Quick and efficient trade execution</p>
            </div>
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-green-600 text-xl">🔒</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Secure</h3>
              <p className="text-gray-600 text-sm">Advanced security protocols</p>
            </div>
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-purple-600 text-xl">📊</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Analytics</h3>
              <p className="text-gray-600 text-sm">Comprehensive portfolio analytics</p>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white rounded-xl p-4 text-center shadow-sm">
            <div className="text-2xl font-bold text-blue-600">$66.8M</div>
            <div className="text-sm text-gray-600">Total Supplied</div>
          </div>
          <div className="bg-white rounded-xl p-4 text-center shadow-sm">
            <div className="text-2xl font-bold text-green-600">24+</div>
            <div className="text-sm text-gray-600">Active Pools</div>
          </div>
          <div className="bg-white rounded-xl p-4 text-center shadow-sm">
            <div className="text-2xl font-bold text-purple-600">8.2%</div>
            <div className="text-sm text-gray-600">Avg. Return</div>
          </div>
          <div className="bg-white rounded-xl p-4 text-center shadow-sm">
            <div className="text-2xl font-bold text-orange-600">15K+</div>
            <div className="text-sm text-gray-600">Users</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;