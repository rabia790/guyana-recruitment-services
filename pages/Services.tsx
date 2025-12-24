
import React from 'react';
import { SERVICES } from '../constants';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServicesPage: React.FC = () => {
  return (
    <div className="pb-24">
      {/* Header */}
      <section className="bg-gray-50 py-24 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Tailored Staffing Solutions</h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            From emergency medical coverage to complex offshore engineering projects, we provide the right people at the right time.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div key={service.id} className="group p-8 bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full">
              <div className="bg-blue-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-colors group-hover:bg-blue-600">
                <div className="group-hover:text-white transition-colors">
                  {service.icon}
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-8 flex-grow">
                {service.description}
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                  <span>Vetted Professional Network</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                  <span>Compliance Guaranteed</span>
                </li>
              </ul>
              <Link 
                to="/contact" 
                className="inline-flex items-center gap-2 text-blue-600 font-bold group-hover:gap-3 transition-all"
              >
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Value Prop Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gray-900 rounded-[2.5rem] p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
          <div className="relative z-10 max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold text-white">The Peak Advantage</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-left">
              <div className="space-y-2">
                <span className="text-4xl font-bold text-blue-500">24/7</span>
                <p className="text-gray-300 font-semibold">Support Operations</p>
                <p className="text-gray-500 text-sm leading-tight">Always available for emergency staffing needs.</p>
              </div>
              <div className="space-y-2">
                <span className="text-4xl font-bold text-blue-500">100%</span>
                <p className="text-gray-300 font-semibold">STOW Compliant</p>
                <p className="text-gray-500 text-sm leading-tight">Meeting the highest safety standards in T&T.</p>
              </div>
              <div className="space-y-2">
                <span className="text-4xl font-bold text-blue-500">Region</span>
                <p className="text-gray-300 font-semibold">Wide Reach</p>
                <p className="text-gray-500 text-sm leading-tight">Serving clients from T&T to Guyana and Barbados.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
