import React from 'react';
import { Link } from 'react-router-dom';

const Eco = () => {
  const features = [
    {
      icon: "💰",
      title: "Create revenue generating tokens",
      description: "dHEDGE vault tokens let you set custom fees to maximize revenue for your given strategy",
      link: "See more →"
    },
    {
      icon: "🛠️",
      title: "Leverage 3rd party DeFi tools",
      description: "Unlock money markets, derivatives, and yield sources to execute your best trading strategy",
      link: "See more →"
    },
    {
      icon: "📈",
      title: "Profit with over 100 assets",
      description: "Buy assets covering diverse categories and multiple chains",
      link: "See more →"
    },
    {
      icon: "⚡",
      title: "Automate for unmatched trading efficiency",
      description: "With the dHEDGE SDK, unlock trading strategies that transcend human limits",
      link: "See more →"
    }
  ];

  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-gray-100 group"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-2xl text-white group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-200">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {feature.description}
                  </p>
                 <Link to={'/wallet'}>
                    {feature.link}
                    <svg 
                      className="w-4 h-4 ml-2 transform group-hover/link:translate-x-1 transition-transform duration-200" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M9 5l7 7-7 7" 
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Eco;