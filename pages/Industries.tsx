
import React from 'react';
import { INDUSTRIES } from '../constants';
import { ShieldCheck, HardHat, ClipboardCheck, Users2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const IndustriesPage: React.FC = () => {
  return (
    <div className="space-y-24 pb-24">
      {/* Header */}
      <section className="bg-gray-900 text-white py-32 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=2000" 
            alt="Industry BG" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold">Industry Specialized</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Deep domain expertise across the Caribbean's most critical economic sectors.
          </p>
        </div>
      </section>

      {/* Industry Detail Sections */}
      {INDUSTRIES.map((industry, idx) => (
        <section key={industry.id} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`flex flex-col ${idx % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-16 items-center`}>
            <div className="flex-1 space-y-8">
              <div className="inline-flex items-center gap-2 text-blue-600 font-bold uppercase tracking-widest text-sm">
                <span className="w-8 h-[2px] bg-blue-600"></span>
                {industry.name} Sector
              </div>
              <h2 className="text-4xl font-bold text-gray-900">{industry.name} Staffing & Compliance</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                {industry.description} We ensure that every placement meets regional standards, including STOW for energy and Ministry of Health protocols for medical staffing.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {industry.points.map((point) => (
                  <div key={point} className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100">
                    <ShieldCheck className="w-5 h-5 text-blue-600 shrink-0" />
                    <span className="font-semibold text-gray-800">{point}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <Link to="/contact" className="bg-gray-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-gray-800 transition-all active:scale-95 inline-block">
                  Request {industry.name} Talent
                </Link>
              </div>
            </div>

            <div className="flex-1 w-full relative">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src={industry.image} 
                  alt={industry.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 md:-right-12 bg-white p-8 rounded-2xl shadow-xl hidden md:block max-w-[280px]">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-blue-100 p-3 rounded-lg"><ClipboardCheck className="w-6 h-6 text-blue-600" /></div>
                  <p className="font-bold text-gray-900">Verified & Certified</p>
                </div>
                <p className="text-sm text-gray-500">Every candidate undergoes rigorous background and certification checks before deployment.</p>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Compliance Section */}
      <section className="bg-blue-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Quality & Safety First</h2>
            <p className="text-gray-600">We adhere to international best practices and local regulations.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto shadow-sm">
                <HardHat className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold">STOW Certified</h3>
              <p className="text-gray-600">Ensuring high health, safety, and environment standards for all energy deployments.</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto shadow-sm">
                <ClipboardCheck className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold">Rigorous Screening</h3>
              <p className="text-gray-600">Background checks, medical screening, and technical assessments for every hire.</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto shadow-sm">
                <Users2 className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold">Local Content</h3>
              <p className="text-gray-600">Prioritizing development and placement of Trinidad and Tobago nationals.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IndustriesPage;
