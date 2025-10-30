import React from 'react';
import { Link } from 'react-router-dom';

const Progress = () => {
  const vaults = [
    {
      id: 1,
      name: "SuperUSDC",
      network: "Ethereum",
      yieldRate: "7.51%",
      description: "SuperUSDC optimizes USDC returns across blue-chip lending protocols on Ethereum by automatically rebalancing between vaults using predictive onchain data. Audited by yAudit, leading security researchers, and secured by Yearn v3.",
      yieldSources: [
        { name: "Morpho", logo: "https://superform-celeste.s3.amazonaws.com/-SV7BKsbN08y6508qTPYf.png" },
        { name: "Euler", logo: "https://superform-celeste.s3.amazonaws.com/MNcP3zmKIIvr-Mu_l076O.png" },
        { name: "Fluid", logo: "https://superform-celeste.s3.amazonaws.com/dWNPR_urPlRrTaJuWfkpo.png" },
        { name: "Aave", logo: "https://superform-celeste.s3.amazonaws.com/wDRGwjO_7iC76BZ1FDSsd.png" }
      ],
      tvl: "45.4M USDC",
      assetLogo: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png",
      chainLogo: "https://static.debank.com/image/chain/logo_url/eth/42ba589cd077e7bdd97db6480b0ff61d.png",
      points: "20X POINTS",
      colSpan: "lg:col-span-1"
    },
    {
      id: 2,
      name: "SuperUSDC",
      network: "Base",
      yieldRate: "6.71%",
      description: "SuperUSDC optimizes USDC returns across blue-chip lending protocols on Base by automatically rebalancing between vaults using predictive onchain data. Audited by yAudit, leading security researchers, and secured by Yearn v3.",
      yieldSources: [
        { name: "Euler", logo: "https://superform-celeste.s3.amazonaws.com/MNcP3zmKIIvr-Mu_l076O.png" },
        { name: "Morpho", logo: "https://superform-celeste.s3.amazonaws.com/-SV7BKsbN08y6508qTPYf.png" },
        { name: "Fluid", logo: "https://superform-celeste.s3.amazonaws.com/dWNPR_urPlRrTaJuWfkpo.png" }
      ],
      tvl: "3.85M USDC",
      assetLogo: "https://raw.githubusercontent.com/sushiswap/list/master/logos/token-logos/token/usdc.jpg",
      chainLogo: "https://static.debank.com/image/chain/logo_url/base/ccc1513e4f390542c4fb2f4b88ce9579.png",
      points: "20X POINTS",
      colSpan: "lg:col-span-1"
    },
    {
      id: 3,
      name: "SuperETH",
      network: "Ethereum",
      yieldRate: "3.28%",
      description: "SuperETH optimizes WETH returns across blue-chip lending protocols on Ethereum by automatically rebalancing between vaults using predictive onchain data. Audited by yAudit, leading security researchers, and secured by Yearn v3.",
      yieldSources: [
        { name: "Morpho", logo: "https://superform-celeste.s3.amazonaws.com/-SV7BKsbN08y6508qTPYf.png" },
        { name: "Euler", logo: "https://superform-celeste.s3.amazonaws.com/MNcP3zmKIIvr-Mu_l076O.png" }
      ],
      tvl: "6.44K WETH",
      assetLogo: "https://raw.githubusercontent.com/sushiswap/list/master/logos/token-logos/network/optimism/0x4200000000000000000000000000000000000006.jpg",
      chainLogo: "https://static.debank.com/image/chain/logo_url/eth/42ba589cd077e7bdd97db6480b0ff61d.png",
      points: "20X POINTS",
      colSpan: "lg:col-span-2"
    }
  ];

  const YieldIcon = () => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-md text-primary-800 ml-1 h-8 w-8 order-last hidden md:inline">
      <path fillRule="evenodd" clipRule="evenodd" d="M6.38817 3.81276L4.51601 2.4176L5.02907 4.69537L3.63392 6.56753L5.91168 6.05447L7.78385 7.44963L7.27079 5.17186L8.66594 3.2997L6.38817 3.81276ZM6.24928 4.8691L6.15934 4.88936L6.1218 4.86138C6.11232 4.86418 6.10286 4.86698 6.09341 4.86979L6.10567 4.92421L6.05058 4.99813L6.14052 4.97787L6.21445 5.03296L6.19419 4.94302L6.24928 4.8691Z" fill="currentColor"></path>
      <path fillRule="evenodd" clipRule="evenodd" d="M12.8509 12.7332L10.3547 10.873L11.0388 13.91L9.17856 16.4062L12.2156 15.7221L14.7118 17.5823L14.0277 14.5453L15.8879 12.0491L12.8509 12.7332ZM12.987 14.2683C12.6332 14.3383 12.2668 14.3963 11.8901 14.4412L11.5952 14.8368L12.4444 14.6455L13.1424 15.1657L12.9511 14.3165L12.987 14.2683ZM12.0018 13.6349C12.1104 13.6203 12.2179 13.6046 12.3242 13.5878L11.9241 13.2896L12.0018 13.6349Z" fill="currentColor"></path>
      <path fillRule="evenodd" clipRule="evenodd" d="M4.43154 4.66044C2.93376 5.37441 2.00302 6.37386 2.00302 7.48009V9.76385L2.00164 9.83306C1.99885 10.0017 2.00019 10.1711 2.00152 10.3393C2.00227 10.4343 2.00302 10.529 2.00302 10.6229C2.00302 11.1636 2.22547 11.6797 2.62947 12.1498C2.66735 12.1939 2.70682 12.2375 2.74785 12.2808C3.14451 12.6989 3.68713 13.0775 4.34528 13.4009C5.7787 14.105 7.75378 14.5432 9.93721 14.5514L10.5005 13.7956L10.492 13.7581C10.3296 13.7632 10.1655 13.7658 10 13.7658C9.72928 13.7658 9.46251 13.7589 9.20033 13.7454V11.3893C9.45126 11.4015 9.7056 11.408 9.96281 11.4086L9.78551 10.6215C6.85161 10.5818 4.47975 9.73229 3.40774 8.67841L3.10472 8.38051L2.95158 8.07449C2.84971 7.87093 2.80273 7.67367 2.80273 7.48009C2.80273 7.40939 2.80957 7.33676 2.82366 7.26257L2.42558 7.35223L4.43154 4.66044ZM2.80272 10.6229C2.80272 11.2015 3.26092 11.9096 4.40213 12.5413V10.2857C4.11283 10.1463 3.845 9.9963 3.60128 9.83687C3.31301 9.64829 3.05849 9.44656 2.8421 9.23383C2.83811 9.26212 2.83448 9.29056 2.83118 9.31917C2.81452 9.46381 2.80639 9.61287 2.80273 9.7698L2.80272 10.6229ZM8.40063 13.683C7.18604 13.555 6.09471 13.2856 5.20183 12.9214V10.6232C6.13174 10.9664 7.21887 11.2122 8.40063 11.3301V13.683Z" fill="currentColor"></path>
      <path d="M15.6547 13.4009C15.5788 13.4382 15.5013 13.4747 15.4224 13.5105L17.0963 11.2644L17.0114 11.2835C17.1387 11.053 17.1973 10.8297 17.1973 10.6229L17.1973 10.5617V9.77279C17.1937 9.61482 17.1856 9.46483 17.1688 9.31931C17.1655 9.29067 17.1619 9.26221 17.1579 9.23388C16.9415 9.44661 16.687 9.64833 16.3987 9.83691L16.3976 9.83761V11.4217L15.5979 11.6019V10.2857C14.9082 10.6178 14.0965 10.8891 13.1988 11.0818V12.1423L12.9653 12.1949L12.3991 11.7729V11.2288C12.1959 11.2602 11.9892 11.2876 11.7793 11.3111L10.8268 10.6012C13.4766 10.461 15.5959 9.65797 16.5923 8.67845L16.8953 8.38055L17.0485 8.07453C17.1504 7.87096 17.1973 7.67368 17.1973 7.48009C17.1973 6.85318 16.6593 6.07411 15.2971 5.40494C13.9828 4.75927 12.1111 4.33723 10 4.33723C9.4696 4.33723 8.95427 4.36388 8.4591 4.41402L9.0828 3.57708C9.38379 3.5602 9.68985 3.55152 10 3.55152C14.4167 3.55152 17.997 5.3104 17.997 7.48009V9.76682L17.9984 9.83278C18.0012 10.0015 17.9998 10.171 17.9985 10.3392C17.9979 10.4168 17.9973 10.4941 17.997 10.571L17.997 10.6229C17.997 11.7042 17.1072 12.6873 15.6547 13.4009Z" fill="currentColor"></path>
    </svg>
  );

  const PointsIcon = () => (
    <svg width="320" height="320" viewBox="0 0 320 320" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-5 w-auto">
      <rect x="8" y="8" width="304" height="304" rx="152" fill="#C3BBEC"></rect>
      <rect x="8" y="8" width="304" height="304" rx="152" stroke="#312B46" strokeWidth="16"></rect>
      <rect x="37" y="37" width="246" height="246" rx="123" fill="#312B46"></rect>
      <path d="M112.964 105.46C131.32 105.46 142.815 110.435 157.054 122.444L144.53 137.54C131.835 126.904 124.458 123.988 112.621 123.988C99.9257 123.988 92.0342 129.992 92.0342 137.712C92.0342 146.29 100.612 148.52 119.655 152.809C146.074 158.813 158.255 165.847 158.255 184.89C158.255 205.82 141.957 220.745 115.023 220.745C95.4653 220.745 82.7702 215.084 66.1293 200.33L78.996 185.233C94.436 198.1 102.671 202.045 115.366 202.045C128.061 202.045 137.153 196.556 137.153 186.605C137.153 176.14 126.517 174.596 109.533 170.822C79.8537 163.96 71.1044 155.382 71.1044 138.398C71.1044 119.699 87.9169 105.46 112.964 105.46Z" fill="#C3BBEC"></path>
      <path d="M215.325 107.861C236.598 107.861 250.151 121.757 250.151 142.516C250.151 163.445 236.598 176.998 215.325 176.998H191.651V218H170.721V107.861H215.325ZM211.551 159.328C222.359 159.328 229.221 153.324 229.221 142.516C229.221 131.536 222.359 125.532 211.551 125.532H191.651V159.328H211.551Z" fill="#C3BBEC"></path>
    </svg>
  );

  return (
    <div className="mx-auto grid w-full grid-cols-1 gap-6 lg:max-w-7xl lg:grid-cols-2">
      {vaults.map((vault) => (
        <Link
          key={vault.id}
          to="/wallet"
          className={`relative inline-flex w-full flex-col items-center overflow-hidden rounded-3xl rounded-b-3xl border-[.5px] border-primary-500 bg-primary-500/10 hover:bg-primary-500/20 ${vault.colSpan}`}
        >
          {/* Header Section */}
          <div className="inline-flex h-24 w-full items-center justify-start bg-primary-500/10">
            <div className="self-grow inline-flex flex-1 items-center space-x-2 space-y-1 self-stretch py-6 pl-5 lg:rounded-tl-3xl">
              <div className="sup-asset-pair inline-flex relative">
                <span className="sup-asset inline-flex rounded-full overflow-hidden h-8 w-8">
                  <img src={vault.assetLogo} className="object-cover object-center" alt={vault.name} />
                </span>
                <span className="sup-asset inline-flex rounded-full overflow-hidden h-4 w-4 absolute bottom-0 bg-neutral-950 right-0">
                  <img src={vault.chainLogo} className="object-cover object-center" alt={vault.network} />
                </span>
              </div>
              <div className="flex flex-col justify-center">
                <p className="font-sans font-bold antialiased text-[24px] normal-case leading-[32px] tracking-wide text-neutral-950">
                  {vault.name}
                </p>
                <p className="uppercase font-mono font-bold antialiased text-[14px] leading-4 tracking-wide text-neutral-925">
                  {vault.network}
                </p>
              </div>
            </div>
            <div className="h-full min-w-[164px] bg-primary-500/20 px-6 py-8">
              <div className="uppercase font-mono font-bold antialiased text-[32px] leading-none tracking-wide text-primary-800 shadow-[0_0_8px_0_primary-50]">
                <div className="inline-flex flex-none justify-center cursor-help">
                  <div className="sup-asset-label inline-flex w-fit items-center gap-0.5 h-full">
                    <YieldIcon />
                    <div className="inline-flex flex-col justify-center items-start shrink-0 gap-1">
                      {vault.yieldRate}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="flex w-full flex-col items-start justify-start px-6 py-4">
            <div className="flex w-full flex-col items-center justify-start gap-5 self-stretch lg:items-start">
              {/* Description */}
              <div className="flex flex-col items-center justify-start gap-1 self-stretch lg:items-start">
                <p className="uppercase text-xs font-mono font-normal antialiased leading-none tracking-[1px] text-primary-800">
                  DESCRIPTION
                </p>
                <div className="inline-flex items-center justify-center gap-2 self-stretch lg:justify-start">
                  <p className="tracking-normal font-mono font-normal antialiased text-center text-[14px] normal-case leading-4 text-neutral-900 lg:text-left">
                    {vault.description}
                  </p>
                </div>
              </div>

              {/* Yield Sources */}
              <div className="flex h-9 flex-col items-center justify-start gap-1 self-stretch lg:items-start">
                <p className="uppercase text-xs font-mono font-normal antialiased leading-none tracking-[1px] text-primary-800">
                  YIELD SOURCES
                </p>
                <div className="inline-flex items-center justify-center gap-2 self-stretch text-neutral-900 lg:justify-start">
                  {vault.yieldSources.map((source, index) => (
                    <div key={index} className="sup-badge-protocol border-none p-0">
                      <small className="hidden">Protocol</small>
                      <img
                        alt={source.name}
                        loading="lazy"
                        width="20"
                        height="20"
                        className="max-w-[17px] max-h-[17px] inline-flex mr-0.5"
                        src={source.logo}
                        style={{ color: 'transparent' }}
                      />
                      <span>{source.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* TVL */}
              <div className="inline-flex flex-col items-center justify-start space-y-8 self-stretch lg:flex-row lg:items-start lg:gap-2 lg:space-x-8 lg:space-y-0">
                <div className="inline-flex shrink grow basis-0 flex-col items-center justify-start gap-1 lg:items-start">
                  <p className="uppercase text-xs font-mono font-normal antialiased leading-none tracking-[1px] text-primary-800">
                    TVL
                  </p>
                  <p className="uppercase text-xs tracking-normal font-mono font-normal antialiased leading-none text-neutral-900">
                    {vault.tvl}
                  </p>
                </div>
              </div>
            </div>

            {/* Footer Actions */}
            <div className="mt-8 flex w-full items-center justify-between">
              
              
               <Link
       
          to="/wallet"
                ><button
                type="button"
                className="group inline-flex p-2 gap-2 items-center transition-colors duration-200 enabled:hover:bg-primary-900 enabled:hover:text-primary-50 enabled:hover:border-primary-500 enabled:hover:border-0.5 enabled:focus-visible:bg-primary-800 enabled:focus-visible:text-primary-25 enabled:active:bg-primary-700 enabled:active:text-primary-50 enabled:active:border-primary-400 disabled:bg-neutral-75 disabled:text-neutral-900 h-10 rounded-[300px] border-[.5px] border-primary-600 bg-neutral-950 px-6 py-4 text-neutral-50"
                // onClick={(e) => e.preventDefault()} // Prevent navigation when button is clicked
              >
                
                <span className="uppercase font-mono antialiased text-current group-disabled:opacity-44 font-bold text-[14px] leading-4 tracking-[.5px]">
                  Deposit
                </span>
              </button></Link>
              <div className="inline-flex h-7 items-center justify-start gap-2 rounded-bl rounded-br rounded-tl border border-primary-500/30 bg-primary-500/10 p-1">
                <PointsIcon />
                <p className="uppercase text-xs font-mono font-bold antialiased sup-cred leading-none tracking-wide text-neutral-900">
                  {vault.points}
                </p>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Progress;