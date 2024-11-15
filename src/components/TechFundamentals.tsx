import React from 'react';

const RadixSummary = () => {
  const features = [
    {
      title: "Decentralized",
      description: "No central points of control, fostering trust and resilience."
    },
    {
      title: "Secure",
      description: "Protect assets, network integrity, preventing hacks and exploits."
    },
    {
      title: (
        <>
          Scalable (<a
            href="https://x.com/konstantinkoos/status/1856977069223145671"
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-300 hover:text-emerald-400 transition-colors"
          >
            <ins>linearly</ins>👈
          </a>)
        </>
      ),
      description: "Sharded protocol WITHOUT any parachain / coordinator / Layer 2"
    },
    {
      title: "User-Friendly framework",
      description: "Easy to build, test, and safely deploy dApps without deep blockchain expertise."
    },
    {
      title: "Regulatory compliance",
      description: "Designed with real-world assets (RWA) in mind, enabling features like KYC or AML as needed."
    },
    {
      title: "BONUS: Readable UX for normies",
      description: "What is displayed in your wallet's transaction manifest is what happens!"
    }
  ];

  return (
    <div className="flex flex-col md:flex-row items-start gap-8">
      <div className="backdrop-blur-lg bg-gray-400/20 p-6 rounded-xl border border-white/30 w-full md:w-[calc(100%-12rem)]">
        <img
          src="https://cdn.prod.website-files.com/6053f7fca5bf627283b582c2/6266da2a5acb38c8eacf5938_radix_logo_white.png"
          alt="Radix Logo"
          className="h-8 mb-6" 
        />
        <div className="space-y-4">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-2">
              <div className="flex-1">
                <h4 className="text-white font-semibold mb-1">{feature.title}</h4>
                <p className="text-emerald-300 text-sm text-justify text-balance">{feature.description}</p>
              </div>
              <img
                src="https://cdn.prod.website-files.com/6053f7fca5bf627283b582c2/6266da247313af0ecee3baa9_Radix-Icon-64x64.png"
                alt="Checkmark"
                className="w-4 h-4 mt-1.5 flex-shrink-0"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="md:w-48 w-full flex-shrink-0 md:self-center">
        <img
          src="https://i.ibb.co/Xkv8rgS/Picture1.png"
          alt="Wallet Screenshot"
          className="w-full h-auto"
        />
      </div>
    </div>
  );
};

export function TechFundamentals() {
  return (
    <section id="fundamentals" className="gradient-section">
      <div className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-white text-center mb-4 text-shadow">
          THE CRYPTO TECH FUNDAMENTALS
        </h2>
        
        <div className="text-center mb-8">
          <a
            href="https://Coinmarketcap.com/view/layer-1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-300 hover:text-emerald-400 transition-colors"
          >
            <strong>CoinMarketCap 134 Layers 1 official list <ins>(click)</ins></strong>
          </a>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          <div className="backdrop-blur-lg bg-gray-500/30 p-6 rounded-xl border border-white/30">
            <h3 className="text-xl font-bold text-white mb-2 text-shadow">Decentralisation</h3>
            <p className="text-white text-shadow text-justify text-balance">
              REMOVE centralised L1 like Aptos, Klaytn, Ronin, Binance Blockchain, Internet Computer, Flow, Near Protocol, Oasis, Oasys and others for true decentralization
            </p>
          </div>

          <div className="backdrop-blur-lg bg-gray-500/30 p-6 rounded-xl border border-white/30">
            <h3 className="text-xl font-bold text-white mb-2 text-shadow">Security</h3>
            <p className="text-white text-shadow text-justify text-balance">
              <a
                href="https://www.radixdlt.com/blog/comparing-virtual-machines-message-only-vs-asset-oriented"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-300 hover:text-emerald-400 transition-colors"
              >
                <ins>Asset-Oriented protocols</ins>
              </a> over Direct Message Virtual Machines are a must, mitigating multi-billion-dollar losses from <a
                href="https://rekt.news/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-300 hover:text-emerald-400 transition-colors"
              >
                <ins>hacks and exploits</ins>
              </a>. Remaining L1 : <strong>Aptos</strong>, <strong>Cardano</strong>, <strong>MultiversX</strong>, <strong>Radix</strong>, <strong>Sui</strong>.
            </p>
          </div>

          <div className="backdrop-blur-lg bg-gray-500/30 p-6 rounded-xl border border-white/30">
            <h3 className="text-xl font-bold text-white mb-2 text-shadow">
              Scalability (<a
                href="https://x.com/konstantinkoos/status/1856977069223145671"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-300 hover:text-emerald-400 transition-colors"
              >
                <ins>linear</ins>👈
              </a>)
            </h3>
            <p className="text-white text-shadow mb-4 text-justify text-balance">
              For billions of users seamlessly, you NEED a sharded protocol WITHOUT any beacon chain / para chain / coordinator / synchronisator / terminator or Layer 2, to deliver unlimited TPS capacity.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-white">
                <thead>
                  <tr className="text-center">
                    <th className="p-2"></th>
                    <th className="p-2"><strong>Sui</strong></th>
                    <th className="p-2"><strong>Radix</strong></th>
                    <th className="p-2">MultiversX</th>
                    <th className="p-2">Cardano</th>
                    <th className="p-2">Aptos</th>
                  </tr>
                </thead>
                <tbody className="text-center">
                  <tr>
                    <td className="p-2">Sharded</td>
                    <td className="p-2">✅</td>
                    <td className="p-2">✅</td>
                    <td className="p-2">✅</td>
                    <td className="p-2">❌</td>
                    <td className="p-2">❌</td>
                  </tr>
                  <tr>
                    <td className="p-2">WITHOUT *coordinator*</td>
                    <td className="p-2">✅</td>
                    <td className="p-2">✅</td>
                    <td className="p-2">❌</td>
                    <td className="p-2">❌</td>
                    <td className="p-2">❌</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="backdrop-blur-lg bg-gray-500/30 p-6 rounded-xl border border-white/30">
            <h3 className="text-xl font-bold text-white mb-2 text-shadow">User-Friendly framework</h3>
            <p className="text-white text-shadow text-justify text-balance">
              <a
                href="https://www.radixdlt.com/blog/scrypto-an-asset-oriented-smart-contract-language"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-300 hover:text-emerald-400 transition-colors"
              >
                <ins>Radix's Scrypto</ins>
              </a> language is even simpler and easier than <a
                href="https://www.radixdlt.com/blog/how-radix-engine-avoids-the-flaws-of-suis-movevm"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-300 hover:text-emerald-400 transition-colors"
              >
                <ins>Sui's MoveVM</ins>
              </a>!
            </p>
          </div>

          <div className="backdrop-blur-lg bg-gray-500/30 p-6 rounded-xl border border-white/30">
            <h3 className="text-xl font-bold text-white mb-2 text-shadow">Regulatory compliance</h3>
            <p className="text-white text-shadow text-justify text-balance">
              <a 
                href="https://youtube.com/watch?v=IoJj2-bOPu4" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-emerald-300 hover:text-emerald-400 transition-colors"
              >
                <ins>Check this great example</ins>
              </a> of a yield-bearing bond with real-world assets, featuring easy configuration, compliance controls, and token creation/distribution using RADIX.
            </p>
          </div>

         
            <RadixSummary />
         
        </div>
      </div>
    </section>
  );
}
