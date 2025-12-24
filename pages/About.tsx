
import React from 'react';
import { CheckCircle2, Target, Eye, ShieldCheck, Globe } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="pb-24">
      {/* Hero */}
      <section className="bg-gray-50 py-24 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                Your Local Partner with <span className="text-blue-600">Global Standards</span>.
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                Founded in the heart of Guyana, Guyana Recruitment Services was born from a vision to bridge the gap between regional talent and world-class industries. 
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                As Guyana emerges as a global energy hub, we have positioned ourselves as the leading recruitment force, known for our integrity, speed, and deep understanding of the Caribbean economic landscape.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200" 
                alt="Team working" 
                className="rounded-3xl shadow-2xl"
              />
              <div className="absolute -bottom-8 -left-8 bg-blue-600 text-white p-8 rounded-2xl shadow-xl">
                <p className="text-4xl font-bold">10+</p>
                <p className="text-sm font-semibold opacity-80 uppercase tracking-wider">Years of Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white p-12 rounded-[2rem] border border-gray-100 shadow-xl space-y-6 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 text-blue-50 group-hover:scale-110 transition-transform">
              <Target className="w-24 h-24" />
            </div>
            <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white mb-4">
              <Target className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed">
              To drive economic growth in Guyana and the Caribbean by connecting exceptional talent with the region's most influential industries, fostering careers and corporate excellence through ethical recruitment.
            </p>
          </div>
          <div className="bg-white p-12 rounded-[2rem] border border-gray-100 shadow-xl space-y-6 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 text-blue-50 group-hover:scale-110 transition-transform">
              <Eye className="w-24 h-24" />
            </div>
            <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white mb-4">
              <Eye className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
            <p className="text-gray-600 leading-relaxed">
              To be the premier workforce partner in the Caribbean, recognized globally for setting the gold standard in recruitment, safety, and human capital development.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-gray-900 py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold">Our Core Values</h2>
            <p className="text-gray-400 mt-4">The principles that guide every placement we make.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {[
              { title: 'Integrity', desc: 'Honesty and transparency in all our dealings.', icon: <CheckCircle2 className="w-8 h-8" /> },
              { title: 'Reliability', desc: 'Being there for our clients and candidates 24/7.', icon: <ShieldCheck className="w-8 h-8" /> },
              { title: 'Expertise', desc: 'Specialized knowledge of the sectors we serve.', icon: <Globe className="w-8 h-8" /> },
              { title: 'Excellence', desc: 'Striving for the best outcome in every search.', icon: <Target className="w-8 h-8" /> },
            ].map((value) => (
              <div key={value.title} className="text-center space-y-4 group">
                <div className="w-20 h-20 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto group-hover:rotate-6 transition-transform">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold">{value.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
