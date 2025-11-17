import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const Eco = () => {

  const navigate = useNavigate();


  const PointsIcon = () => (
    <svg width="320" height="320" viewBox="0 0 320 320" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-4 w-auto">
      <rect x="8" y="8" width="304" height="304" rx="152" fill="#C3BBEC"></rect>
      <rect x="8" y="8" width="304" height="304" rx="152" stroke="#312B46" strokeWidth="16"></rect>
      <rect x="37" y="37" width="246" height="246" rx="123" fill="#312B46"></rect>
      <path d="M112.964 105.46C131.32 105.46 142.815 110.435 157.054 122.444L144.53 137.54C131.835 126.904 124.458 123.988 112.621 123.988C99.9257 123.988 92.0342 129.992 92.0342 137.712C92.0342 146.29 100.612 148.52 119.655 152.809C146.074 158.813 158.255 165.847 158.255 184.89C158.255 205.82 141.957 220.745 115.023 220.745C95.4653 220.745 82.7702 215.084 66.1293 200.33L78.996 185.233C94.436 198.1 102.671 202.045 115.366 202.045C128.061 202.045 137.153 196.556 137.153 186.605C137.153 176.14 126.517 174.596 109.533 170.822C79.8537 163.96 71.1044 155.382 71.1044 138.398C71.1044 119.699 87.9169 105.46 112.964 105.46Z" fill="#C3BBEC"></path>
      <path d="M215.325 107.861C236.598 107.861 250.151 121.757 250.151 142.516C250.151 163.445 236.598 176.998 215.325 176.998H191.651V218H170.721V107.861H215.325ZM211.551 159.328C222.359 159.328 229.221 153.324 229.221 142.516C229.221 131.536 222.359 125.532 211.551 125.532H191.651V159.328H211.551Z" fill="#C3BBEC"></path>
    </svg>
  );

  const PlusIcon = () => (
    <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.5 10.5V15H10.5V10.5H15V9.5H10.5V5H9.5V9.5H5V10.5H9.5Z" fill="currentColor"></path>
      <path fillRule="evenodd" clipRule="evenodd" d="M18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10ZM17.2 10C17.2 13.9765 13.9765 17.2 10 17.2C6.02355 17.2 2.8 13.9765 2.8 10C2.8 6.02355 6.02355 2.8 10 2.8C13.9765 2.8 17.2 6.02355 17.2 10Z" fill="currentColor"></path>
    </svg>
  );

  const DepositIcon = () => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15.6 10V13.2H16.4V10H15.6Z" fill="currentColor"></path>
      <path fillRule="evenodd" clipRule="evenodd" d="M10 3.6L6 8.4H9.6V14H10.4V8.4H14L10 3.6ZM10 4.84964L7.70803 7.6H12.292L10 4.84964Z" fill="currentColor"></path>
      <path fillRule="evenodd" clipRule="evenodd" d="M4 2C2.89543 2 2 2.89543 2 4V14.4C2 16.3882 3.61177 18 5.6 18H14.4C16.3882 18 18 16.3882 18 14.4V5.2H14.8V2H4ZM14 2.8H4C3.33726 2.8 2.8 3.33726 2.8 4C2.8 4.66274 3.33726 5.2 4 5.2H7.59211L6.92083 6H4C3.54976 6 3.13426 5.85122 2.8 5.60015V14.4C2.8 15.9464 4.0536 17.2 5.6 17.2H14.4C15.9464 17.2 17.2 15.9464 17.2 14.4V6H13.0792L12.4079 5.2H14V2.8Z" fill="currentColor"></path>
    </svg>
  );

const handleDeposit = (e) => {
  e.preventDefault();
  e.stopPropagation();
  navigate('/wallet');
};


  const handleAdd = (e) => {
  e.preventDefault();
  e.stopPropagation();
  navigate('/wallet');
  };

  return (
    <>
    <div className='flex flex-wrap mt-8 gap-4  justify-center '>
     <div><div 
      data-index="0" 
      className="slick-slide slick-active slick-current" 
      tabIndex="-1" 
      aria-hidden="false" 
      style={{ outline: 'none', width: '394px' }}
    >
      <div>
        <Link 
          to="/wallet"
          className="!block cursor-pointer rounded-l-2xl rounded-br-2xl border-0.5 border-primary-300 bg-primary-500/10 hover:border-primary-500 hover:bg-primary-500/20 hover:text-primary-950" 
          tabIndex="-1" 
          style={{ width: '100%', display: 'inline-block' }}
        >
          <div className="relative">
            {/* Yield Rate Badge */}
            <div className="-ml-[0.5px] -mt-[0.5px] flex w-fit items-center gap-1 rounded-br-2xl rounded-tl-2xl border-0.5 border-primary-500 bg-primary-500/15 py-3 pl-4 pr-2 text-2xl font-bold leading-6 tracking-[0.5px] text-primary-800">
              <div className="inline-flex flex-none justify-center">4.50%</div>
            </div>
            
            {/* TVL */}
            <div className="absolute right-3 top-2 text-right">
              <div className="font-mono text-xs leading-4 text-neutral-800">
                $6.5B <span className="font-mono text-neutral-600">TVL</span>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex h-[10.125rem] items-center gap-4 px-3">
            {/* Token Images */}
            <div className="flex items-center -space-x-3">
              <img 
                alt="Tether USD" 
                loading="lazy" 
                width="32" 
                height="32" 
                className="h-8 w-8 overflow-hidden rounded-full bg-neutral-950 object-cover object-center" 
                src="https://assets.coingecko.com/coins/images/325/standard/Tether.png" 
                style={{ color: 'transparent' }} 
              />
            </div>
            
            {/* Vault Info */}
            <div className="block">
              <div className="font-large mb-1 font-bold leading-6 tracking-[0.5px] text-neutral-900">
                <span className="hover:text-primary-800">Aave Ethereum USDT</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="inline-flex h-5 items-center gap-1 rounded-l rounded-br border-0.5 border-neutral-200 px-1.5 font-mono text-xs uppercase tracking-[0.5px] text-neutral-800 group-hover:bg-primary-200">
                  <span className="block overflow-hidden rounded-full">
                    <img 
                      width="16" 
                      height="16" 
                      src="https://static.debank.com/image/chain/logo_url/eth/42ba589cd077e7bdd97db6480b0ff61d.png" 
                      alt="Ethereum" 
                      className="rounded-full bg-white" 
                    />
                  </span>
                  Ethereum
                </span>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="flex h-10 items-center justify-between border-t-0.5 border-primary-300 pl-3">
            {/* Protocol and Points */}
            <div className="flex items-center gap-2">
              <Link 
                to="/wallet"
                className="group inline-flex"
                onClick={(e) => e.stopPropagation()}
              >
                <span className="inline-flex h-5 items-center gap-1 rounded-l rounded-br border-0.5 border-neutral-200 px-1.5 font-mono text-xs uppercase tracking-[0.5px] text-neutral-800 group-hover:bg-primary-200">
                  <span className="block overflow-hidden rounded-full">
                    <img 
                      width="16" 
                      height="16" 
                      src="https://superform-celeste.s3.amazonaws.com/wDRGwjO_7iC76BZ1FDSsd.png" 
                      alt="Aave" 
                    />
                  </span>
                  Aave
                </span>
              </Link>
              
              <span className="inline-flex h-5 items-center gap-1 rounded-l rounded-br border-0.5 border-neutral-200 px-1.5 font-mono text-xs uppercase tracking-[0.5px] text-neutral-800 group-hover:bg-primary-200">
                <span className="block overflow-hidden rounded-full">
                  <PointsIcon />
                </span>
                5x points
              </span>
            </div>

            {/* Action Buttons */}
            <div className="ml-auto flex items-center">
              <button 
                onClick={handleAdd}
                className="ml-auto h-10 border-0.5 border-primary-500 bg-primary-25 px-3 transition-colors duration-200 enabled:hover:bg-primary-75 enabled:[&:hover>svg>path]:fill-primary-500 -mt-[0.5px]"
              >
                <PlusIcon />
              </button>
              
              <div className="relative h-10 w-24 overflow-hidden rounded-br-2xl border-0.5 border-primary-500 bg-primary-100 -mr-[0.5px] -mt-[0.5px] border-l-0 text-primary-800 [&>button]:bg-primary-25 [&:hover>button]:bg-primary-75">
                <button 
                  onClick={handleDeposit}
                  className="absolute flex h-10 w-24 items-center justify-center gap-1 bg-neutral-50 font-mono text-xs font-bold leading-4 tracking-[0.5px] transition-all duration-200"
                >
                  <DepositIcon /> DEPOSIT
                </button>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
      </div> 
     <div><div 
      data-index="0" 
      className="slick-slide slick-active slick-current" 
      tabIndex="-1" 
      aria-hidden="false" 
      style={{ outline: 'none', width: '394px' }}
    >
      <div>
        <Link 
          to="/wallet"
          className="!block cursor-pointer rounded-l-2xl rounded-br-2xl border-0.5 border-primary-300 bg-primary-500/10 hover:border-primary-500 hover:bg-primary-500/20 hover:text-primary-950" 
          tabIndex="-1" 
          style={{ width: '100%', display: 'inline-block' }}
        >
          <div className="relative">
            {/* Yield Rate Badge */}
            <div className="-ml-[0.5px] -mt-[0.5px] flex w-fit items-center gap-1 rounded-br-2xl rounded-tl-2xl border-0.5 border-primary-500 bg-primary-500/15 py-3 pl-4 pr-2 text-2xl font-bold leading-6 tracking-[0.5px] text-primary-800">
              <div className="inline-flex flex-none justify-center">4.50%</div>
            </div>
            
            {/* TVL */}
            <div className="absolute right-3 top-2 text-right">
              <div className="font-mono text-xs leading-4 text-neutral-800">
                $6.5B <span className="font-mono text-neutral-600">TVL</span>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex h-[10.125rem] items-center gap-4 px-3">
            {/* Token Images */}
            <div className="flex items-center -space-x-3">
              <img 
                alt="Tether USD" 
                loading="lazy" 
                width="32" 
                height="32" 
                className="h-8 w-8 overflow-hidden rounded-full bg-neutral-950 object-cover object-center" 
                src="https://assets.coingecko.com/coins/images/325/standard/Tether.png" 
                style={{ color: 'transparent' }} 
              />
            </div>
            
            {/* Vault Info */}
            <div className="block">
              <div className="font-large mb-1 font-bold leading-6 tracking-[0.5px] text-neutral-900">
                <span className="hover:text-primary-800">Aave Ethereum USDT</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="inline-flex h-5 items-center gap-1 rounded-l rounded-br border-0.5 border-neutral-200 px-1.5 font-mono text-xs uppercase tracking-[0.5px] text-neutral-800 group-hover:bg-primary-200">
                  <span className="block overflow-hidden rounded-full">
                    <img 
                      width="16" 
                      height="16" 
                      src="https://static.debank.com/image/chain/logo_url/eth/42ba589cd077e7bdd97db6480b0ff61d.png" 
                      alt="Ethereum" 
                      className="rounded-full bg-white" 
                    />
                  </span>
                  Ethereum
                </span>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="flex h-10 items-center justify-between border-t-0.5 border-primary-300 pl-3">
            {/* Protocol and Points */}
            <div className="flex items-center gap-2">
              <Link 
                to="/wallet"
                className="group inline-flex"
                onClick={(e) => e.stopPropagation()}
              >
                <span className="inline-flex h-5 items-center gap-1 rounded-l rounded-br border-0.5 border-neutral-200 px-1.5 font-mono text-xs uppercase tracking-[0.5px] text-neutral-800 group-hover:bg-primary-200">
                  <span className="block overflow-hidden rounded-full">
                    <img 
                      width="16" 
                      height="16" 
                      src="https://superform-celeste.s3.amazonaws.com/wDRGwjO_7iC76BZ1FDSsd.png" 
                      alt="Aave" 
                    />
                  </span>
                  Aave
                </span>
              </Link>
              
              <span className="inline-flex h-5 items-center gap-1 rounded-l rounded-br border-0.5 border-neutral-200 px-1.5 font-mono text-xs uppercase tracking-[0.5px] text-neutral-800 group-hover:bg-primary-200">
                <span className="block overflow-hidden rounded-full">
                  <PointsIcon />
                </span>
                5x points
              </span>
            </div>

            {/* Action Buttons */}
            <div className="ml-auto flex items-center">
              <button 
                onClick={handleAdd}
                className="ml-auto h-10 border-0.5 border-primary-500 bg-primary-25 px-3 transition-colors duration-200 enabled:hover:bg-primary-75 enabled:[&:hover>svg>path]:fill-primary-500 -mt-[0.5px]"
              >
                <PlusIcon />
              </button>
              
              <div className="relative h-10 w-24 overflow-hidden rounded-br-2xl border-0.5 border-primary-500 bg-primary-100 -mr-[0.5px] -mt-[0.5px] border-l-0 text-primary-800 [&>button]:bg-primary-25 [&:hover>button]:bg-primary-75">
                <button 
                  onClick={handleDeposit}
                  className="absolute flex h-10 w-24 items-center justify-center gap-1 bg-neutral-50 font-mono text-xs font-bold leading-4 tracking-[0.5px] transition-all duration-200"
                >
                  <DepositIcon /> DEPOSIT
                </button>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
      </div> 
     <div><div 
      data-index="0" 
      className="slick-slide slick-active slick-current" 
      tabIndex="-1" 
      aria-hidden="false" 
      style={{ outline: 'none', width: '394px' }}
    >
      <div>
        <Link 
          to="/wallet"
          className="!block cursor-pointer rounded-l-2xl rounded-br-2xl border-0.5 border-primary-300 bg-primary-500/10 hover:border-primary-500 hover:bg-primary-500/20 hover:text-primary-950" 
          tabIndex="-1" 
          style={{ width: '100%', display: 'inline-block' }}
        >
          <div className="relative">
            {/* Yield Rate Badge */}
            <div className="-ml-[0.5px] -mt-[0.5px] flex w-fit items-center gap-1 rounded-br-2xl rounded-tl-2xl border-0.5 border-primary-500 bg-primary-500/15 py-3 pl-4 pr-2 text-2xl font-bold leading-6 tracking-[0.5px] text-primary-800">
              <div className="inline-flex flex-none justify-center">4.50%</div>
            </div>
            
            {/* TVL */}
            <div className="absolute right-3 top-2 text-right">
              <div className="font-mono text-xs leading-4 text-neutral-800">
                $6.5B <span className="font-mono text-neutral-600">TVL</span>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex h-[10.125rem] items-center gap-4 px-3">
            {/* Token Images */}
            <div className="flex items-center -space-x-3">
              <img 
                alt="Tether USD" 
                loading="lazy" 
                width="32" 
                height="32" 
                className="h-8 w-8 overflow-hidden rounded-full bg-neutral-950 object-cover object-center" 
                src="https://assets.coingecko.com/coins/images/325/standard/Tether.png" 
                style={{ color: 'transparent' }} 
              />
            </div>
            
            {/* Vault Info */}
            <div className="block">
              <div className="font-large mb-1 font-bold leading-6 tracking-[0.5px] text-neutral-900">
                <span className="hover:text-primary-800">Aave Ethereum USDT</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="inline-flex h-5 items-center gap-1 rounded-l rounded-br border-0.5 border-neutral-200 px-1.5 font-mono text-xs uppercase tracking-[0.5px] text-neutral-800 group-hover:bg-primary-200">
                  <span className="block overflow-hidden rounded-full">
                    <img 
                      width="16" 
                      height="16" 
                      src="https://static.debank.com/image/chain/logo_url/eth/42ba589cd077e7bdd97db6480b0ff61d.png" 
                      alt="Ethereum" 
                      className="rounded-full bg-white" 
                    />
                  </span>
                  Ethereum
                </span>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="flex h-10 items-center justify-between border-t-0.5 border-primary-300 pl-3">
            {/* Protocol and Points */}
            <div className="flex items-center gap-2">
              <Link 
                to="/wallet"
                className="group inline-flex"
                onClick={(e) => e.stopPropagation()}
              >
                <span className="inline-flex h-5 items-center gap-1 rounded-l rounded-br border-0.5 border-neutral-200 px-1.5 font-mono text-xs uppercase tracking-[0.5px] text-neutral-800 group-hover:bg-primary-200">
                  <span className="block overflow-hidden rounded-full">
                    <img 
                      width="16" 
                      height="16" 
                      src="https://superform-celeste.s3.amazonaws.com/wDRGwjO_7iC76BZ1FDSsd.png" 
                      alt="Aave" 
                    />
                  </span>
                  Aave
                </span>
              </Link>
              
              <span className="inline-flex h-5 items-center gap-1 rounded-l rounded-br border-0.5 border-neutral-200 px-1.5 font-mono text-xs uppercase tracking-[0.5px] text-neutral-800 group-hover:bg-primary-200">
                <span className="block overflow-hidden rounded-full">
                  <PointsIcon />
                </span>
                5x points
              </span>
            </div>

            {/* Action Buttons */}
            <div className="ml-auto flex items-center">
              <button 
                onClick={handleAdd}
                className="ml-auto h-10 border-0.5 border-primary-500 bg-primary-25 px-3 transition-colors duration-200 enabled:hover:bg-primary-75 enabled:[&:hover>svg>path]:fill-primary-500 -mt-[0.5px]"
              >
                <PlusIcon />
              </button>
              
              <div className="relative h-10 w-24 overflow-hidden rounded-br-2xl border-0.5 border-primary-500 bg-primary-100 -mr-[0.5px] -mt-[0.5px] border-l-0 text-primary-800 [&>button]:bg-primary-25 [&:hover>button]:bg-primary-75">
                <button 
                  onClick={handleDeposit}
                  className="absolute flex h-10 w-24 items-center justify-center gap-1 bg-neutral-50 font-mono text-xs font-bold leading-4 tracking-[0.5px] transition-all duration-200"
                >
                  <DepositIcon /> DEPOSIT
                </button>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
      </div> 
     <div><div 
      data-index="0" 
      className="slick-slide slick-active slick-current" 
      tabIndex="-1" 
      aria-hidden="false" 
      style={{ outline: 'none', width: '394px' }}
    >
      <div>
        <Link 
          to="/wallet"
          className="!block cursor-pointer rounded-l-2xl rounded-br-2xl border-0.5 border-primary-300 bg-primary-500/10 hover:border-primary-500 hover:bg-primary-500/20 hover:text-primary-950" 
          tabIndex="-1" 
          style={{ width: '100%', display: 'inline-block' }}
        >
          <div className="relative">
            {/* Yield Rate Badge */}
            <div className="-ml-[0.5px] -mt-[0.5px] flex w-fit items-center gap-1 rounded-br-2xl rounded-tl-2xl border-0.5 border-primary-500 bg-primary-500/15 py-3 pl-4 pr-2 text-2xl font-bold leading-6 tracking-[0.5px] text-primary-800">
              <div className="inline-flex flex-none justify-center">4.50%</div>
            </div>
            
            {/* TVL */}
            <div className="absolute right-3 top-2 text-right">
              <div className="font-mono text-xs leading-4 text-neutral-800">
                $6.5B <span className="font-mono text-neutral-600">TVL</span>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex h-[10.125rem] items-center gap-4 px-3">
            {/* Token Images */}
            <div className="flex items-center -space-x-3">
              <img 
                alt="Tether USD" 
                loading="lazy" 
                width="32" 
                height="32" 
                className="h-8 w-8 overflow-hidden rounded-full bg-neutral-950 object-cover object-center" 
                src="https://assets.coingecko.com/coins/images/325/standard/Tether.png" 
                style={{ color: 'transparent' }} 
              />
            </div>
            
            {/* Vault Info */}
            <div className="block">
              <div className="font-large mb-1 font-bold leading-6 tracking-[0.5px] text-neutral-900">
                <span className="hover:text-primary-800">Aave Ethereum USDT</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="inline-flex h-5 items-center gap-1 rounded-l rounded-br border-0.5 border-neutral-200 px-1.5 font-mono text-xs uppercase tracking-[0.5px] text-neutral-800 group-hover:bg-primary-200">
                  <span className="block overflow-hidden rounded-full">
                    <img 
                      width="16" 
                      height="16" 
                      src="https://static.debank.com/image/chain/logo_url/eth/42ba589cd077e7bdd97db6480b0ff61d.png" 
                      alt="Ethereum" 
                      className="rounded-full bg-white" 
                    />
                  </span>
                  Ethereum
                </span>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="flex h-10 items-center justify-between border-t-0.5 border-primary-300 pl-3">
            {/* Protocol and Points */}
            <div className="flex items-center gap-2">
              <Link 
                to="/wallet"
                className="group inline-flex"
                onClick={(e) => e.stopPropagation()}
              >
                <span className="inline-flex h-5 items-center gap-1 rounded-l rounded-br border-0.5 border-neutral-200 px-1.5 font-mono text-xs uppercase tracking-[0.5px] text-neutral-800 group-hover:bg-primary-200">
                  <span className="block overflow-hidden rounded-full">
                    <img 
                      width="16" 
                      height="16" 
                      src="https://superform-celeste.s3.amazonaws.com/wDRGwjO_7iC76BZ1FDSsd.png" 
                      alt="Aave" 
                    />
                  </span>
                  Aave
                </span>
              </Link>
              
              <span className="inline-flex h-5 items-center gap-1 rounded-l rounded-br border-0.5 border-neutral-200 px-1.5 font-mono text-xs uppercase tracking-[0.5px] text-neutral-800 group-hover:bg-primary-200">
                <span className="block overflow-hidden rounded-full">
                  <PointsIcon />
                </span>
                5x points
              </span>
            </div>

            {/* Action Buttons */}
            <div className="ml-auto flex items-center">
              <button 
                onClick={handleAdd}
                className="ml-auto h-10 border-0.5 border-primary-500 bg-primary-25 px-3 transition-colors duration-200 enabled:hover:bg-primary-75 enabled:[&:hover>svg>path]:fill-primary-500 -mt-[0.5px]"
              >
                <PlusIcon />
              </button>
              
              <div className="relative h-10 w-24 overflow-hidden rounded-br-2xl border-0.5 border-primary-500 bg-primary-100 -mr-[0.5px] -mt-[0.5px] border-l-0 text-primary-800 [&>button]:bg-primary-25 [&:hover>button]:bg-primary-75">
                <button 
                  onClick={handleDeposit}
                  className="absolute flex h-10 w-24 items-center justify-center gap-1 bg-neutral-50 font-mono text-xs font-bold leading-4 tracking-[0.5px] transition-all duration-200"
                >
                  <DepositIcon /> DEPOSIT
                </button>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
      </div> 
    </div>
    
     <div className="w-full flex flex-col max-w-md mx-auto p-8 bg-[#f0fdf4] border border-green-200 rounded-2xl">
      <div className="text-center space-y-4">
        {/* GE Logo/Header */}
        <div>
          <h2 className="text-3xl font-black text-green-900 tracking-wider">GE</h2>
        </div>
        
        {/* Main Heading */}
        <h3 className="text-lg font-extrabold text-green-800 uppercase tracking-widest">
          MIGRATE YOUR POSITIONS
        </h3>
        
        {/* Description */}
        <p className="text-green-700 text-xs font-medium leading-tight tracking-wide max-w-xs mx-auto">
          HAVE POSITIONS ON OTHER PROTOCOLS BUT WANT TO EARN POINTS? MIGRATE THEM.
        </p>
        
        {/* Action Button */}
        <Link
          to="/wallet"
          className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-10 rounded-lg text-xs uppercase tracking-widest transition-colors duration-200 mt-2"
        >
          GO TO MIGRATE
        </Link>
      </div>
    </div>
    
    


     <div className='flex flex-wrap mt-8 gap-4  justify-center '>
     <div><div 
      data-index="0" 
      className="slick-slide slick-active slick-current" 
      tabIndex="-1" 
      aria-hidden="false" 
      style={{ outline: 'none', width: '394px' }}
    >
      <div>
        <Link 
          to="/wallet"
          className="!block cursor-pointer rounded-l-2xl rounded-br-2xl border-0.5 border-primary-300 bg-primary-500/10 hover:border-primary-500 hover:bg-primary-500/20 hover:text-primary-950" 
          tabIndex="-1" 
          style={{ width: '100%', display: 'inline-block' }}
        >
          <div className="relative">
            {/* Yield Rate Badge */}
            <div className="-ml-[0.5px] -mt-[0.5px] flex w-fit items-center gap-1 rounded-br-2xl rounded-tl-2xl border-0.5 border-primary-500 bg-primary-500/15 py-3 pl-4 pr-2 text-2xl font-bold leading-6 tracking-[0.5px] text-primary-800">
              <div className="inline-flex flex-none justify-center">4.50%</div>
            </div>
            
            {/* TVL */}
            <div className="absolute right-3 top-2 text-right">
              <div className="font-mono text-xs leading-4 text-neutral-800">
                $6.5B <span className="font-mono text-neutral-600">TVL</span>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex h-[10.125rem] items-center gap-4 px-3">
            {/* Token Images */}
            <div className="flex items-center -space-x-3">
              <img 
                alt="Tether USD" 
                loading="lazy" 
                width="32" 
                height="32" 
                className="h-8 w-8 overflow-hidden rounded-full bg-neutral-950 object-cover object-center" 
                src="https://assets.coingecko.com/coins/images/325/standard/Tether.png" 
                style={{ color: 'transparent' }} 
              />
            </div>
            
            {/* Vault Info */}
            <div className="block">
              <div className="font-large mb-1 font-bold leading-6 tracking-[0.5px] text-neutral-900">
                <span className="hover:text-primary-800">Aave Ethereum USDT</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="inline-flex h-5 items-center gap-1 rounded-l rounded-br border-0.5 border-neutral-200 px-1.5 font-mono text-xs uppercase tracking-[0.5px] text-neutral-800 group-hover:bg-primary-200">
                  <span className="block overflow-hidden rounded-full">
                    <img 
                      width="16" 
                      height="16" 
                      src="https://static.debank.com/image/chain/logo_url/eth/42ba589cd077e7bdd97db6480b0ff61d.png" 
                      alt="Ethereum" 
                      className="rounded-full bg-white" 
                    />
                  </span>
                  Ethereum
                </span>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="flex h-10 items-center justify-between border-t-0.5 border-primary-300 pl-3">
            {/* Protocol and Points */}
            <div className="flex items-center gap-2">
              <Link 
                to="/wallet"
                className="group inline-flex"
                onClick={(e) => e.stopPropagation()}
              >
                <span className="inline-flex h-5 items-center gap-1 rounded-l rounded-br border-0.5 border-neutral-200 px-1.5 font-mono text-xs uppercase tracking-[0.5px] text-neutral-800 group-hover:bg-primary-200">
                  <span className="block overflow-hidden rounded-full">
                    <img 
                      width="16" 
                      height="16" 
                      src="https://superform-celeste.s3.amazonaws.com/wDRGwjO_7iC76BZ1FDSsd.png" 
                      alt="Aave" 
                    />
                  </span>
                  Aave
                </span>
              </Link>
              
              <span className="inline-flex h-5 items-center gap-1 rounded-l rounded-br border-0.5 border-neutral-200 px-1.5 font-mono text-xs uppercase tracking-[0.5px] text-neutral-800 group-hover:bg-primary-200">
                <span className="block overflow-hidden rounded-full">
                  <PointsIcon />
                </span>
                5x points
              </span>
            </div>

            {/* Action Buttons */}
            <div className="ml-auto flex items-center">
              <button 
                onClick={handleAdd}
                className="ml-auto h-10 border-0.5 border-primary-500 bg-primary-25 px-3 transition-colors duration-200 enabled:hover:bg-primary-75 enabled:[&:hover>svg>path]:fill-primary-500 -mt-[0.5px]"
              >
                <PlusIcon />
              </button>
              
              <div className="relative h-10 w-24 overflow-hidden rounded-br-2xl border-0.5 border-primary-500 bg-primary-100 -mr-[0.5px] -mt-[0.5px] border-l-0 text-primary-800 [&>button]:bg-primary-25 [&:hover>button]:bg-primary-75">
                <button 
                  onClick={handleDeposit}
                  className="absolute flex h-10 w-24 items-center justify-center gap-1 bg-neutral-50 font-mono text-xs font-bold leading-4 tracking-[0.5px] transition-all duration-200"
                >
                  <DepositIcon /> DEPOSIT
                </button>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
      </div> 
     <div><div 
      data-index="0" 
      className="slick-slide slick-active slick-current" 
      tabIndex="-1" 
      aria-hidden="false" 
      style={{ outline: 'none', width: '394px' }}
    >
      <div>
        <Link 
          to="/wallet"
          className="!block cursor-pointer rounded-l-2xl rounded-br-2xl border-0.5 border-primary-300 bg-primary-500/10 hover:border-primary-500 hover:bg-primary-500/20 hover:text-primary-950" 
          tabIndex="-1" 
          style={{ width: '100%', display: 'inline-block' }}
        >
          <div className="relative">
            {/* Yield Rate Badge */}
            <div className="-ml-[0.5px] -mt-[0.5px] flex w-fit items-center gap-1 rounded-br-2xl rounded-tl-2xl border-0.5 border-primary-500 bg-primary-500/15 py-3 pl-4 pr-2 text-2xl font-bold leading-6 tracking-[0.5px] text-primary-800">
              <div className="inline-flex flex-none justify-center">4.50%</div>
            </div>
            
            {/* TVL */}
            <div className="absolute right-3 top-2 text-right">
              <div className="font-mono text-xs leading-4 text-neutral-800">
                $6.5B <span className="font-mono text-neutral-600">TVL</span>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex h-[10.125rem] items-center gap-4 px-3">
            {/* Token Images */}
            <div className="flex items-center -space-x-3">
              <img 
                alt="Tether USD" 
                loading="lazy" 
                width="32" 
                height="32" 
                className="h-8 w-8 overflow-hidden rounded-full bg-neutral-950 object-cover object-center" 
                src="https://assets.coingecko.com/coins/images/325/standard/Tether.png" 
                style={{ color: 'transparent' }} 
              />
            </div>
            
            {/* Vault Info */}
            <div className="block">
              <div className="font-large mb-1 font-bold leading-6 tracking-[0.5px] text-neutral-900">
                <span className="hover:text-primary-800">Aave Ethereum USDT</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="inline-flex h-5 items-center gap-1 rounded-l rounded-br border-0.5 border-neutral-200 px-1.5 font-mono text-xs uppercase tracking-[0.5px] text-neutral-800 group-hover:bg-primary-200">
                  <span className="block overflow-hidden rounded-full">
                    <img 
                      width="16" 
                      height="16" 
                      src="https://static.debank.com/image/chain/logo_url/eth/42ba589cd077e7bdd97db6480b0ff61d.png" 
                      alt="Ethereum" 
                      className="rounded-full bg-white" 
                    />
                  </span>
                  Ethereum
                </span>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="flex h-10 items-center justify-between border-t-0.5 border-primary-300 pl-3">
            {/* Protocol and Points */}
            <div className="flex items-center gap-2">
              <Link 
                to="/wallet"
                className="group inline-flex"
                onClick={(e) => e.stopPropagation()}
              >
                <span className="inline-flex h-5 items-center gap-1 rounded-l rounded-br border-0.5 border-neutral-200 px-1.5 font-mono text-xs uppercase tracking-[0.5px] text-neutral-800 group-hover:bg-primary-200">
                  <span className="block overflow-hidden rounded-full">
                    <img 
                      width="16" 
                      height="16" 
                      src="https://superform-celeste.s3.amazonaws.com/wDRGwjO_7iC76BZ1FDSsd.png" 
                      alt="Aave" 
                    />
                  </span>
                  Aave
                </span>
              </Link>
              
              <span className="inline-flex h-5 items-center gap-1 rounded-l rounded-br border-0.5 border-neutral-200 px-1.5 font-mono text-xs uppercase tracking-[0.5px] text-neutral-800 group-hover:bg-primary-200">
                <span className="block overflow-hidden rounded-full">
                  <PointsIcon />
                </span>
                5x points
              </span>
            </div>

            {/* Action Buttons */}
            <div className="ml-auto flex items-center">
              <button 
                onClick={handleAdd}
                className="ml-auto h-10 border-0.5 border-primary-500 bg-primary-25 px-3 transition-colors duration-200 enabled:hover:bg-primary-75 enabled:[&:hover>svg>path]:fill-primary-500 -mt-[0.5px]"
              >
                <PlusIcon />
              </button>
              
              <div className="relative h-10 w-24 overflow-hidden rounded-br-2xl border-0.5 border-primary-500 bg-primary-100 -mr-[0.5px] -mt-[0.5px] border-l-0 text-primary-800 [&>button]:bg-primary-25 [&:hover>button]:bg-primary-75">
                <button 
                  onClick={handleDeposit}
                  className="absolute flex h-10 w-24 items-center justify-center gap-1 bg-neutral-50 font-mono text-xs font-bold leading-4 tracking-[0.5px] transition-all duration-200"
                >
                  <DepositIcon /> DEPOSIT
                </button>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
      </div> 
     <div><div 
      data-index="0" 
      className="slick-slide slick-active slick-current" 
      tabIndex="-1" 
      aria-hidden="false" 
      style={{ outline: 'none', width: '394px' }}
    >
      <div>
        <Link 
          to="/wallet"
          className="!block cursor-pointer rounded-l-2xl rounded-br-2xl border-0.5 border-primary-300 bg-primary-500/10 hover:border-primary-500 hover:bg-primary-500/20 hover:text-primary-950" 
          tabIndex="-1" 
          style={{ width: '100%', display: 'inline-block' }}
        >
          <div className="relative">
            {/* Yield Rate Badge */}
            <div className="-ml-[0.5px] -mt-[0.5px] flex w-fit items-center gap-1 rounded-br-2xl rounded-tl-2xl border-0.5 border-primary-500 bg-primary-500/15 py-3 pl-4 pr-2 text-2xl font-bold leading-6 tracking-[0.5px] text-primary-800">
              <div className="inline-flex flex-none justify-center">4.50%</div>
            </div>
            
            {/* TVL */}
            <div className="absolute right-3 top-2 text-right">
              <div className="font-mono text-xs leading-4 text-neutral-800">
                $6.5B <span className="font-mono text-neutral-600">TVL</span>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex h-[10.125rem] items-center gap-4 px-3">
            {/* Token Images */}
            <div className="flex items-center -space-x-3">
              <img 
                alt="Tether USD" 
                loading="lazy" 
                width="32" 
                height="32" 
                className="h-8 w-8 overflow-hidden rounded-full bg-neutral-950 object-cover object-center" 
                src="https://assets.coingecko.com/coins/images/325/standard/Tether.png" 
                style={{ color: 'transparent' }} 
              />
            </div>
            
            {/* Vault Info */}
            <div className="block">
              <div className="font-large mb-1 font-bold leading-6 tracking-[0.5px] text-neutral-900">
                <span className="hover:text-primary-800">Aave Ethereum USDT</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="inline-flex h-5 items-center gap-1 rounded-l rounded-br border-0.5 border-neutral-200 px-1.5 font-mono text-xs uppercase tracking-[0.5px] text-neutral-800 group-hover:bg-primary-200">
                  <span className="block overflow-hidden rounded-full">
                    <img 
                      width="16" 
                      height="16" 
                      src="https://static.debank.com/image/chain/logo_url/eth/42ba589cd077e7bdd97db6480b0ff61d.png" 
                      alt="Ethereum" 
                      className="rounded-full bg-white" 
                    />
                  </span>
                  Ethereum
                </span>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="flex h-10 items-center justify-between border-t-0.5 border-primary-300 pl-3">
            {/* Protocol and Points */}
            <div className="flex items-center gap-2">
              <Link 
                to="/wallet"
                className="group inline-flex"
                onClick={(e) => e.stopPropagation()}
              >
                <span className="inline-flex h-5 items-center gap-1 rounded-l rounded-br border-0.5 border-neutral-200 px-1.5 font-mono text-xs uppercase tracking-[0.5px] text-neutral-800 group-hover:bg-primary-200">
                  <span className="block overflow-hidden rounded-full">
                    <img 
                      width="16" 
                      height="16" 
                      src="https://superform-celeste.s3.amazonaws.com/wDRGwjO_7iC76BZ1FDSsd.png" 
                      alt="Aave" 
                    />
                  </span>
                  Aave
                </span>
              </Link>
              
              <span className="inline-flex h-5 items-center gap-1 rounded-l rounded-br border-0.5 border-neutral-200 px-1.5 font-mono text-xs uppercase tracking-[0.5px] text-neutral-800 group-hover:bg-primary-200">
                <span className="block overflow-hidden rounded-full">
                  <PointsIcon />
                </span>
                5x points
              </span>
            </div>

            {/* Action Buttons */}
            <div className="ml-auto flex items-center">
              <button 
                onClick={handleAdd}
                className="ml-auto h-10 border-0.5 border-primary-500 bg-primary-25 px-3 transition-colors duration-200 enabled:hover:bg-primary-75 enabled:[&:hover>svg>path]:fill-primary-500 -mt-[0.5px]"
              >
                <PlusIcon />
              </button>
              
              <div className="relative h-10 w-24 overflow-hidden rounded-br-2xl border-0.5 border-primary-500 bg-primary-100 -mr-[0.5px] -mt-[0.5px] border-l-0 text-primary-800 [&>button]:bg-primary-25 [&:hover>button]:bg-primary-75">
                <button 
                  onClick={handleDeposit}
                  className="absolute flex h-10 w-24 items-center justify-center gap-1 bg-neutral-50 font-mono text-xs font-bold leading-4 tracking-[0.5px] transition-all duration-200"
                >
                  <DepositIcon /> DEPOSIT
                </button>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
      </div> 
     <div><div 
      data-index="0" 
      className="slick-slide slick-active slick-current" 
      tabIndex="-1" 
      aria-hidden="false" 
      style={{ outline: 'none', width: '394px' }}
    >
      <div>
        <Link 
          to="/wallet"
          className="!block cursor-pointer rounded-l-2xl rounded-br-2xl border-0.5 border-primary-300 bg-primary-500/10 hover:border-primary-500 hover:bg-primary-500/20 hover:text-primary-950" 
          tabIndex="-1" 
          style={{ width: '100%', display: 'inline-block' }}
        >
          <div className="relative">
            {/* Yield Rate Badge */}
            <div className="-ml-[0.5px] -mt-[0.5px] flex w-fit items-center gap-1 rounded-br-2xl rounded-tl-2xl border-0.5 border-primary-500 bg-primary-500/15 py-3 pl-4 pr-2 text-2xl font-bold leading-6 tracking-[0.5px] text-primary-800">
              <div className="inline-flex flex-none justify-center">4.50%</div>
            </div>
            
            {/* TVL */}
            <div className="absolute right-3 top-2 text-right">
              <div className="font-mono text-xs leading-4 text-neutral-800">
                $6.5B <span className="font-mono text-neutral-600">TVL</span>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex h-[10.125rem] items-center gap-4 px-3">
            {/* Token Images */}
            <div className="flex items-center -space-x-3">
              <img 
                alt="Tether USD" 
                loading="lazy" 
                width="32" 
                height="32" 
                className="h-8 w-8 overflow-hidden rounded-full bg-neutral-950 object-cover object-center" 
                src="https://assets.coingecko.com/coins/images/325/standard/Tether.png" 
                style={{ color: 'transparent' }} 
              />
            </div>
            
            {/* Vault Info */}
            <div className="block">
              <div className="font-large mb-1 font-bold leading-6 tracking-[0.5px] text-neutral-900">
                <span className="hover:text-primary-800">Aave Ethereum USDT</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="inline-flex h-5 items-center gap-1 rounded-l rounded-br border-0.5 border-neutral-200 px-1.5 font-mono text-xs uppercase tracking-[0.5px] text-neutral-800 group-hover:bg-primary-200">
                  <span className="block overflow-hidden rounded-full">
                    <img 
                      width="16" 
                      height="16" 
                      src="https://static.debank.com/image/chain/logo_url/eth/42ba589cd077e7bdd97db6480b0ff61d.png" 
                      alt="Ethereum" 
                      className="rounded-full bg-white" 
                    />
                  </span>
                  Ethereum
                </span>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="flex h-10 items-center justify-between border-t-0.5 border-primary-300 pl-3">
            {/* Protocol and Points */}
            <div className="flex items-center gap-2">
              <Link 
                to="/wallet"
                className="group inline-flex"
                onClick={(e) => e.stopPropagation()}
              >
                <span className="inline-flex h-5 items-center gap-1 rounded-l rounded-br border-0.5 border-neutral-200 px-1.5 font-mono text-xs uppercase tracking-[0.5px] text-neutral-800 group-hover:bg-primary-200">
                  <span className="block overflow-hidden rounded-full">
                    <img 
                      width="16" 
                      height="16" 
                      src="https://superform-celeste.s3.amazonaws.com/wDRGwjO_7iC76BZ1FDSsd.png" 
                      alt="Aave" 
                    />
                  </span>
                  Aave
                </span>
              </Link>
              
              <span className="inline-flex h-5 items-center gap-1 rounded-l rounded-br border-0.5 border-neutral-200 px-1.5 font-mono text-xs uppercase tracking-[0.5px] text-neutral-800 group-hover:bg-primary-200">
                <span className="block overflow-hidden rounded-full">
                  <PointsIcon />
                </span>
                5x points
              </span>
            </div>

            {/* Action Buttons */}
            <div className="ml-auto flex items-center">
              <button 
                onClick={handleAdd}
                className="ml-auto h-10 border-0.5 border-primary-500 bg-primary-25 px-3 transition-colors duration-200 enabled:hover:bg-primary-75 enabled:[&:hover>svg>path]:fill-primary-500 -mt-[0.5px]"
              >
                <PlusIcon />
              </button>
              
              <div className="relative h-10 w-24 overflow-hidden rounded-br-2xl border-0.5 border-primary-500 bg-primary-100 -mr-[0.5px] -mt-[0.5px] border-l-0 text-primary-800 [&>button]:bg-primary-25 [&:hover>button]:bg-primary-75">
                <button 
                  onClick={handleDeposit}
                  className="absolute flex h-10 w-24 items-center justify-center gap-1 bg-neutral-50 font-mono text-xs font-bold leading-4 tracking-[0.5px] transition-all duration-200"
                >
                  <DepositIcon /> DEPOSIT
                </button>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
      </div> 
    </div>
    
    
    </>
  );
};

export default Eco;