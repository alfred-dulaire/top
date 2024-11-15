import React, { useEffect, useRef } from 'react';

const narratives = [
  {
    title: "MEMECOINS 🐸",
    points: [
      "Full casino",
      "No utility",
      "No tech fundamentals",
      "Not regulated",
      "Hyper speculative"
    ]
  },
  {
    title: "BITCOIN ₿",
    points: [
      "Safe haven",
      "Low utility",
      "Low tech fundamentals",
      "Regulated",
      "Less speculative"
    ]
  },
  {
    title: "WHAT ELSE ?",
    questions: [
      {
        text: "Something that revolutionize finance, data management, and digital ownership with innovation and security at its core? To embrace the whole world economy?",
        className: "text-base"
      },
      {
        text: "The CERTAIN next big thing?",
        className: "text-xl font-bold mt-4 text-emerald-300"
      },
      {
        text: "And HOW do you find it?",
        className: "text-xl font-bold mt-2 text-emerald-300"
      }
    ]
  }
];

export function MarketNarratives() {
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.narrative-card').forEach((card) => {
              card.classList.add('show');
            });
          } else {
            entry.target.querySelectorAll('.narrative-card').forEach((card) => {
              card.classList.remove('show');
            });
          }
        });
      },
      {
        threshold: 0.2
      }
    );

    if (cardsRef.current) {
      observer.observe(cardsRef.current);
    }

    return () => {
      if (cardsRef.current) {
        observer.unobserve(cardsRef.current);
      }
    };
  }, []);

  return (
    <section id="narratives" className="gradient-section">
      <div className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-white text-center mb-12 text-shadow">
          CURRENT CRYPTO NARRATIVES
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16" ref={cardsRef}>
          {narratives.map((item) => (
            <div
              key={item.title}
              className="narrative-card backdrop-blur-lg bg-gray-500/30 p-6 rounded-xl border border-white/30"
            >
              <h3 className="text-2xl font-bold text-white mb-6 text-center text-shadow">
                {item.title}
              </h3>
              {item.points ? (
                <ul className="space-y-3">
                  {item.points.map((point, idx) => (
                    <li 
                      key={idx}
                      className="text-white text-shadow flex items-center justify-center text-center"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="space-y-2">
                  {item.questions?.map((question, idx) => (
                    <p 
                      key={idx}
                      className={`text-white text-shadow text-center ${question.className}`}
                    >
                      {question.text}
                    </p>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-white mb-8 text-shadow flex items-center justify-center">
            PEP'S OR JÜRGEN'S WINNING HINT
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="backdrop-blur-lg bg-gray-500/30 p-4 rounded-xl border border-white/30 aspect-[4/3] flex items-center justify-center">
              <img 
                src="https://i.ibb.co/LhYDPrS/pep.png" 
                alt="Pep Guardiola - The Fundamentals"
                className="w-full h-full object-contain rounded-xl"
              />
            </div>
            <div className="backdrop-blur-lg bg-gray-500/30 p-4 rounded-xl border border-white/30 aspect-[4/3] flex items-center justify-center">
              <img 
                src="https://i.ibb.co/ZLWQ9dn/jurgen.png" 
                alt="Jurgen Klopp - The Basics"
                className="w-full h-full object-contain rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
