
// export default function FlashSale() {
//   const products = [
//     {
//       image: 'https://img.drz.lazcdn.com/g/kf/S617bc4d0a76c48759db935a14617f2bfV.jpg_400x400q80.jpg',
//       title: 'Imported Electric Kettle 2Liter stainless steel with automatic switch and rapid boiling...',
//       price: 999,
//       originalPrice: 2000,
//       discount: 44,
//       badge: 'PACK OF 6'
//     },
//     {
//       image: 'https://img.drz.lazcdn.com/static/pk/p/7a33150c9dc7a00c27eaa40435f1f462.png_400x400q80.png',
//       title: 'Samsung A55 5G...',
//       price: 13000,
//       originalPrice: 20000,
//       discount: 38
//     },
//     {
//       image: 'https://img.drz.lazcdn.com/g/kf/Sea0b0e79b807490aa964ba6c7ca0062aZ.jpg_400x400q80.jpg_.avif',
//       title: 'NAVY BLUE BTS PRINTED WINTER WARM FLEECE HOODIE...',
//       price: 250,
//       originalPrice: 999,
//       discount: 57
//     },
//     {
//       image: 'https://img.drz.lazcdn.com/static/pk/p/921a00da2b21df53a924dd4724487073.jpg_400x400q80.jpg',
//       title: 'Beast Fitness Rubber Coated Exercise Dumbbell...',
//       price: 283,
//       originalPrice: 999,
//       discount: 26,
//       livePrice: true
//     },
//     {
//       image: 'https://img.drz.lazcdn.com/static/pk/p/614d1368b39f256ad7c7f174c9b3e6e0.jpg_400x400q80.jpg',
//       title: 'Samsung Chromebook 500C - Celeron processor...',
//       price: 6551,
//       originalPrice: 12000,
//       discount: 48,
//       livePrice: true
//     },
//     {
//       image: 'https://img.drz.lazcdn.com/g/kf/S944eecfc475c46dbb64e7a8d74095054q.jpg_400x400q80.jpg',
//       title: 'Soft Padded Liftup Fabric Bra for Women...',
//       price: 249,
//       originalPrice: 520,
//       discount: 39,
//       livePrice: true
//     }
//   ];

//   return (
//     <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 py-6 bg-gray-50">
//       <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6">

//         {/* Header */}
//         <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
//           <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800">
//             Flash Sale
//           </h2>
//           <button className="text-[#F85606] font-semibold text-sm sm:text-base border-2 border-[#F85606] px-4 sm:px-6 py-2 rounded hover:bg-[#F85606] hover:text-white transition">
//             SHOP ALL PRODUCTS
//           </button>
//         </div>

//         {/* Sale Label */}
//         <div className="mb-4">
//           <span className="inline-block bg-[#F85606] text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-t-lg font-bold text-xs sm:text-sm">
//             On Sale Now
//           </span>
//         </div>

//         {/* Products Grid */}
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4">
//           {products.map((product, index) => (
//             <div
//               key={index}
//               className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all cursor-pointer group"
//             >
//               {/* Image */}
//               <div className="relative overflow-hidden">
//                 {product.livePrice && (
//                   <div className="absolute top-2 left-0 bg-gradient-to-r from-red-600 to-pink-600 text-white text-[10px] sm:text-xs font-bold px-2 sm:px-3 py-1 rounded-r-full">
//                     12.12 PRICE <br /> LIVE NOW!
//                   </div>
//                 )}
//                 {product.badge && (
//                   <div className="absolute top-2 left-2 bg-white border-2 border-red-600 text-red-600 text-[10px] sm:text-xs font-bold px-2 py-1 rounded">
//                     {product.badge}
//                   </div>
//                 )}
//                 <img
//                   src={product.image}
//                   alt={product.title}
//                   className="w-full h-32 sm:h-40 md:h-44 lg:h-48 object-cover group-hover:scale-105 transition-transform"
//                 />
//               </div>

//               {/* Info */}
//               <div className="p-2 sm:p-3">
//                 <h3 className="text-xs sm:text-sm text-gray-700 mb-2 line-clamp-2 min-h-[36px]">
//                   {product.title}
//                 </h3>

//                 <span className="text-[#F85606] font-bold text-sm sm:text-base block">
//                   Rs.{product.price}
//                 </span>

//                 <div className="flex items-center gap-2 text-[10px] sm:text-xs">
//                   <span className="text-gray-400 line-through">
//                     Rs.{product.originalPrice}
//                   </span>
//                   <span className="text-gray-500">
//                     -{product.discount}%
//                   </span>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//       </div>
//     </div>
//   );
// }
import { useNavigate } from 'react-router-dom';

export default function FlashSale() {
  const navigate = useNavigate();

  const products = [
    {
      image: 'https://img.drz.lazcdn.com/g/kf/S617bc4d0a76c48759db935a14617f2bfV.jpg_400x400q80.jpg',
      title: 'Imported Electric Kettle 2Liter stainless steel with automatic switch and rapid boiling...',
      price: 999,
      originalPrice: 2000,
      discount: 44,
      badge: 'PACK OF 6'
    },
    {
      image: 'https://img.drz.lazcdn.com/static/pk/p/7a33150c9dc7a00c27eaa40435f1f462.png_400x400q80.png',
      title: 'Samsung A55 5G...',
      price: 13000,
      originalPrice: 20000,
      discount: 38
    },
    {
      image: 'https://img.drz.lazcdn.com/g/kf/Sea0b0e79b807490aa964ba6c7ca0062aZ.jpg_400x400q80.jpg_.avif',
      title: 'NAVY BLUE BTS PRINTED WINTER WARM FLEECE HOODIE...',
      price: 250,
      originalPrice: 999,
      discount: 57
    },
    {
      image: 'https://img.drz.lazcdn.com/static/pk/p/921a00da2b21df53a924dd4724487073.jpg_400x400q80.jpg',
      title: 'Beast Fitness Rubber Coated Exercise Dumbbell...',
      price: 283,
      originalPrice: 999,
      discount: 26,
      livePrice: true
    },
    {
      image: 'https://img.drz.lazcdn.com/static/pk/p/614d1368b39f256ad7c7f174c9b3e6e0.jpg_400x400q80.jpg',
      title: 'Samsung Chromebook 500C - Celeron processor...',
      price: 6551,
      originalPrice: 12000,
      discount: 48,
      livePrice: true
    },
    {
      image: 'https://img.drz.lazcdn.com/g/kf/S944eecfc475c46dbb64e7a8d74095054q.jpg_400x400q80.jpg',
      title: 'Soft Padded Liftup Fabric Bra for Women...',
      price: 249,
      originalPrice: 520,
      discount: 39,
      livePrice: true
    }
  ];

  // Ye interface match karna chahiye ProductDetail ke Product type se
  interface FlashProduct {
    image: string;
    title: string;
    price: number;
    originalPrice: number;
    discount: number;
    badge?: string;
    livePrice?: boolean;
    rating?: number;      // optional - agar chahiye to add kar dena
    reviews?: number;     // optional
  }

  const handleProductClick = (product: FlashProduct) => {
    // ProductDetail page ko wohi object pass kar rahe hain jo wo expect karta hai
    navigate('/product-detail', {  // ← yeh route change kar dena jo bhi tera detail page ka path hai
      state: {
        product: {
          image: product.image,
          title: product.title,
          price: product.price,
          discount: product.discount,
          // Agar rating/reviews chahiye to yahan fake/default daal sakta hai
          rating: 4.5,     // ya real data se aa raha ho to
          reviews: 128
        }
      }
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 py-6 bg-gray-50">
      <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800">
            Flash Sale
          </h2>
          <button className="text-[#F85606] font-semibold text-sm sm:text-base border-2 border-[#F85606] px-4 sm:px-6 py-2 rounded hover:bg-[#F85606] hover:text-white transition">
            SHOP ALL PRODUCTS
          </button>
        </div>

        {/* Sale Label */}
        <div className="mb-4">
          <span className="inline-block bg-[#F85606] text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-t-lg font-bold text-xs sm:text-sm">
            On Sale Now
          </span>
        </div>

        {/* Products Grid - now clickable */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4">
          {products.map((product, index) => (
            <div
              key={index}
              onClick={() => handleProductClick(product)}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all cursor-pointer group"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                {product.livePrice && (
                  <div className="absolute top-2 left-0 bg-gradient-to-r from-red-600 to-pink-600 text-white text-[10px] sm:text-xs font-bold px-2 sm:px-3 py-1 rounded-r-full">
                    12.12 PRICE <br /> LIVE NOW!
                  </div>
                )}
                {product.badge && (
                  <div className="absolute top-2 left-2 bg-white border-2 border-red-600 text-red-600 text-[10px] sm:text-xs font-bold px-2 py-1 rounded">
                    {product.badge}
                  </div>
                )}
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-32 sm:h-40 md:h-44 lg:h-48 object-cover group-hover:scale-105 transition-transform"
                />
              </div>

              {/* Info */}
              <div className="p-2 sm:p-3">
                <h3 className="text-xs sm:text-sm text-gray-700 mb-2 line-clamp-2 min-h-[36px]">
                  {product.title}
                </h3>

                <span className="text-[#F85606] font-bold text-sm sm:text-base block">
                  Rs.{product.price.toLocaleString()}
                </span>

                <div className="flex items-center gap-2 text-[10px] sm:text-xs">
                  <span className="text-gray-400 line-through">
                    Rs.{product.originalPrice.toLocaleString()}
                  </span>
                  <span className="text-gray-500">
                    -{product.discount}%
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}