
import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Minus, Plus, Share2, Heart, MapPin, Truck, Wallet, Shield } from 'lucide-react';

interface Product {
  image: string;
  title: string;
  price: number;
  discount: number;
  rating: number;
  reviews: number;
}

export default function ProductDetail() {
  const location = useLocation();
  const navigate = useNavigate();
  const { product } = location.state as { product: Product };
  const [quantity, setQuantity] = useState(1);

  const originalPrice = Math.round(product.price / (1 - product.discount / 100));

  const handleBuyNow = () => {
    navigate('/address', {
      state: { product, quantity, totalAmount: product.price * quantity },
    });
  };

  const handleAddToCart = () => {
    alert('Product added to cart!');
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-8">
      {/* Breadcrumb - mobile pe scrollable */}
      <div className="bg-white border-b sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 py-2.5">
          <div className="flex items-center gap-1.5 text-xs text-gray-600 overflow-x-auto whitespace-nowrap">
            <span className="hover:text-orange-600 cursor-pointer">Home</span>
            <span>/</span>
            <span className="hover:text-orange-600 cursor-pointer">Health & Beauty</span>
            <span>/</span>
            <span className="hover:text-orange-600 cursor-pointer">Bath & Body</span>
            <span>/</span>
            <span className="text-gray-900 font-medium">
              {product.title.substring(0, 40)}...
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Main Product Section */}
        <div className="flex flex-col lg:flex-row lg:gap-6 py-5">
          {/* Left - Image + thumbnails */}
          <div className="w-full lg:w-5/12 bg-white rounded-lg p-4 mb-4 lg:mb-0">
            <div className="relative">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-[380px] sm:h-[460px] lg:h-[520px] object-contain mx-auto"
              />
              <div className="absolute top-3 right-3 flex gap-2">
                <button className="bg-white p-2.5 rounded-full shadow-md hover:bg-gray-50">
                  <Share2 className="w-5 h-5 text-gray-700" />
                </button>
                <button className="bg-white p-2.5 rounded-full shadow-md hover:bg-gray-50">
                  <Heart className="w-5 h-5 text-gray-700" />
                </button>
              </div>
            </div>

            {/* Thumbnails */}
            <div className="mt-4 flex gap-2 overflow-x-auto pb-2 snap-x snap-mandatory">
              {[1, 2, 3, 4].map((_, idx) => (
                <img
                  key={idx}
                  src={product.image}
                  alt={`thumb ${idx + 1}`}
                  className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded border-2 border-gray-200 hover:border-orange-500 snap-start flex-shrink-0 transition-colors"
                />
              ))}
            </div>
          </div>

          {/* Middle - Product Info + Buttons */}
          <div className="w-full lg:w-4/12 bg-white rounded-lg p-5 lg:p-6">
            <div className="bg-gradient-to-r from-red-500 to-orange-600 text-white px-3 py-1.5 rounded text-sm font-bold inline-block mb-4">
              12.12 PRICE LIVE NOW!
            </div>

            <h1 className="text-xl sm:text-2xl font-semibold leading-tight mb-3">
              {product.title}
            </h1>

            <div className="flex items-center gap-3 mb-4">
              <div className="flex text-yellow-400 text-xl">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>{i < Math.floor(product.rating) ? '★' : '☆'}</span>
                ))}
              </div>
              <span className="text-blue-600 text-sm hover:underline">
                {product.reviews} Ratings
              </span>
            </div>

            <div className="border-y py-4 mb-5">
              <div className="flex flex-wrap items-baseline gap-3">
                <span className="text-3xl sm:text-4xl font-bold text-orange-600">
                  Rs. {product.price.toLocaleString()}
                </span>
                <span className="text-lg text-gray-500 line-through">
                  Rs. {originalPrice.toLocaleString()}
                </span>
                <span className="text-base font-medium text-green-600">
                  -{product.discount}%
                </span>
              </div>
            </div>

            <div className="space-y-4 mb-6">
              <div className="flex justify-between text-sm">
                <span className="text-gray-700 font-medium">Scent</span>
                <span className="text-gray-600">Not Specified</span>
              </div>
            </div>

            <div className="flex items-center gap-4 mb-6">
              <span className="text-gray-700 font-medium">Quantity</span>
              <div className="flex border border-gray-300 rounded">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-2 hover:bg-gray-100 active:bg-gray-200"
                >
                  <Minus size={18} />
                </button>
                <span className="px-6 py-2 min-w-[60px] text-center font-medium border-x">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-2 hover:bg-gray-100 active:bg-gray-200"
                >
                  <Plus size={18} />
                </button>
              </div>
            </div>

            {/* Action Buttons - stack on mobile */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleBuyNow}
                className="flex-1 bg-[#2ABBE8] hover:bg-[#1a9bc9] text-white py-4 rounded-lg font-medium transition-colors text-lg active:scale-[0.98]"
              >
                Buy Now
              </button>
              <button
                onClick={handleAddToCart}
                className="flex-1 bg-[#F85606] hover:bg-[#d94805] text-white py-4 rounded-lg font-medium transition-colors text-lg active:scale-[0.98]"
              >
                Add to Cart
              </button>
            </div>
          </div>

          {/* Right Sidebar - Delivery + Seller + App */}
          <div className="w-full lg:w-3/12 space-y-5 mt-5 lg:mt-0">
            {/* Delivery Options */}
            <div className="bg-white rounded-lg p-5">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <MapPin size={20} className="text-gray-600" />
                Delivery Options
              </h3>
              <div className="space-y-4 text-sm">
                <div className="flex gap-3">
                  <Truck size={20} className="text-gray-600 mt-1" />
                  <div>
                    <div className="font-medium">Standard Delivery</div>
                    <div className="text-gray-600">Get by 22-24 Dec</div>
                    <div className="font-medium mt-1">Rs. 165</div>
                  </div>
                </div>

                <div className="flex gap-3">
                  <MapPin size={20} className="text-gray-600 mt-1" />
                  <div>
                    <div className="font-medium">Collection Point</div>
                    <div className="text-gray-600">Get by 22-24 Dec</div>
                    <div className="font-medium mt-1">Rs. 50</div>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Wallet size={20} className="text-gray-600 mt-1" />
                  <div className="font-medium">Cash on Delivery Available</div>
                </div>
              </div>
            </div>

            {/* Return & Warranty */}
            <div className="bg-white rounded-lg p-5">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <Shield size={20} />
                Return & Warranty
              </h3>
              <div className="space-y-2 text-sm">
                <div>✓ 14 days easy return</div>
                <div>✕ Warranty not available</div>
              </div>
            </div>

            {/* QR Code + App Promotion */}
           

            {/* Seller Info */}
            <div className="bg-white rounded-lg p-5">
              

              <div className="grid grid-cols-3 text-center border-t pt-4 text-xs sm:text-sm">
                <div>
                  <p className="text-gray-500">Positive Ratings</p>
                  <p className="font-bold text-green-600">89%</p>
                </div>
                <div>
                  <p className="text-gray-500">Ship on Time</p>
                  <p className="font-bold text-green-600">86%</p>
                </div>
                <div>
                  <p className="text-gray-500">Chat Response</p>
                  <p className="text-gray-400">Not enough data</p>
                </div>
              </div>

              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}