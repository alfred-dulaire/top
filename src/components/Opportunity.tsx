import React, { useEffect, useRef } from 'react';

export function Opportunity() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const suiRef = useRef<HTMLDivElement>(null);
  const xrdRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            suiRef.current?.classList.add('slide-in-left');
            xrdRef.current?.classList.add('slide-in-right');
            suiRef.current?.classList.remove('fade-out-left');
            xrdRef.current?.classList.remove('fade-out-right');
          } else {
            suiRef.current?.classList.remove('slide-in-left');
            xrdRef.current?.classList.remove('slide-in-right');
            suiRef.current?.classList.add('fade-out-left');
            xrdRef.current?.classList.add('fade-out-right');
          }
        });
      },
      {
        threshold: 0.2
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="opportunity" className="gradient-section" ref={sectionRef}>
      <div className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-white text-center mb-12 text-shadow">
          THE OPPORTUNITY IS HERE !
          <br />
          WILL YOU BE THE FIRST TO CATCH IT ?
        </h2>
        <div className="max-w-5xl mx-auto flex items-stretch gap-8">
          <div 
            ref={suiRef}
            className="w-64 flex-shrink-0 hidden md:flex items-center opacity-0 transform -translate-x-full transition-all duration-[2000ms]"
          >
            <img
              src="https://i.ibb.co/3mSYD5D/SUI.png"
              alt="SUI Logo"
              className="w-full h-auto rounded-xl"
            />
          </div>
          
          <div className="flex-1 flex flex-col">
            <div className="backdrop-blur-lg bg-white/10 p-8 rounded-xl border border-white/20 mb-8">
              <div className="space-y-6">
                <p className="text-lg text-white text-shadow text-justify">
                  Radix is supported by GIGABRAINS, with classic retailers memecoin hunters still to come. Reaching SUI MC is a <span className="font-bold text-emerald-300">x50</span>!
                </p>
                <p className="text-lg text-white text-shadow text-justify">
                  With all the right fundamentals, Radix can embrace the <span className="font-bold text-emerald-300">400 Trillions $</span> global finance and its millions transactions per seconds.
                </p>
              </div>
            </div>
            
            <div className="backdrop-blur-lg bg-white/10 p-4 rounded-xl border border-white/20">
              <img
                src="https://i.ibb.co/vHwHNw7/graph2.png"
                alt="Growth Graph"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
          
          <div 
            ref={xrdRef}
            className="w-64 flex-shrink-0 hidden md:flex items-center opacity-0 transform translate-x-full transition-all duration-[2000ms]"
          >
            <img
              src="https://i.ibb.co/rKBtBRW/XRD.png"
              alt="Radix Logo"
              className="w-full h-auto rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}