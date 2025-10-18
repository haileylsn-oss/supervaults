import React from 'react';
import { Link } from 'react-router-dom';

const Progress = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 p-8">
      <div className="max-w-4xl mx-auto pt-16">
        {/* Main heading */}
        <h1 className="text-5xl md:text-6xl font-bold text-center mb-16">
          Individuals power <span className="text-purple-600">Web3</span>
        </h1>

        {/* First section */}
        <div className="mb-20">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Individuals power Web3
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed">
                Web3 networks like Ethereum are decentralized because people all over the world run 
                software that powers it on computers in their homes.
              </p>
            </div>
            <Link to={'/wallet'}>
            <div className="flex-1 bg-gray-100 border border-gray-200 rounded-2xl p-8 min-h-[200px] flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <p className="text-gray-600">Network nodes visualization</p>
              </div>
            </div></Link>
          </div>
        </div>

        {/* Second section */}
        <div className="mb-20">
          <div className="flex flex-col md:flex-row-reverse items-center gap-8">
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Web3 networks reward them
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed">
                Networks like Ethereum, Gnosis Chain and Avalanche reward people who install their 
                validator app, which helps to run the network.
              </p>
            </div>
            <Link to={'/wallet'}>
            <div className="flex-1 bg-gray-100 border border-gray-200 rounded-2xl p-8 min-h-[200px] flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <p className="text-gray-600">Rewards visualization</p>
              </div>
            </div></Link>
          </div>
        </div>

        {/* Third section */}
        <div className="mb-20">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Dappnode makes it easy
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed">
                Dappnode takes care of the technical stuff so anyone can play a role in creating an 
                open, equitable internet and access the rewards that are offered in return.
              </p>
            </div>
            <div className="flex-1 bg-gray-100 border border-gray-200 rounded-2xl p-8 min-h-[200px] flex items-center justify-center">
             <Link to={'/wallet'}><div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <p className="text-gray-600">Easy setup visualization</p>
              </div></Link> 
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <Link to={'/wallet'}>
          <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-8 rounded-2xl text-lg transition duration-300 transform hover:scale-105">
            Get Started with Dappnode
          </button>
          </Link>
          
        </div>
      </div>
    </div>
  );
};

export default Progress;