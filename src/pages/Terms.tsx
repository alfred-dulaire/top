import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export function Terms() {
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
            <h1 className="text-4xl font-bold text-white mb-8">Terms of Service</h1>
            
            <div className="space-y-6 text-white/90">
              <section>
                <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
                <p>By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.</p>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold mb-4">2. Use License</h2>
                <p>Permission is granted to temporarily download one copy of the materials (information or software) on Radix RadBulls Community's website for personal, non-commercial transitory viewing only.</p>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold mb-4">3. Disclaimer</h2>
                <p>The materials on Radix RadBulls Community's website are provided on an 'as is' basis. Radix RadBulls Community makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold mb-4">4. Limitations</h2>
                <p>In no event shall Radix RadBulls Community or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Radix RadBulls Community's website.</p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}