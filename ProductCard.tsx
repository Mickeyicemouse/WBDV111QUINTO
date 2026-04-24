import { Star, ShoppingCart } from "lucide-react";

interface ProductCardProps {
  product: {
    id: number;
    name: string;
    category: string;
    price: number;
    originalPrice: number;
    rating: number;
    reviews: number;
    image: string;
    isDeal: boolean;
    inStock: boolean;
  };
  layout?: "grid" | "list";
}

export function ProductCard({ product, layout = "grid" }: ProductCardProps) {
  const isListView = layout === "list";
  const discount = Math.round((1 - product.price / product.originalPrice) * 100);

  if (isListView) {
    return (
      <div className="bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow flex flex-col sm:flex-row group">
        <div className="relative w-full sm:w-64 h-48 sm:h-auto bg-slate-50 flex-shrink-0">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
          />
          {product.isDeal && discount > 0 && (
            <div className="absolute top-3 left-3 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-md shadow-sm">
              SAVE {discount}%
            </div>
          )}
        </div>
        <div className="p-6 flex flex-col justify-between flex-1">
          <div>
            <div className="text-xs text-slate-500 font-medium mb-1 uppercase tracking-wider">{product.category}</div>
            <h3 className="font-semibold text-slate-900 text-lg mb-2 line-clamp-2 leading-snug">{product.name}</h3>
            
            <div className="flex items-center gap-1 mb-4">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? "fill-current" : "text-slate-300"}`} />
                ))}
              </div>
              <span className="text-xs text-slate-500 ml-1">({product.reviews})</span>
            </div>
          </div>
          
          <div className="flex items-end justify-between mt-4">
            <div>
              {product.isDeal && product.originalPrice > product.price && (
                <div className="text-sm text-slate-400 line-through mb-0.5">${product.originalPrice.toFixed(2)}</div>
              )}
              <div className="text-2xl font-bold text-slate-900">${product.price.toFixed(2)}</div>
            </div>
            <button 
              disabled={!product.inStock}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full font-medium transition-colors ${
                product.inStock 
                  ? "bg-blue-600 text-white hover:bg-blue-700" 
                  : "bg-slate-100 text-slate-400 cursor-not-allowed"
              }`}
            >
              <ShoppingCart className="w-4 h-4" />
              {product.inStock ? "Add to Cart" : "Out of Stock"}
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow flex flex-col group">
      <div className="relative aspect-square bg-slate-50 overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
        />
        {product.isDeal && discount > 0 && (
          <div className="absolute top-3 left-3 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-md shadow-sm z-10">
            SAVE {discount}%
          </div>
        )}
      </div>
      <div className="p-5 flex flex-col flex-1">
        <div className="text-xs text-slate-500 font-medium mb-1.5 uppercase tracking-wider">{product.category}</div>
        <h3 className="font-semibold text-slate-900 mb-2 line-clamp-2 leading-snug flex-1">{product.name}</h3>
        
        <div className="flex items-center gap-1 mb-4">
          <div className="flex text-amber-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className={`w-3.5 h-3.5 ${i < Math.floor(product.rating) ? "fill-current" : "text-slate-300"}`} />
            ))}
          </div>
          <span className="text-xs text-slate-500 ml-1">({product.reviews})</span>
        </div>
        
        <div className="flex items-end justify-between mt-auto">
          <div>
            {product.isDeal && product.originalPrice > product.price && (
              <div className="text-xs text-slate-400 line-through mb-0.5">${product.originalPrice.toFixed(2)}</div>
            )}
            <div className="text-lg font-bold text-slate-900">${product.price.toFixed(2)}</div>
          </div>
          <button 
            disabled={!product.inStock}
            className={`w-9 h-9 rounded-full flex items-center justify-center transition-colors ${
              product.inStock 
                ? "bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white" 
                : "bg-slate-50 text-slate-300 cursor-not-allowed"
            }`}
          >
            <ShoppingCart className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
