
import React from 'react';
import { Link } from 'react-router-dom';
// Fix: Added missing 'Users' to the lucide-react imports list.
import { ArrowRight, CheckCircle2, ShieldCheck, Award, Briefcase, Users } from 'lucide-react';
import { SERVICES, INDUSTRIES } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="space-y-24 pb-24">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center overflow-hidden bg-gray-900">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000" 
            alt="Guyana Skyline" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl space-y-8">
            <div className="inline-flex items-center gap-2 bg-blue-600/10 border border-blue-500/20 px-4 py-2 rounded-full text-blue-400 text-sm font-semibold backdrop-blur-sm">
              <ShieldCheck className="w-4 h-4" />
              <span>Guyana Based. Regional Excellence.</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-[1.1]">
              Empowering <span className="text-blue-500">Caribbean</span> Industries with Top Talent.
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Guyana Recruitment Services is your premier partner for Oil & Gas, Healthcare, and Hospitality sectors in Guyana and the wider region.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link 
                to="/contact" 
                className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all flex items-center justify-center gap-2 shadow-xl shadow-blue-600/20 active:scale-95"
              >
                Request Staff <ArrowRight className="w-5 h-5" />
              </Link>
              <Link 
                to="/careers" 
                className="bg-white/10 text-white border border-white/20 px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 backdrop-blur-md transition-all flex items-center justify-center gap-2 active:scale-95"
              >
                Find a Job
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-y border-gray-100">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-blue-50 rounded-lg"><Award className="w-6 h-6 text-blue-600" /></div>
            <div>
              <p className="font-bold text-gray-900">Certified Partner</p>
              <p className="text-xs text-gray-500 uppercase tracking-wider">Safety Standards</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="p-3 bg-blue-50 rounded-lg"><Briefcase className="w-6 h-6 text-blue-600" /></div>
            <div>
              <p className="font-bold text-gray-900">Regional Reach</p>
              <p className="text-xs text-gray-500 uppercase tracking-wider">Local Expertise</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="p-3 bg-blue-50 rounded-lg"><Users className="w-6 h-6 text-blue-600" /></div>
            <div>
              <p className="font-bold text-gray-900">5k+ Placed</p>
              <p className="text-xs text-gray-500 uppercase tracking-wider">Happy Careers</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="p-3 bg-blue-50 rounded-lg"><CheckCircle2 className="w-6 h-6 text-blue-600" /></div>
            <div>
              <p className="font-bold text-gray-900">98% Retention</p>
              <p className="text-xs text-gray-500 uppercase tracking-wider">Client Success</p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl font-bold text-gray-900">Specialized Sector Expertise</h2>
          <p className="text-gray-600 text-lg">We don't just recruit; we understand the unique operational demands of your industry.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {INDUSTRIES.map((industry) => (
            <Link 
              key={industry.id} 
              to="/industries" 
              className="group relative h-[400px] rounded-2xl overflow-hidden shadow-lg"
            >
              <img 
                src={industry.image} 
                alt={industry.name} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8">
                <div className="bg-blue-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-white">
                  {industry.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{industry.name}</h3>
                <p className="text-gray-300 text-sm line-clamp-2">{industry.description}</p>
                <div className="mt-4 flex items-center gap-2 text-blue-400 font-semibold group-hover:gap-3 transition-all">
                  Explore Sector <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-900/30 rounded-full -ml-32 -mb-32 blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center text-white">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold">Ready to scale your workforce?</h2>
              <p className="text-xl text-blue-100">
                Contact our Georgetown headquarters today for a confidential consultation about your staffing needs.
              </p>
              <ul className="space-y-3">
                {['Custom Recruitment Plans', 'Background Checks & Verification', 'Industry Compliant Personnel'].map(item => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-200" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 lg:justify-end">
              <Link 
                to="/contact" 
                className="bg-white text-blue-600 px-10 py-5 rounded-xl font-bold text-xl hover:bg-gray-100 transition-all text-center shadow-2xl"
              >
                Request a Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
