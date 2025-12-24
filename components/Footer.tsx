
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Linkedin, Twitter, Globe2 } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Globe2 className="w-8 h-8 text-blue-400" />
              <span className="text-xl font-bold uppercase">Guyana Recruitment Services</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Guyana's leading recruitment partner. Connecting top-tier talent with the energy, medical, and hospitality industries across the Caribbean.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-gray-400 hover:text-white text-sm transition-colors">Our Story</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white text-sm transition-colors">Staffing Solutions</Link></li>
              <li><Link to="/industries" className="text-gray-400 hover:text-white text-sm transition-colors">Industries Served</Link></li>
              <li><Link to="/careers" className="text-gray-400 hover:text-white text-sm transition-colors">Job Seekers</Link></li>
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Sectors</h4>
            <ul className="space-y-4">
              <li><Link to="/industries" className="text-gray-400 hover:text-white text-sm transition-colors">Oil & Gas</Link></li>
              <li><Link to="/industries" className="text-gray-400 hover:text-white text-sm transition-colors">Healthcare</Link></li>
              <li><Link to="/industries" className="text-gray-400 hover:text-white text-sm transition-colors">Hospitality</Link></li>
              <li><Link to="/industries" className="text-gray-400 hover:text-white text-sm transition-colors">Executive Search</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-400 shrink-0" />
                <span className="text-gray-400 text-sm">Georgetown, Guyana, South America.</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-400 shrink-0" />
                <span className="text-gray-400 text-sm">+592 555-GUYANA</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-400 shrink-0" />
                <span className="text-gray-400 text-sm">hello@guyanarecruitment.gy</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} Guyana Recruitment Services. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-gray-500">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
            <a href="#" className="hover:text-white">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
