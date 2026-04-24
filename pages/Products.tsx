import { useState } from "react";
import { LayoutGrid, List, Filter, ChevronDown } from "lucide-react";
import { mockProducts } from "../data/products";
import { ProductCard } from "../components/ProductCard";

export function Products() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <div className="text-sm text-slate-500 mb-6">
        Home / <span className="text-slate-900 font-medium">All Products</span>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar Filters */}
        <div className="w-full lg:w-64 flex-shrink-0">
          <div className="bg-white border border-slate-200 rounded-xl p-5 sticky top-24">
            <div className="flex items-center gap-2 font-bold text-slate-900 mb-6 pb-4 border-b border-slate-100">
              <Filter className="w-5 h-5" />
              Filters
            </div>

            {/* Categories */}
            <div className="mb-6">
              <h3 className="font-semibold text-slate-900 mb-3 flex justify-between items-center cursor-pointer">
                Categories <ChevronDown className="w-4 h-4" />
              </h3>
              <div className="space-y-2.5">
                {["Gaming PCs", "Laptops", "Components", "Accessories", "Monitors"].map((cat) => (
                  <label key={cat} className="flex items-center gap-3 cursor-pointer group">
                    <input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500 cursor-pointer" />
                    <span className="text-sm text-slate-600 group-hover:text-slate-900 transition-colors">{cat}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Price Range */}
            <div className="mb-6">
              <h3 className="font-semibold text-slate-900 mb-3 flex justify-between items-center cursor-pointer">
                Price Range <ChevronDown className="w-4 h-4" />
              </h3>
              <div className="space-y-4">
                <input type="range" min="0" max="5000" className="w-full accent-blue-600" />
                <div className="flex items-center justify-between gap-4">
                  <div className="flex-1 bg-slate-50 border border-slate-200 rounded-md p-2">
                    <span className="text-xs text-slate-400 block mb-1">Min</span>
                    <span className="text-sm font-medium">$0</span>
                  </div>
                  <div className="flex-1 bg-slate-50 border border-slate-200 rounded-md p-2">
                    <span className="text-xs text-slate-400 block mb-1">Max</span>
                    <span className="text-sm font-medium">$5,000+</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Brands */}
            <div>
              <h3 className="font-semibold text-slate-900 mb-3 flex justify-between items-center cursor-pointer">
                Brands <ChevronDown className="w-4 h-4" />
              </h3>
              <div className="space-y-2.5">
                {["NVIDIA", "AMD", "Intel", "Asus", "Corsair"].map((brand) => (
                  <label key={brand} className="flex items-center gap-3 cursor-pointer group">
                    <input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500 cursor-pointer" />
                    <span className="text-sm text-slate-600 group-hover:text-slate-900 transition-colors">{brand}</span>
                  </label>
                ))}
              </div>
            </div>
            
            <button className="w-full mt-8 bg-blue-50 text-blue-600 font-semibold py-2.5 rounded-lg hover:bg-blue-100 transition-colors">
              Apply Filters
            </button>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1">
          {/* Top Bar */}
          <div className="bg-white border border-slate-200 rounded-xl p-4 mb-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-sm text-slate-500">
              Showing <span className="font-medium text-slate-900">{mockProducts.length}</span> results
            </div>
            
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="text-sm text-slate-500">Sort by:</span>
                <select className="border border-slate-200 rounded-lg text-sm px-3 py-1.5 outline-none focus:border-blue-500">
                  <option>Featured</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Newest Arrivals</option>
                  <option>Customer Rating</option>
                </select>
              </div>
              
              <div className="flex items-center bg-slate-100 rounded-lg p-1">
                <button 
                  onClick={() => setViewMode("grid")}
                  className={`p-1.5 rounded-md transition-colors ${viewMode === "grid" ? "bg-white shadow-sm text-blue-600" : "text-slate-500 hover:text-slate-900"}`}
                >
                  <LayoutGrid className="w-4 h-4" />
                </button>
                <button 
                  onClick={() => setViewMode("list")}
                  className={`p-1.5 rounded-md transition-colors ${viewMode === "list" ? "bg-white shadow-sm text-blue-600" : "text-slate-500 hover:text-slate-900"}`}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Product Grid/List */}
          <div className={
            viewMode === "grid" 
              ? "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6" 
              : "flex flex-col gap-6"
          }>
            {mockProducts.map((product) => (
              <ProductCard key={product.id} product={product} layout={viewMode} />
            ))}
          </div>
          
          {/* Pagination */}
          <div className="mt-12 flex justify-center">
            <div className="flex gap-1">
              <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 text-slate-500 hover:bg-slate-50 disabled:opacity-50" disabled>
                &larr;
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-blue-600 text-white font-medium">1</button>
              <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50 font-medium">2</button>
              <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50 font-medium">3</button>
              <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50">
                &rarr;
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
