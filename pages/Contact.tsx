
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, Loader2, CheckCircle } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  return (
    <div className="pb-24">
      {/* Header */}
      <section className="bg-gray-50 py-24 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Partner With Us</h1>
          <p className="text-gray-600 mt-4 text-lg">Speak with our recruitment consultants today.</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12">
        <div className="bg-white rounded-[2rem] shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-5 border border-gray-100">
          
          {/* Info Side */}
          <div className="lg:col-span-2 bg-blue-600 p-12 text-white relative">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <MessageSquare className="w-32 h-32" />
            </div>
            
            <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
            <p className="text-blue-100 mb-12">We usually respond to inquiries within 24 business hours.</p>

            <div className="space-y-8 relative z-10">
              <div className="flex items-start gap-4">
                <div className="bg-white/10 p-3 rounded-xl"><Phone className="w-6 h-6" /></div>
                <div>
                  <p className="text-sm text-blue-200 uppercase font-bold tracking-widest">Phone</p>
                  <p className="text-lg font-medium">+592 555-GUYANA</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-white/10 p-3 rounded-xl"><Mail className="w-6 h-6" /></div>
                <div>
                  <p className="text-sm text-blue-200 uppercase font-bold tracking-widest">Email</p>
                  <p className="text-lg font-medium">solutions@guyanarecruitment.gy</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-white/10 p-3 rounded-xl"><MapPin className="w-6 h-6" /></div>
                <div>
                  <p className="text-sm text-blue-200 uppercase font-bold tracking-widest">Office</p>
                  <p className="text-lg font-medium">High Street, Georgetown<br />Guyana, South America</p>
                </div>
              </div>
            </div>

            <div className="mt-20">
              <h4 className="font-bold mb-4">Our Presence</h4>
              <div className="flex gap-4">
                {['Georgetown', 'Linden', 'Guyana', 'Barbados', 'Trinidad'].map(loc => (
                  <span key={loc} className="bg-white/10 px-3 py-1 rounded-full text-xs font-semibold">{loc}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-3 p-12">
            {isSuccess ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4 animate-in fade-in zoom-in duration-500">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900">Message Received!</h3>
                <p className="text-gray-600 max-w-sm">
                  Thank you for reaching out. A recruitment consultant will be in touch with you shortly.
                </p>
                <button 
                  onClick={() => setIsSuccess(false)}
                  className="mt-6 text-blue-600 font-bold hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Full Name</label>
                    <input required type="text" className="w-full bg-gray-50 border-transparent rounded-xl px-4 py-3 focus:bg-white focus:ring-2 focus:ring-blue-500 transition-all outline-none" placeholder="Jane Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Company Name</label>
                    <input type="text" className="w-full bg-gray-50 border-transparent rounded-xl px-4 py-3 focus:bg-white focus:ring-2 focus:ring-blue-500 transition-all outline-none" placeholder="Essequibo Oil Ltd" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Email Address</label>
                    <input required type="email" className="w-full bg-gray-50 border-transparent rounded-xl px-4 py-3 focus:bg-white focus:ring-2 focus:ring-blue-500 transition-all outline-none" placeholder="jane@example.com" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Phone Number</label>
                    <input required type="tel" className="w-full bg-gray-50 border-transparent rounded-xl px-4 py-3 focus:bg-white focus:ring-2 focus:ring-blue-500 transition-all outline-none" placeholder="+592 ..." />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Industry of Interest</label>
                  <select className="w-full bg-gray-50 border-transparent rounded-xl px-4 py-3 focus:bg-white focus:ring-2 focus:ring-blue-500 transition-all outline-none appearance-none">
                    <option>Select Industry</option>
                    <option>Oil & Gas</option>
                    <option>Healthcare</option>
                    <option>Hospitality</option>
                    <option>Executive Search</option>
                    <option>General Inquiry</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Message</label>
                  <textarea required rows={4} className="w-full bg-gray-50 border-transparent rounded-xl px-4 py-3 focus:bg-white focus:ring-2 focus:ring-blue-500 transition-all outline-none resize-none" placeholder="How can we help you today?"></textarea>
                </div>

                <button 
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all flex items-center justify-center gap-3 shadow-xl shadow-blue-600/20 active:scale-95 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message <Send className="w-5 h-5" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="bg-gray-200 h-[400px] rounded-[2.5rem] flex items-center justify-center text-gray-500 font-medium border border-gray-100">
          <div className="text-center">
            <MapPin className="w-12 h-12 mx-auto mb-4 text-gray-400" />
            <p>Interactive Map Component for Georgetown HQ</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
