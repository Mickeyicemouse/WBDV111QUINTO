import { Outlet, Link, useLocation } from "react-router";
import { Search, User, ShoppingCart, Menu, ChevronDown, Monitor, Laptop, Cpu, Headphones } from "lucide-react";
import { useState } from "react";
import { Toaster } from "sonner";

export function Layout() {
  const location = useLocation();
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "About Us", path: "/about" },
  ];

  const categories = [
    { name: "Gaming PCs", icon: <Monitor className="w-4 h-4" /> },
    { name: "Laptops", icon: <Laptop className="w-4 h-4" /> },
    { name: "Components", icon: <Cpu className="w-4 h-4" /> },
    { name: "Accessories", icon: <Headphones className="w-4 h-4" /> },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans">
      <Toaster position="top-center" richColors />

      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between gap-4">
          <Link to="/" className="text-2xl font-black tracking-tighter text-blue-900">
            ZZM<span className="text-blue-600">TRADING</span>
          </Link>

          <div className="flex-1 max-w-xl hidden md:flex items-center">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search products, brands, parts..."
                className="w-full border border-slate-300 rounded-full py-2 pl-4 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
              />
              <button className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-blue-600">
                <Search className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <Link to="/login" className="flex flex-col items-center gap-1 text-slate-600 hover:text-blue-600 transition-colors">
              <User className="w-5 h-5" />
              <span className="text-xs hidden sm:block">Account</span>
            </Link>
            <Link to="/login" className="flex flex-col items-center gap-1 text-slate-600 hover:text-blue-600 transition-colors relative">
              <div className="relative">
                <ShoppingCart className="w-5 h-5" />
                <span className="absolute -top-1.5 -right-1.5 bg-blue-600 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                  3
                </span>
              </div>
              <span className="text-xs hidden sm:block">Cart</span>
            </Link>
          </div>
        </div>

        {/* Navigation Bar */}
        <div className="border-t border-slate-100 bg-white hidden md:block">
          <div className="container mx-auto px-4 flex items-center gap-8">
            <div className="relative">
              <button 
                className="flex items-center gap-2 bg-blue-50 text-blue-700 font-medium py-3 px-4 hover:bg-blue-100 transition-colors"
                onMouseEnter={() => setIsCategoriesOpen(true)}
                onMouseLeave={() => setIsCategoriesOpen(false)}
              >
                <Menu className="w-5 h-5" />
                Categories
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {isCategoriesOpen && (
                <div 
                  className="absolute top-full left-0 w-64 bg-white border border-slate-200 shadow-xl rounded-b-lg overflow-hidden"
                  onMouseEnter={() => setIsCategoriesOpen(true)}
                  onMouseLeave={() => setIsCategoriesOpen(false)}
                >
                  {categories.map((cat, idx) => (
                    <a key={idx} href="#" className="flex items-center gap-3 px-4 py-3 hover:bg-slate-50 text-sm font-medium text-slate-700 transition-colors border-b border-slate-50 last:border-none">
                      <span className="text-blue-600">{cat.icon}</span>
                      {cat.name}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <nav className="flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-medium py-3 border-b-2 transition-colors ${
                    location.pathname === link.path
                      ? "border-blue-600 text-blue-600"
                      : "border-transparent text-slate-600 hover:text-blue-600"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12 mt-12">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="text-2xl font-black tracking-tighter text-white mb-4">
              ZZM<span className="text-blue-500">TRADING</span>
            </div>
            <p className="text-sm text-slate-400 mb-4">
              Your ultimate destination for premium gaming gear, performance components, and expert technical support.
            </p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Shop</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/products" className="hover:text-blue-400 transition-colors">Gaming PCs</Link></li>
              <li><Link to="/products" className="hover:text-blue-400 transition-colors">Laptops</Link></li>
              <li><Link to="/products" className="hover:text-blue-400 transition-colors">Components</Link></li>
              <li><Link to="/products" className="hover:text-blue-400 transition-colors">Accessories</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Repair Status</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Warranty Info</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Newsletter</h4>
            <p className="text-sm text-slate-400 mb-4">Subscribe for the latest drops and deals.</p>
            <div className="flex">
              <input type="email" placeholder="Email address" className="bg-slate-800 border border-slate-700 px-3 py-2 text-sm rounded-l focus:outline-none focus:border-blue-500 w-full" />
              <button className="bg-blue-600 text-white px-4 py-2 text-sm font-medium rounded-r hover:bg-blue-700 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
