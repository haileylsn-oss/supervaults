import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const protocols = [
    {
      rank: 1,
      name: "Morpho",
      vaults: "110 vaults",
      tvl: "$73.55M",
      logo: "https://superform-celeste.s3.amazonaws.com/-SV7BKsbN08y6508qTPYf.png",
      href: "/protocol/20ea4lMXEYCmpAhjuLKuD/"
    },
    {
      rank: 2,
      name: "Superform",
      vaults: "3 vaults",
      tvl: "$51.03M",
      logo: "https://superform-celeste.s3.amazonaws.com/bif9-gPD_-ScqphXAjG8g.png",
      href: "/protocol/_gIpnQXdrJf2wp8UVs6Sh/"
    },
    {
      rank: 3,
      name: "Euler",
      vaults: "83 vaults",
      tvl: "$5.64M",
      logo: "https://superform-celeste.s3.amazonaws.com/MNcP3zmKIIvr-Mu_l076O.png",
      href: "/protocol/LICSF1pf-Omy5UnppgxZS/"
    },
    {
      rank: 4,
      name: "Avantis",
      vaults: "2 vaults",
      tvl: "$1.5M",
      logo: "https://superform-celeste.s3.amazonaws.com/ZEZXq9r1ngCXnzU8hDVPf.png",
      href: "/protocol/uSotAuvp8WFw93zm1vZag/"
    },
    {
      rank: 5,
      name: "Aave",
      vaults: "65 vaults",
      tvl: "$1.06M",
      logo: "https://superform-celeste.s3.amazonaws.com/wDRGwjO_7iC76BZ1FDSsd.png",
      href: "/protocol/s8VIljgojAzvnhNBPg78T/"
    },
    {
      rank: 6,
      name: "Harvest Finance",
      vaults: "92 vaults",
      tvl: "$651.98K",
      logo: "https://superform-celeste.s3.amazonaws.com/efqbVP39fxvE9NK5ilxBM.svg",
      href: "/protocol/QyLqXsgYt-wgqz7ykim_M/"
    },
    {
      rank: 7,
      name: "Arcadia Finance V2",
      vaults: "3 vaults",
      tvl: "$434.11K",
      logo: "https://superform-celeste.s3.amazonaws.com/KlUj5Ll7vueGT2TCbv-WJ.png",
      href: "/protocol/RCFJaSXAfHmiWGGnDv2MN/"
    },
    {
      rank: 8,
      name: "Ethereal",
      vaults: "1 vaults",
      tvl: "$419.96K",
      logo: "https://superform-celeste.s3.amazonaws.com/pveCFAG47yeXWWTKQu44w.jpg",
      href: "/protocol/wtOzgJksdyBpUNw0W9faV/"
    }
  ];

  return (
    <section className="mt-8">
      <div className="flex">
        <div className="flex flex-1 flex-col gap-1 md:gap-2">
          <h3 className="font-mono text-base font-bold uppercase leading-5 tracking-normal text-neutral-900 md:text-xl md:leading-6">
            Top Protocols
          </h3>
        </div>
        <div className="shrink-0">
          <Link
            to="/wallet"
            className="inline-flex rounded-lg rounded-tr-none border-0.5 border-primary-500 bg-primary-25 px-4 py-2 font-mono text-sm uppercase leading-4 tracking-[1px] text-primary-900 hover:bg-primary-75 md:text-base md:leading-6"
          >
            View Protocols
          </Link>
        </div>
      </div>
      
      <div className="mt-5 md:mt-10 grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
        {protocols.map((protocol) => (
          <Link
            key={protocol.rank}
            to="/wallet"
            className="group"
          >
            <div className="flex sm:h-20">
              {/* Rank Number */}
              <div className="flex w-10 shrink-0 items-center justify-center rounded-l-2xl border-b-0.5 border-l-0.5 border-t-0.5 border-primary-300 bg-primary-25 text-xs font-bold text-neutral-900">
                {protocol.rank}
              </div>
              
              {/* Protocol Content */}
              <div className="flex flex-1 flex-col items-center justify-between gap-4 rounded-br-2xl border border-primary-300 bg-neutral-25 px-4 py-6 text-neutral-800 group-hover:bg-primary-50 sm:flex-row sm:gap-0 sm:py-0">
                {/* Protocol Info */}
                <div className="flex flex-col items-center gap-2 sm:flex-row sm:gap-0">
                  <img
                    alt={protocol.name}
                    loading="lazy"
                    width="32"
                    height="32"
                    className="mr-2 overflow-hidden rounded-full object-cover"
                    src={protocol.logo}
                    style={{ color: 'transparent' }}
                  />
                  <div className="block text-center sm:text-left">
                    <p className="uppercase text-base tracking-normal font-mono font-bold leading-none antialiased text-neutral-900">
                      {protocol.name}
                    </p>
                    <p className="uppercase text-xs tracking-normal font-mono font-normal antialiased leading-4">
                      {protocol.vaults}
                    </p>
                  </div>
                </div>
                
                {/* TVL Badge */}
                <div className="inline-flex gap-2 rounded-full border-0.5 border-neutral-300 p-2 text-sm leading-4 text-neutral-500">
                  <span className="font-mono text-neutral-800">TVL</span>
                  <b className="font-mono text-neutral-900">{protocol.tvl}</b>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Footer;