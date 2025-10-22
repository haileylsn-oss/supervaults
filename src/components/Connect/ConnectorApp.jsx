import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ConnectorApp = () => {
  const [whaleFilter, setWhaleFilter] = useState('10000');
  const [hotVaultsFilter, setHotVaultsFilter] = useState('d');
  const [hotVaultsTab, setHotVaultsTab] = useState('inflows');

  const whaleTransactions = [
    { value: "$54.38K", vault: "SuperUSDC", network: "base", time: "4 hours ago", txHash: "0x668808f4750d3d49c138b34bbe70d8be79ead42c921ab53275b6e50722ebf14b", assetLogo: "https://raw.githubusercontent.com/sushiswap/list/master/logos/token-logos/token/usdc.jpg", chainLogo: "https://static.debank.com/image/chain/logo_url/base/ccc1513e4f390542c4fb2f4b88ce9579.png" },
    { value: "$19.27K", vault: "SuperUSDC", network: "eth", time: "1 day ago", txHash: "0x96f750b83cdd5e003f13168acf591990e05d9fd1281fe182794181c8498c3cb4", assetLogo: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png", chainLogo: "https://static.debank.com/image/chain/logo_url/eth/42ba589cd077e7bdd97db6480b0ff61d.png" },
    { value: "$23.35K", vault: "Aave BNB Chain CAKE", network: "bsc", time: "1 day ago", txHash: "0x6a60c61450f357c1a6410a37c21703df592b805dd4c0f6ffab25a18a5bb1f8e4", assetLogo: "https://assets.coingecko.com/coins/images/12632/small/pancakeswap-cake-logo_%281%29.png?1696512440", chainLogo: "https://static.debank.com/image/chain/logo_url/bsc/bc73fa84b7fc5337905e527dadcbc854.png" },
    { value: "$39.15K", vault: "SuperUSDC", network: "base", time: "3 days ago", txHash: "0xd0f943c71aa3e7efe07b44e8a4f9f7070f32446e5341009422696ee0de716a62", assetLogo: "https://raw.githubusercontent.com/sushiswap/list/master/logos/token-logos/token/usdc.jpg", chainLogo: "https://static.debank.com/image/chain/logo_url/base/ccc1513e4f390542c4fb2f4b88ce9579.png" },
    { value: "$7.08M", vault: "SuperUSDC", network: "eth", time: "3 days ago", txHash: "0x4334e0805e1ef9e1227f0df879332224d2cc8adfb68d16f930d86543987cf273", assetLogo: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png", chainLogo: "https://static.debank.com/image/chain/logo_url/eth/42ba589cd077e7bdd97db6480b0ff61d.png" }
  ];

  const hotVaults = [
    { apy: "6.72%", tvl: "$3.8M", vault: "SuperUSDC", deposits: "16", inflows: "$58.96K", network: "base", assetLogo: "https://raw.githubusercontent.com/sushiswap/list/master/logos/token-logos/token/usdc.jpg", chainLogo: "https://static.debank.com/image/chain/logo_url/base/ccc1513e4f390542c4fb2f4b88ce9579.png" },
    { apy: "8.00%", tvl: "$4.36M", vault: "Wrapped Arcadia V2 USDC", deposits: "2", inflows: "$3.22K", network: "base", assetLogo: "https://raw.githubusercontent.com/sushiswap/list/master/logos/token-logos/token/usdc.jpg", chainLogo: "https://static.debank.com/image/chain/logo_url/base/ccc1513e4f390542c4fb2f4b88ce9579.png" },
    { apy: "21.68%", tvl: "$102.36M", vault: "Avantis USDC", deposits: "5", inflows: "$2.24K", network: "base", assetLogo: "https://raw.githubusercontent.com/sushiswap/list/master/logos/token-logos/token/usdc.jpg", chainLogo: "https://static.debank.com/image/chain/logo_url/base/ccc1513e4f390542c4fb2f4b88ce9579.png" },
    { apy: "10.41%", tvl: "$7.18M", vault: "High Yield Clearstar USDC", deposits: "1", inflows: "$2.00K", network: "base", assetLogo: "https://raw.githubusercontent.com/sushiswap/list/master/logos/token-logos/token/usdc.jpg", chainLogo: "https://static.debank.com/image/chain/logo_url/base/ccc1513e4f390542c4fb2f4b88ce9579.png" }
  ];

  const ToggleIcon = ({ checked }) => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      {checked ? (
        <>
          <path d="M10 13C11.6569 13 13 11.6569 13 10C13 8.34315 11.6569 7 10 7C8.34315 7 7 8.34315 7 10C7 11.6569 8.34315 13 10 13Z" fill="currentColor"></path>
          <path fillRule="evenodd" clipRule="evenodd" d="M10 16C13.3137 16 16 13.3137 16 10C16 6.68629 13.3137 4 10 4C6.68629 4 4 6.68629 4 10C4 13.3137 6.68629 16 10 16ZM10 15.1429C12.8403 15.1429 15.1429 12.8403 15.1429 10C15.1429 7.15968 12.8403 4.85714 10 4.85714C7.15968 4.85714 4.85714 7.15968 4.85714 10C4.85714 12.8403 7.15968 15.1429 10 15.1429Z" fill="currentColor"></path>
        </>
      ) : (
        <path fillRule="evenodd" clipRule="evenodd" d="M10 16C13.3137 16 16 13.3137 16 10C16 6.68629 13.3137 4 10 4C6.68629 4 4 6.68629 4 10C4 13.3137 6.68629 16 10 16ZM10 15.1429C12.8403 15.1429 15.1429 12.8403 15.1429 10C15.1429 7.15968 12.8403 4.85714 10 4.85714C7.15968 4.85714 4.85714 7.15968 4.85714 10C4.85714 12.8403 7.15968 15.1429 10 15.1429Z" fill="currentColor"></path>
      )}
    </svg>
  );

  const YieldIcon = () => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-md h-4 w-4 text-primary-800 order-last">
      <path fillRule="evenodd" clipRule="evenodd" d="M6.38817 3.81276L4.51601 2.4176L5.02907 4.69537L3.63392 6.56753L5.91168 6.05447L7.78385 7.44963L7.27079 5.17186L8.66594 3.2997L6.38817 3.81276ZM6.24928 4.8691L6.15934 4.88936L6.1218 4.86138C6.11232 4.86418 6.10286 4.86698 6.09341 4.86979L6.10567 4.92421L6.05058 4.99813L6.14052 4.97787L6.21445 5.03296L6.19419 4.94302L6.24928 4.8691Z" fill="currentColor"></path>
      <path fillRule="evenodd" clipRule="evenodd" d="M12.8509 12.7332L10.3547 10.873L11.0388 13.91L9.17856 16.4062L12.2156 15.7221L14.7118 17.5823L14.0277 14.5453L15.8879 12.0491L12.8509 12.7332ZM12.987 14.2683C12.6332 14.3383 12.2668 14.3963 11.8901 14.4412L11.5952 14.8368L12.4444 14.6455L13.1424 15.1657L12.9511 14.3165L12.987 14.2683ZM12.0018 13.6349C12.1104 13.6203 12.2179 13.6046 12.3242 13.5878L11.9241 13.2896L12.0018 13.6349Z" fill="currentColor"></path>
      <path fillRule="evenodd" clipRule="evenodd" d="M4.43154 4.66044C2.93376 5.37441 2.00302 6.37386 2.00302 7.48009V9.76385L2.00164 9.83306C1.99885 10.0017 2.00019 10.1711 2.00152 10.3393C2.00227 10.4343 2.00302 10.529 2.00302 10.6229C2.00302 11.1636 2.22547 11.6797 2.62947 12.1498C2.66735 12.1939 2.70682 12.2375 2.74785 12.2808C3.14451 12.6989 3.68713 13.0775 4.34528 13.4009C5.7787 14.105 7.75378 14.5432 9.93721 14.5514L10.5005 13.7956L10.492 13.7581C10.3296 13.7632 10.1655 13.7658 10 13.7658C9.72928 13.7658 9.46251 13.7589 9.20033 13.7454V11.3893C9.45126 11.4015 9.7056 11.408 9.96281 11.4086L9.78551 10.6215C6.85161 10.5818 4.47975 9.73229 3.40774 8.67841L3.10472 8.38051L2.95158 8.07449C2.84971 7.87093 2.80273 7.67367 2.80273 7.48009C2.80273 7.40939 2.80957 7.33676 2.82366 7.26257L2.42558 7.35223L4.43154 4.66044ZM2.80272 10.6229C2.80272 11.2015 3.26092 11.9096 4.40213 12.5413V10.2857C4.11283 10.1463 3.845 9.9963 3.60128 9.83687C3.31301 9.64829 3.05849 9.44656 2.8421 9.23383C2.83811 9.26212 2.83448 9.29056 2.83118 9.31917C2.81452 9.46381 2.80639 9.61287 2.80273 9.7698L2.80272 10.6229ZM8.40063 13.683C7.18604 13.555 6.09471 13.2856 5.20183 12.9214V10.6232C6.13174 10.9664 7.21887 11.2122 8.40063 11.3301V13.683Z" fill="currentColor"></path>
      <path d="M15.6547 13.4009C15.5788 13.4382 15.5013 13.4747 15.4224 13.5105L17.0963 11.2644L17.0114 11.2835C17.1387 11.053 17.1973 10.8297 17.1973 10.6229L17.1973 10.5617V9.77279C17.1937 9.61482 17.1856 9.46483 17.1688 9.31931C17.1655 9.29067 17.1619 9.26221 17.1579 9.23388C16.9415 9.44661 16.687 9.64833 16.3987 9.83691L16.3976 9.83761V11.4217L15.5979 11.6019V10.2857C14.9082 10.6178 14.0965 10.8891 13.1988 11.0818V12.1423L12.9653 12.1949L12.3991 11.7729V11.2288C12.1959 11.2602 11.9892 11.2876 11.7793 11.3111L10.8268 10.6012C13.4766 10.461 15.5959 9.65797 16.5923 8.67845L16.8953 8.38055L17.0485 8.07453C17.1504 7.87096 17.1973 7.67368 17.1973 7.48009C17.1973 6.85318 16.6593 6.07411 15.2971 5.40494C13.9828 4.75927 12.1111 4.33723 10 4.33723C9.4696 4.33723 8.95427 4.36388 8.4591 4.41402L9.0828 3.57708C9.38379 3.5602 9.68985 3.55152 10 3.55152C14.4167 3.55152 17.997 5.3104 17.997 7.48009V9.76682L17.9984 9.83278C18.0012 10.0015 17.9998 10.171 17.9985 10.3392C17.9979 10.4168 17.9973 10.4941 17.997 10.571L17.997 10.6229C17.997 11.7042 17.1072 12.6873 15.6547 13.4009Z" fill="currentColor"></path>
    </svg>
  );

  const InflowIcon = () => (
    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="0.332031" y="0.5" width="16" height="16" rx="8" fill="#E3FBCC"></rect>
      <path d="M12.4664 5.56574H10.5679V4.87756H13.6647V7.97434H12.9765V5.96527L10.7307 8.66031C10.7563 8.73003 10.7703 8.80538 10.7703 8.88401C10.7703 9.24172 10.4804 9.5317 10.1227 9.5317C9.79628 9.5317 9.52629 9.2903 9.48149 8.97631L7.28476 8.09763C7.17454 8.18449 7.03542 8.23632 6.8842 8.23632C6.84657 8.23632 6.8097 8.23311 6.77384 8.22695L4.25375 11.251C4.27941 11.3208 4.29343 11.3961 4.29343 11.4748C4.29343 11.8325 4.00345 12.1225 3.64574 12.1225C3.28803 12.1225 2.99805 11.8325 2.99805 11.4748C2.99805 11.1171 3.28803 10.8271 3.64574 10.8271C3.68337 10.8271 3.72025 10.8303 3.75612 10.8365L6.2762 7.81239C6.25052 7.74265 6.2365 7.66728 6.2365 7.58863C6.2365 7.23092 6.52648 6.94093 6.8842 6.94093C7.21055 6.94093 7.48054 7.18231 7.52535 7.49628L9.72211 8.37498C9.83233 8.28813 9.97144 8.23632 10.1227 8.23632C10.1603 8.23632 10.1972 8.23953 10.2331 8.24569L12.4664 5.56574Z" fill="#3B7C0F"></path>
    </svg>
  );

  const ArrowIcon = ({ direction }) => (
    <svg width="32" height="32" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d={direction === 'left' ? "M13 5L7 10L13 15" : "M7 15L13 10L7 5"} stroke="currentColor"></path>
    </svg>
  );

  return (
    <div className="grid grid-cols-1 gap-x-6 xl:grid-cols-2">
      {/* Whale Watch Section */}
      <section className="mb-16 xl:mb-0">
        <div className="flex">
          <div className="flex flex-1 flex-col gap-1 md:gap-2">
            <h3 className="font-mono text-base font-bold uppercase leading-5 tracking-normal text-neutral-900 md:text-xl md:leading-6">
              Whale Watch
            </h3>
            <div className="flex items-center gap-2">
              {['10000', '50000', '100000', '1000000'].map((value) => (
                <label
                  key={value}
                  className={`sup-toggle-label inline-flex h-5 items-center flex-row hover:text-neutral-975 cursor-pointer gap-0 whitespace-nowrap text-neutral-900 ${whaleFilter === value ? '[&>span:last-of-type]:font-bold' : ''}`}
                >
                  <span className="sup-toggle relative inline-block transition-colors duration-200 text-neutral-800 hover:text-neutral-975">
                    <ToggleIcon checked={whaleFilter === value} />
                    <input
                      className="absolute opacity-0 inset-0 z-[1] cursor-pointer"
                      type="radio"
                      value={value}
                      checked={whaleFilter === value}
                      onChange={(e) => setWhaleFilter(e.target.value)}
                    />
                  </span>
                  <span className="uppercase text-xs tracking-normal font-mono font-normal leading-none antialiased">
                    {value === '10000' ? '>$10K' : value === '50000' ? '>$50K' : value === '100000' ? '>$100K' : '>$1M'}
                  </span>
                </label>
              ))}
            </div>
          </div>
        </div>
        
        <div className="md:mt-10 mt-6">
          <div className="rounded-2xl rounded-tr-none border-0.5 border-neutral-400">
            <div className="sup-scrollable-container overflow-x-auto custom-scrollbar">
              <div className="sup-scrollable-content">
                <table className="w-full font-mono text-[14px] font-normal leading-4 tracking-[0.5px] text-neutral-800">
                  <thead>
                    <tr className="border-b-0.5 border-neutral-300">
                      <th className="h-10 text-left uppercase text-neutral-900 first-of-type:pl-4 last-of-type:pr-4 pr-2" style={{ width: '95px' }}>
                        Value
                      </th>
                      <th className="h-10 text-left uppercase text-neutral-900 first-of-type:pl-4 last-of-type:pr-4 pr-2 pl-2">
                        Vault
                      </th>
                      <th className="h-10 text-left uppercase text-neutral-900 first-of-type:pl-4 last-of-type:pr-4 pl-2" style={{ width: '130px', textAlign: 'right' }}>
                        time
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {whaleTransactions.map((tx, index) => (
                      <tr key={index} className="border-b-0.5 border-neutral-300">
                        <td className="h-10 text-left text-neutral-900 first-of-type:pl-4 last-of-type:pr-4 pr-2">
                          <b>{tx.value}</b>
                        </td>
                        <td className="h-10 text-left text-neutral-900 first-of-type:pl-4 last-of-type:pr-4 pr-2 pl-2">
                          <Link
                            to="/wallet"
                            className="group flex items-center gap-1 whitespace-nowrap text-[14px] uppercase leading-4 tracking-[0.5px] text-neutral-900 hover:text-neutral-800 hover:underline"
                          >
                            <div className="flex items-center -space-x-3 pr-1 group-hover:opacity-80">
                              <div className="sup-asset-pair inline-flex relative">
                                <span className="sup-asset inline-flex rounded-full overflow-hidden h-6 w-6">
                                  <img src={tx.assetLogo} className="object-cover object-center" alt="" />
                                </span>
                                <span className="sup-asset inline-flex rounded-full overflow-hidden h-3 w-3 absolute bottom-0 bg-neutral-950 right-0">
                                  <img src={tx.chainLogo} className="object-cover object-center" alt="" />
                                </span>
                              </div>
                            </div>
                            {tx.vault}
                          </Link>
                        </td>
                        <td className="h-10 text-left text-neutral-900 first-of-type:pl-4 last-of-type:pr-4 pl-2" style={{ textAlign: 'right' }}>
                          <a
                            className="whitespace-nowrap hover:underline"
                            target="_blank"
                            rel="noopener noreferrer"
                            href={`https://scan.superform.xyz/tx/${tx.txHash}`}
                          >
                            {tx.time}
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="flex h-12 items-center justify-end px-4">
              <button disabled className="text-neutral-900 opacity-80 transition-opacity hover:opacity-100 disabled:opacity-30">
                <ArrowIcon direction="left" />
              </button>
              <button className="text-neutral-900 opacity-80 transition-opacity hover:opacity-100 disabled:opacity-30">
                <ArrowIcon direction="right" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Hot Vaults Section */}
      <section>
        <div className="flex">
          <div className="flex flex-1 flex-col gap-1 md:gap-2">
            <h3 className="mb-4 flex flex-col items-start justify-start gap-2 font-mono text-base font-bold uppercase leading-5 tracking-normal text-neutral-900 md:mb-0 md:flex-row md:items-center md:justify-between md:gap-0 md:text-xl md:leading-6">
              Hot Vaults 
              <div className="flex items-center gap-1">
                <button
                  className={`block h-4 rounded-sm border-0.5 px-1 text-xs font-normal uppercase leading-4 tracking-[0.5px] transition-colors duration-200 ${hotVaultsTab === 'deposits' ? 'border-primary-600 bg-primary-700 text-neutral-25' : 'border-neutral-400 bg-neutral-50 text-neutral-700'}`}
                  onClick={() => setHotVaultsTab('deposits')}
                >
                  deposits
                </button>
                <button
                  className={`block h-4 rounded-sm border-0.5 px-1 text-xs font-normal uppercase leading-4 tracking-[0.5px] transition-colors duration-200 ${hotVaultsTab === 'apy' ? 'border-primary-600 bg-primary-700 text-neutral-25' : 'border-neutral-400 bg-neutral-50 text-neutral-700'}`}
                  onClick={() => setHotVaultsTab('apy')}
                >
                  apy
                </button>
                <button
                  className={`block h-4 rounded-sm border-0.5 px-1 text-xs font-normal uppercase leading-4 tracking-[0.5px] transition-colors duration-200 ${hotVaultsTab === 'inflows' ? 'border-primary-600 bg-primary-700 text-neutral-25' : 'border-neutral-400 bg-neutral-50 text-neutral-700'}`}
                  onClick={() => setHotVaultsTab('inflows')}
                >
                  inflows
                </button>
              </div>
            </h3>
            <div className="flex items-center gap-2">
              {['4h', 'd', 'w', 'm', 'total'].map((value) => (
                <label
                  key={value}
                  className={`sup-toggle-label inline-flex h-5 items-center flex-row hover:text-neutral-975 cursor-pointer gap-0 whitespace-nowrap text-neutral-900 ${hotVaultsFilter === value ? '[&>span:last-of-type]:font-bold' : ''}`}
                >
                  <span className="sup-toggle relative inline-block transition-colors duration-200 text-neutral-800 hover:text-neutral-975">
                    <ToggleIcon checked={hotVaultsFilter === value} />
                    <input
                      className="absolute opacity-0 inset-0 z-[1] cursor-pointer"
                      type="radio"
                      value={value}
                      checked={hotVaultsFilter === value}
                      onChange={(e) => setHotVaultsFilter(e.target.value)}
                    />
                  </span>
                  <span className="uppercase text-xs tracking-normal font-mono font-normal leading-none antialiased">
                    {value === '4h' ? '4H' : value === 'd' ? '24H' : value === 'w' ? 'Week' : value === 'm' ? 'Month' : 'Total'}
                  </span>
                </label>
              ))}
            </div>
          </div>
        </div>
        
        <div className="md:mt-10 mt-6">
          <div className="rounded-2xl rounded-tr-none border-0.5 border-neutral-400">
            <div className="sup-scrollable-container overflow-x-auto custom-scrollbar">
              <div className="sup-scrollable-content">
                <table className="w-full font-mono text-[14px] font-normal leading-4 tracking-[0.5px] text-neutral-800">
                  <thead>
                    <tr className="border-b-0.5 border-neutral-300">
                      <th className="h-10 text-left uppercase text-neutral-900 first-of-type:pl-4 last-of-type:pr-4 pr-2">
                        APY
                      </th>
                      <th className="h-10 text-left uppercase text-neutral-900 first-of-type:pl-4 last-of-type:pr-4 pr-2 pl-2">
                        TVL
                      </th>
                      <th className="h-10 text-left uppercase text-neutral-900 first-of-type:pl-4 last-of-type:pr-4 pr-2 pl-2">
                        VAULT
                      </th>
                      <th className="h-10 text-left uppercase text-neutral-900 first-of-type:pl-4 last-of-type:pr-4 pr-2 pl-2">
                        Deposits
                      </th>
                      <th className="h-10 text-left uppercase text-neutral-900 first-of-type:pl-4 last-of-type:pr-4 pl-2" style={{ textAlign: 'right' }}>
                        Inflows
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {hotVaults.map((vault, index) => (
                      <tr key={index} className="border-b-0.5 border-neutral-300">
                        <td className="h-10 text-left text-neutral-900 first-of-type:pl-4 last-of-type:pr-4 pr-2">
                          <b>
                            <div className="inline-flex flex-none justify-center cursor-help">
                              <div className="sup-asset-label inline-flex w-fit items-center gap-0.5 h-full">
                                <YieldIcon />
                                <div className="inline-flex flex-col justify-center items-start shrink-0 gap-1">
                                  {vault.apy}
                                </div>
                              </div>
                            </div>
                          </b>
                        </td>
                        <td className="h-10 text-left text-neutral-900 first-of-type:pl-4 last-of-type:pr-4 pr-2 pl-2">
                          {vault.tvl}
                        </td>
                        <td className="h-10 text-left text-neutral-900 first-of-type:pl-4 last-of-type:pr-4 pr-2 pl-2">
                          <Link
                            to="/wallet"
                            className="group flex items-center gap-1 whitespace-nowrap text-[14px] uppercase leading-4 tracking-[0.5px] text-neutral-900 hover:text-neutral-800 hover:underline"
                          >
                            <div className="flex items-center -space-x-3 pr-1 group-hover:opacity-80">
                              <div className="sup-asset-pair inline-flex relative">
                                <span className="sup-asset inline-flex rounded-full overflow-hidden h-6 w-6">
                                  <img src={vault.assetLogo} className="object-cover object-center" alt="" />
                                </span>
                                <span className="sup-asset inline-flex rounded-full overflow-hidden h-3 w-3 absolute bottom-0 bg-neutral-950 right-0">
                                  <img src={vault.chainLogo} className="object-cover object-center" alt="" />
                                </span>
                              </div>
                            </div>
                            {vault.vault}
                          </Link>
                        </td>
                        <td className="h-10 text-left text-neutral-900 first-of-type:pl-4 last-of-type:pr-4 pr-2 pl-2">
                          {vault.deposits}
                        </td>
                        <td className="h-10 text-left text-neutral-900 first-of-type:pl-4 last-of-type:pr-4 pl-2" style={{ textAlign: 'right' }}>
                          <div className="flex items-center justify-end gap-1 text-[#3B7C0F]">
                            <InflowIcon />
                            {vault.inflows}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="flex h-12 items-center justify-end px-4">
              <button disabled className="text-neutral-900 opacity-80 transition-opacity hover:opacity-100 disabled:opacity-30">
                <ArrowIcon direction="left" />
              </button>
              <button className="text-neutral-900 opacity-80 transition-opacity hover:opacity-100 disabled:opacity-30">
                <ArrowIcon direction="right" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ConnectorApp;