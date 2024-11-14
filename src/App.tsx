import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { MarketNarratives } from './components/MarketNarratives';
import { TechFundamentals } from './components/TechFundamentals';
import { Opportunity } from './components/Opportunity';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Terms } from './pages/Terms';
import { Privacy } from './pages/Privacy';
import { Empty } from './pages/Empty';

function Home() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <Hero />
        <MarketNarratives />
        <TechFundamentals />
        <Opportunity />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen relative">
        <div className="fixed inset-0 bg-gradient-to-b from-[#051937] via-[#004d7a] to-green-400 z-0" />
        <div className="relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/empty" element={<Empty />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}