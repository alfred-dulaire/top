import React from 'react';
import { ArrowUpRight, MessageCircle, Mail, Video, Gift, Mic, Globe, Users, FileText, Share2 } from 'lucide-react';

const tradingPartners = {
  institutional: [
    {
      name: "Copper.co CLEARLOOP",
      logo: "https://copper.co/images/copper_brand/Copper_Full_Colour_Light.svg",
      link: "https://copper.co/en/products/clearloop"
    },
    {
      name: "PrimeVault",
      logo: "https://www.primevault.com/images/primevault.svg",
      link: "https://www.primevault.com/"
    },
    {
      name: "TwinStake",
      logo: "https://cdn.prod.website-files.com/658431ace1bcb480879b0d53/65858659b0082230083c0b5c_twinstake-logo.svg",
      link: "https://www.twinstake.io/"
    },
    {
      name: "KeyRock OTC",
      logo: "https://i.ibb.co/CMySYMq/keyrock.png",
      link: "https://keyrock.com/service/otc/"
    }
  ],
  retail: [
    {
      name: "CoinMarketCap",
      logo: "https://i.ibb.co/60pc3Vc/CMC.png",
      link: "https://coinmarketcap.com/currencies/radix-protocol/markets"
    },
    {
      name: "CoinGecko",
      logo: "https://static.coingecko.com/s/coingecko-logo-8903d34ce19ca4be1c81f0db30e924154750d208683fad7ae6f2ce06c76d0a56.png",
      link: "https://www.coingecko.com/en/coins/radix#markets"
    }
  ]
};

const communityLinks = [
  {
    icon: <Globe className="w-5 h-5" />,
    text: "Radix Website",
    href: "https://radixdlt.com"
  },
  {
    icon: <Users className="w-5 h-5" />,
    text: "Telegram",
    href: "https://t.me/Radix_DLT"
  },
  {
    icon: <Mail className="w-5 h-5" />,
    text: "Email",
    href: "mailto:hello@radixdlt.com"
  },
  {
    icon: <MessageCircle className="w-5 h-5" />,
    text: "Community Channel",
    href: "https://t.me/Radix_Trader"
  },
  {
    icon: <img 
      src="https://coinagenda.com/wp-content/uploads/2020/09/piers.jpeg"
      alt="Piers Ridyard"
      className="w-10 h-10 rounded-full"
    />,
    text: "Piers Ridyard CEO",
    href: "https://t.me/piersr"
  },
  {
    icon: <Video className="w-5 h-5" />,
    text: "Keynote",
    href: "https://www.youtube.com/watch?v=5iSK3rTjPMw"
  },
  {
    icon: <Mic className="w-5 h-5" />,
    text: "Interview",
    href: "https://hackernoon.com/scaling-blockchain-and-defi-with-piers-ridyard"
  },
  {
    icon: <Gift className="w-5 h-5" />,
    text: "Surprise",
    href: "https://x.com/lucmatheson/status/1855608773865353617"
  }
];

const pdfActions = [
  {
    icon: <FileText className="w-5 h-5" />,
    text: "Download as PDF",
    onClick: () => {
      window.location.href = '/Radix DLT 6 slides pitch v2.pdf';
    }
  },
  {
    icon: <Share2 className="w-5 h-5" />,
    text: "Share PDF",
    onClick: () => {
      const pdfUrl = '/Radix DLT 6 slides pitch v2.pdf';
      fetch(pdfUrl)
        .then(response => response.blob())
        .then(blob => {
          const file = new File([blob], 'Radix DLT 6 slides pitch v2.pdf', { type: 'application/pdf' });
          const subject = encodeURIComponent('Radix DLT Pitch Deck');
          const body = encodeURIComponent('Please find attached the Radix DLT pitch deck.');
          
          if (navigator.share && navigator.canShare({ files: [file] })) {
            navigator.share({
              files: [file],
              title: 'Radix DLT Pitch Deck',
              text: 'Please find attached the Radix DLT pitch deck.'
            }).catch(() => {
              window.location.href = `mailto:?subject=${subject}&body=${body}`;
            });
          } else {
            window.location.href = `mailto:?subject=${subject}&body=${body}`;
          }
        });
    }
  }
];

export function Contact() {
  return (
    <section id="contact" className="gradient-section min-h-screen flex items-center">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <div>
            <h2 className="text-6xl font-bold">
              <span className="text-white">Thank you for your </span>
              <span className="text-emerald-300">attention!</span>
            </h2>
            <div className="mt-4 flex items-center justify-center gap-2">
              <p className="text-xl text-white">Any questions?</p>
              <p className="text-xl text-emerald-300">Check those links</p>
            </div>
          </div>

          <div className="backdrop-blur-lg bg-white/10 p-8 rounded-xl border border-white/20">
            <div className="space-y-8">
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">RADIX XRD ticker for Institutions and Fund Managers</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {tradingPartners.institutional.map((partner) => (
                    <a
                      key={partner.name}
                      href={partner.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center p-4 backdrop-blur-sm bg-white/5 rounded-lg hover:bg-white/10 transition-colors group"
                    >
                      <img
                        src={partner.logo}
                        alt={partner.name}
                        className="h-8 object-contain filter brightness-0 invert opacity-80 group-hover:opacity-100 transition-opacity"
                      />
                    </a>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">For Classic Retailers</h4>
                <div className="grid grid-cols-2 gap-6">
                  {tradingPartners.retail.map((partner) => (
                    <a
                      key={partner.name}
                      href={partner.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center p-4 backdrop-blur-sm bg-white/5 rounded-lg hover:bg-white/10 transition-colors group"
                    >
                      <img
                        src={partner.logo}
                        alt={partner.name}
                        className="h-8 object-contain filter brightness-0 invert opacity-80 group-hover:opacity-100 transition-opacity"
                      />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {communityLinks.map((link, index) => (
              <button
                key={index}
                onClick={() => window.open(link.href, '_blank')}
                className="flex items-center justify-center gap-2 backdrop-blur-lg bg-white/10 p-4 rounded-xl border border-white/20 hover:bg-white/20 transition-colors text-white group"
              >
                {link.icon}
                <span>{link.text}</span>
                <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
            ))}
          </div>

          <div id="pdf-actions" className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {pdfActions.map((action, index) => (
              <button
                key={index}
                onClick={action.onClick}
                className="flex items-center justify-center gap-2 backdrop-blur-lg bg-white/10 p-4 rounded-xl border border-white/20 hover:bg-white/20 transition-colors text-white group"
              >
                {action.icon}
                <span>{action.text}</span>
                <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
