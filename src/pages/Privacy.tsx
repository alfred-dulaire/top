import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export function Privacy() {
  return (
    <div className="min-h-screen relative">
      <div className="fixed inset-0 bg-gradient-to-b from-[#051937] via-[#004d7a] to-green-400 z-0" />
      <div className="relative z-10">
        <div className="container mx-auto px-4 py-12">
          <Link 
            to="/" 
            className="inline-flex items-center text-white hover:text-emerald-300 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          
          <div className="max-w-3xl mx-auto backdrop-blur-lg bg-white/10 p-8 rounded-xl border border-white/20">
            <h1 className="text-4xl font-bold text-white mb-8">Privacy Policy</h1>
            
            <div className="space-y-6 text-white/90">
              <section>
                <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
                <p>We only collect information that you voluntarily provide to us through our website. This may include your name and email address if you choose to contact us.</p>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
                <p>Any information we collect is used solely to improve your experience and communicate with you. We do not sell or share your personal information with third parties.</p>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold mb-4">3. Data Security</h2>
                <p>We implement appropriate data collection, storage, and processing practices and security measures to protect against unauthorized access, alteration, disclosure, or destruction of your personal information.</p>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold mb-4">4. Changes to This Policy</h2>
                <p>Radix RadBulls Community has the discretion to update this privacy policy at any time. We encourage users to frequently check this page for any changes.</p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}