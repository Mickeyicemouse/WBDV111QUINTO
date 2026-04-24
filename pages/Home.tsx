import { Link } from "react-router";
import { ArrowRight, Zap, Shield, Clock } from "lucide-react";
import { mockProducts } from "../data/products";
import { ProductCard } from "../components/ProductCard";

export function Home() {
  const trendingProducts = mockProducts.slice(0, 4);

  return (
    <div className="flex flex-col gap-16 pb-16">
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img 
            src="https://images.unsplash.com/photo-1776464788846-ee4b83a16da9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0ZWNoJTIwc3RvcmV8ZW58MXx8fHwxNzc2OTYyNDA5fDA&ixlib=rb-4.1.0&q=80&w=1080" 
            alt="Modern Tech Store" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 to-transparent" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-4">
              Level Up Your <span className="text-blue-500">Performance</span>
            </h1>
            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
              Discover the ultimate collection of high-end gaming PCs, components, and accessories. Built for gamers, by gamers.
            </p>
            <div className="flex gap-4">
              <Link to="/products" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 rounded-full font-bold transition-colors flex items-center gap-2">
                Shop Now <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-start gap-4">
            <div className="bg-blue-50 text-blue-600 p-3 rounded-xl">
              <Zap className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 mb-1">Ultra-Fast Shipping</h3>
              <p className="text-sm text-slate-500 leading-relaxed">Get your gear when you need it with our expedited delivery options.</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-start gap-4">
            <div className="bg-blue-50 text-blue-600 p-3 rounded-xl">
              <Shield className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 mb-1">Secure Checkout</h3>
              <p className="text-sm text-slate-500 leading-relaxed">Your payment information is encrypted and securely processed.</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-start gap-4">
            <div className="bg-blue-50 text-blue-600 p-3 rounded-xl">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 mb-1">24/7 Support</h3>
              <p className="text-sm text-slate-500 leading-relaxed">Our technical experts are available around the clock to help you.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trending Products */}
      <section className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Trending Now</h2>
          <Link to="/products" className="text-blue-600 font-medium hover:text-blue-700 flex items-center gap-1">
            View all <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trendingProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Categories Banner */}
      <section className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link to="/products?category=gaming-pcs" className="relative h-64 rounded-2xl overflow-hidden group">
            <img src="https://images.unsplash.com/photo-1626218174358-7769486c4b79?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1pbmclMjBwY3xlbnwxfHx8fDE3NzY5NjI0MDl8MA&ixlib=rb-4.1.0&q=80&w=1080" alt="Gaming PCs" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            <div className="absolute bottom-6 left-6">
              <h3 className="text-2xl font-bold text-white mb-2">Gaming PCs</h3>
              <span className="text-blue-400 font-medium group-hover:text-blue-300 transition-colors">Shop Collection →</span>
            </div>
          </Link>
          <Link to="/products?category=laptops" className="relative h-64 rounded-2xl overflow-hidden group">
            <img src="https://images.unsplash.com/photo-1511385348-a52b4a160dc2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXB0b3AlMjBjb21wdXRlcnxlbnwxfHx8fDE3NzY5MzQ5MTR8MA&ixlib=rb-4.1.0&q=80&w=1080" alt="Laptops" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            <div className="absolute bottom-6 left-6">
              <h3 className="text-2xl font-bold text-white mb-2">Performance Laptops</h3>
              <span className="text-blue-400 font-medium group-hover:text-blue-300 transition-colors">Shop Collection →</span>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}
