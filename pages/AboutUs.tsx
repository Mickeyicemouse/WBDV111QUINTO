import { ShieldCheck, Award, Truck } from "lucide-react";

export function AboutUs() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative h-[400px] flex items-center bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img 
            src="https://images.unsplash.com/photo-1776464788846-ee4b83a16da9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0ZWNoJTIwc3RvcmV8ZW58MXx8fHwxNzc2OTYyNDA5fDA&ixlib=rb-4.1.0&q=80&w=1080" 
            alt="Store Interior" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">About ZZMTRADING</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Your trusted partner in high-performance computing since 2015. We build, sell, and repair the machines that power your passion.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Story</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="prose prose-lg text-slate-600 mx-auto">
          <p className="mb-6">
            Founded in a small garage by two gaming enthusiasts, ZZMTRADING started with a simple mission: to make high-end PC gaming accessible without compromising on quality or performance.
          </p>
          <p className="mb-6">
            Over the years, we've grown from building custom rigs for friends to becoming a premier destination for gamers, creators, and tech professionals nationwide. We pride ourselves on curating only the best components and offering unparalleled technical support.
          </p>
          <p>
            Today, our team consists of certified technicians, lifelong gamers, and hardware fanatics who test every product we sell. Whether you're buying a pre-built powerhouse, sourcing components for your next build, or bringing a beloved machine back to life, you're in good hands.
          </p>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-slate-50 py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm text-center">
              <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Quality First</h3>
              <p className="text-slate-600">Every component we sell goes through rigorous testing. We don't sell anything we wouldn't use in our own personal rigs.</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm text-center">
              <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Expert Support</h3>
              <p className="text-slate-600">Our support team isn't reading from a script. They're actual builders and technicians who understand the nuances of PC hardware.</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm text-center">
              <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Truck className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Fast & Secure</h3>
              <p className="text-slate-600">We pack every order with extreme care and partner with top-tier logistics companies to ensure your gear arrives safely and quickly.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="container mx-auto px-4 py-16 max-w-4xl text-center">
        <h2 className="text-3xl font-bold text-slate-900 mb-8">Get In Touch</h2>
        <div className="bg-white border border-slate-200 rounded-2xl p-8 flex flex-col md:flex-row justify-center gap-12">
          <div>
            <h4 className="font-bold text-slate-900 mb-2">Main Headquarters</h4>
            <p className="text-slate-600">123 Tech Avenue, Suite 400<br/>Silicon Valley, CA 94025</p>
          </div>
          <div>
            <h4 className="font-bold text-slate-900 mb-2">Contact Info</h4>
            <p className="text-slate-600">support@zzmtrading.com<br/>1-800-ZZM-TECH</p>
          </div>
          <div>
            <h4 className="font-bold text-slate-900 mb-2">Hours of Operation</h4>
            <p className="text-slate-600">Mon-Fri: 9AM - 8PM EST<br/>Sat-Sun: 10AM - 6PM EST</p>
          </div>
        </div>
      </section>
    </div>
  );
}
