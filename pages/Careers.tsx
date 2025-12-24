
import React from 'react';
import { Search, Briefcase, MapPin, ArrowRight, UserPlus } from 'lucide-react';
import { Link } from 'react-router-dom';

const CareersPage: React.FC = () => {
  const jobs = [
    { id: 1, title: 'HSE Officer', sector: 'Oil & Gas', location: 'San Fernando', type: 'Contract' },
    { id: 2, title: 'Registered Nurse (NICU)', sector: 'Healthcare', location: 'Port of Spain', type: 'Permanent' },
    { id: 3, title: 'Executive Chef', sector: 'Hospitality', location: 'Tobago', type: 'Permanent' },
    { id: 4, title: 'Rig Electrician', sector: 'Oil & Gas', location: 'Offshore', type: 'Contract' },
  ];

  return (
    <div className="pb-24">
      {/* Hero */}
      <section className="bg-blue-600 py-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -ml-48 -mt-48" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">Your Next Career Milestone Awaits.</h1>
            <p className="text-xl text-blue-100">Browse current openings or join our talent community for future opportunities.</p>
            
            <div className="flex bg-white rounded-2xl p-2 shadow-2xl">
              <div className="flex-1 flex items-center px-4 gap-2 border-r border-gray-100">
                <Search className="w-5 h-5 text-gray-400" />
                <input type="text" placeholder="Search roles..." className="w-full bg-transparent border-none focus:ring-0 text-gray-800 placeholder:text-gray-400 py-3" />
              </div>
              <button className="bg-blue-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-blue-700 transition-all">Search</button>
            </div>
          </div>
        </div>
      </section>

      {/* Talent Form CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10">
        <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-6">
            <div className="bg-blue-50 p-4 rounded-2xl">
              <UserPlus className="w-8 h-8 text-blue-600" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900">Join our Talent Community</h3>
              <p className="text-gray-500">Not ready to apply? Let us find roles for you.</p>
            </div>
          </div>
          <Link to="/contact" className="bg-gray-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-gray-800 transition-all whitespace-nowrap">
            Register your CV
          </Link>
        </div>
      </section>

      {/* Job List */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Featured Openings</h2>
          <div className="flex gap-4">
            <span className="text-sm font-semibold text-gray-500 bg-gray-100 px-4 py-2 rounded-full">All Regions</span>
            <span className="text-sm font-semibold text-gray-500 bg-gray-100 px-4 py-2 rounded-full">All Sectors</span>
          </div>
        </div>

        <div className="space-y-4">
          {jobs.map((job) => (
            <div key={job.id} className="group bg-white p-6 rounded-2xl border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-center gap-6">
                <div className="bg-gray-50 p-4 rounded-xl group-hover:bg-blue-50 transition-colors">
                  <Briefcase className="w-6 h-6 text-gray-400 group-hover:text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">{job.title}</h3>
                  <div className="flex gap-4 mt-1">
                    <span className="text-sm text-gray-500 flex items-center gap-1"><MapPin className="w-4 h-4" /> {job.location}</span>
                    <span className="text-sm text-gray-500 flex items-center gap-1"><Briefcase className="w-4 h-4" /> {job.sector}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <span className="hidden sm:block text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1 rounded-full">{job.type}</span>
                <Link to="/contact" className="bg-gray-100 text-gray-900 px-6 py-3 rounded-xl font-bold hover:bg-gray-200 transition-all flex items-center gap-2">
                  Apply Now <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="text-blue-600 font-bold hover:underline">View All 124 Openings</button>
        </div>
      </section>
    </div>
  );
};

export default CareersPage;
