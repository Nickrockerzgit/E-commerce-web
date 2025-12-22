
// import { useLocation, useNavigate } from 'react-router-dom';
// import { ChevronRight, Wallet, CreditCard, Banknote } from 'lucide-react';

// interface Product {
//   image: string;
//   title: string;
//   price: number;
//   discount: number;
//   rating: number;
//   reviews: number;
// }

// interface Address {
//   recipientName: string;
//   phoneNumber: string;
//   region: string;
//   address: string;
//   landmark: string;
//   addressCategory: string;
// }

// interface LocationState {
//   product: Product;
//   quantity: number;
//   totalAmount: number;
//   addressId: string;
//   address: Address;
// }

// export default function PaymentGateway() {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const { product, quantity, totalAmount } = location.state as LocationState;

//   const handlePayment = (method: string) => {
//     alert(`Order placed successfully with ${method}!`);
//     navigate('/'); // home ya success page
//   };

//   const paymentMethods = [
//     {
//       id: 'khalti',
//       name: 'Khalti by IME',
//       subtitle: 'Mobile Wallet',
//       icon: 'data:image/png;base64,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',
//     //   bgColor: 'bg-gradient-to-r from-purple-600 to-purple-700'
//     },
//     {
//       id: 'esewa',
//       name: 'eSewa Mobile Wallet',
//       subtitle: 'eSewa Mobile Wallet',
//       icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAhFBMVEX///9gu0dfu0ZcukJWuDlZuT5buUBTtzVQtjGq2KBYuTz8/vtVuDju9+vr9ujy+fCCyHDj8t/3/Pbn9OS23qzN6MZ4xGWa0oxqv1O64LHU6851w2Dd8NmV0IbK58PS68xovlCJy3id05CX0Yil1pnB4rm/4rZ5xWVwwlp/x22NzH2k1pfP2XNkAAALXUlEQVR4nO2d2ZaqOhCG2wwEGVQUR3AeGvX93++AbneLBK1M0HudfBd90b1s+UlSqVQqla8vi8VisVgsFovFYrFYLBaLxWKxWCyW/xvhKE3X6/FqtRqP1+mo3/bz6MMPx/H0G7mMsYA8CBhz8fc0XoV+28+nRrg+DDouoQ5GnQoIO5SwzuAw7v2bMsPxNMEB5Wkr66SEZstVr+3nFaTXzRxC0Qd1f1UihzhZd9T2U4PpzxMXrO5HJXWzOGz72QH46wv1sJi6vyo977JuW8AH+t0ZcQRbr6QRk2z+i+1OegmogrxHQ9LrL50s062r0nxPGmlw/YUDcrSUHX1cjfgwbFtRGf9K1ftnWWNn3raoZ06a9d00ks2ibV0PognTru+mkV1+haeTd1B9A/AFiuK25eUWdKO/g/6AyLntmaNrpoP+gPG4TX39MzEssBiNh/YEph3HtL6C9npqbLqHPsC0nXlj2ZTAvKe6p+b1+VvSlL5CIml8MPYT2qDAQuKlWYHhphEb84w3aFagMTemHjpobrnRmzXegjeJ56ZW/6204F1iMwKHbQnMx+K2EYFJK130j8RpAwoHzU4TL5CucYH7Jid6Dq7p4EbM2hWYSzTroy5aF9hBHZORxn6nMWe7HvxtcFo8t2hGfzBoULvyVgYV+6EF3M1SQYwNxUhqQYiQ4zHXy7bTbs5hOti4DL61yP+XHUMe6kzcl0GY0M3ymJafqDc+ZNJbcAXUzFLq6ok+CCady7FmZ3cUTwJ5jcHKgMBUNC5K2fb4NoSUbpmsRrQx0E8nQk+DqDv9PG+liWw0ki61C4yF7CimAH0Fc0eyGd1Us8C+iB1FwQCcVzGSDPjgRLPCqcBz0I1IIF42aEf0BhgjD9yEKLi8eFXpabedJN/b7prvbl2kJGqeFC9gdw3R8vJmMaVB4cigW/LTldt7L1Id1dO5VEzBJg93ShYgPbPSu6HkymtHqVU1whob8QI1eM7s2YT6O1L5IE04zehLuEtaGzFygd9Jk+fXGs14TYMpx8734OP8B0S0LaO2wFFIJ88CxzUTDHI4ns5Kxtp4uvbAe8CFPS614LH2mfGE8yUy1gbNNDXiFfblKHgeg+8ahTeAQpl8KqLHAQeGLhB5Xpcu3g5dwhmKYm7hHawnCH6CfTV5HhS+xJNtJBqRRToUnkGWHJc2v/YfOjbjxCHGEnE8utMgMAJ9MaLPBjL9NHK5jSi2Prt/rY4J4wCyM6Tkq20/PivjLK7WgbBCLbYGZGdQ9vyR6PPIpbyVwbd4I2L13agU1ElZab20++whYN6edf0UWgtCys4pqJOWn9cHfAR1OI6NLxFjVO+mM8iXlqbCrzWkKXhT4tdO3LFxVAM2I0iE7cUNm0KGk8d79xIbPyhT7KagofHSU0C2iTcjfn1JLDECxUkfsjJETukjEaSrefwNpM/TTAWqtkocQoYhLWdkHT/ExjGlbFOTig+bfMv/Tm2+GEE66YtzuKxrhyJSw9zNtntK6zwRCYUIK7k1kGGIXiKX39VmL7Q5KLvEq+j942SNe98Q8/0yEMLSH7FDA2d23seLD9oKhlJBN08pdwHiDAflme3hsmHqBUG2vc7THsSeD0fj3UYqqohVZkQfMBu+bgNF7m24dbbdYzoEDZFwMV8mm+JEpozA/AEUFEJWTq+2zI/38Rg0NHy/N46nCXMDz0EKm8KugkJIBEwm4OWH0bG7TBxGqKO0331DxdTEgIHBdTDr6S1Ou0GCcm1YXdufJ1A4kbH8vAxCGJrAM1rnw63jEI3a7qgYU8CS9PM49/t5l7xk7N4lDaQcqSwvAM/zLqA37KWn6yWjty6pogFRPs4NVyGDCLBfURPtitbz/WSGA0+HKcGz7iuHw3WXM90vl8tY3m3rAyYLWjGli+52Q8itVISeLvnqFmpkBFBYiSL0mG5L4pjLY4NEochriQD9CZrO3pjCBWDCD17X6lL7ZO8V6s+deTAGPGzFoZAICX5AybX+NxSaO/IE6XAVhZDXIoZj7pSFlMKFxO7DezRE7pUUvjreoNCOEE67vbRiS0PtrqfBcQgZUpWlCygAKYTB2QIyH5Lj66cGug9+mfRpAEaj6pdKxDw/fIWOrWw+kDBNtQtpny4MKgwhgahK+k9fd6EMg7YUsj5EncqnEs0DEeE47Pf7YdjrjUZRTpoWP0e9Xlj8vt9X2F8LAOHSapwGEr8Sk0iZW9Rd5OHmKJzyhhj+aqxtBE1l1ARVqEYA2c7jRLpk9lcU8CoTFpwuoL9xPI5Y+HSNEpVFuAAnwKOirBII6ms4nyYAUygpCVonkGq5qk9pbXpR2bcYQmIunIMPAocX1FHae/IhNoPnGEtkHDzAjIm9HzXHHJSKgaoR2VR6wsDbaDTnpsDXobYHDDGm3NQY2UZEgS/68coaXAiQqeF5xj3JY3d/kgIieCgEUaVcjD5kwf6SMXTnIDUnPk4qCCjkZjkKAEqB5vUTuaU+vd4/PYe/HxWfrQC0nOWG3RcAt/0V5Pxx4wXiBPwEOTiQQEbNQbmr+Er4ke/fExiGqieCh6DIWTVYUyC8TsSPXGoBx1Y9XAyy29xzPl89wWMwyH1ElwWOXvBfrgiwrST+YFgIOSfo7yF7gQ26vyNXniHIO6kx2SeRvcSf8kHg4451vUcMmHtRk7XThUtkf/2GkUDT6zjvvALZtbrdE2gFV/QjUGjt5Wo4KevDhn1l/+IPMWhaRE/ucyQQjdSzpQE7IlCbV7MCFL+g6On9wM+N511by0UDKfB0Xp3ZjmYfGgW7l6e+Bjukc4cTQZECdjwP4bpCJv70XS0aTJJSBxc5hqjrIDAwu4LWexfRgNR0PRwk5YQckSo4COkqMAzc82Rv3It06VYbEnvu5cVALUQ2PfRt2QCP6CL6rkh8OE+KDL6ifkRRQsLxCEvmrw7JUOioLO8QoxzQM2X4wxmkcN3dTrJZTjKYzhecLjYRKZdGNeZKQc9ZvxmKP/g5NX/aiSy4UKDxXgFw5yFKrzUWSlShWje/59CXSxQG/0koKgBPv4YB3k4i0m927gotJ7WWp8lZg0O85LXEEBDBuqFoo7s+JMyxKaCZxDzsi5ZSYtpr0glUkMFU+ABEJHrkSVNFjBIClTnyxZ5YFxK+ZQF5Jq6hEynqQGcCAaJ0IrwFQIzcPxOJGHNEEuDSrb+vFpP6hI7oDA+xCRmzbPy5r0Z7JnEw1jN1S9JArMguCmaHt8MlPA2YTN1eZqzitXDqKKJ0cl1w3fFw0T0j8f5ZQA3eA7EWNgnFGWeyucxXi9FdaD8dH+Pdd754kj0LhWcmb4GQqpV8KygYsFv5YCf/SajKQS/k6a7rWWarkkeCdBzOY4Yv1RlK1f/TiLxnDyVstyw7aI2tSNpkNlBF4KCJi1hWYus4nThJM5fpHJu7rKsMNlHjmsvJ/I15XIGz5m6YnbfRinjW5J2dx+bHojNr9o7Atcm7OXnQhozMD2mn0amfbJu/rTvMGkwEZuaOzbzBHzRlUpHb1qW5B4nUNQnavE52hRsYjNwK4I3Ry0z3VMSWzduYEge5SAQUilq98PhG9G2uGVFwaXoW5BKrXPvzDroxcWGODL2zCT8Vu7tf0YB3jhvdXRWTs5Za3drw51o1oiBp38K8MoyxrvgGCmbHlqcIPn6MNbQjwmSjnNlsDH+eBDJ3HDzpc7zz7+ufJRYXT76zIo8uzUa0tRDGMyaxPkaIulncXCRGjXS38YT2JhD2vKz7u6aHT0TxGQUglQhT1tnG/5a8O/3F4ft9RcFcnMfooMtL4vtX8KPj4YzvW2oOvuVe5j+LO0kJYa73fTjW1oX+p/Cj9Wp+2F8GkyRLJufBZb/rHtfRL3I7LRaLxWKxWCwWi8VisVgsFovFYrFYzPMfbOC+9J0ExLwAAAAASUVORK5CYII=',
//     //   bgColor: 'bg-gradient-to-r from-green-600 to-green-700'
//     },
//     {
//       id: 'cod',
//       name: 'Cash on Delivery',
//       subtitle: 'Pay when product arrives',
//       icon: null,
//       bgColor: 'bg-gradient-to-r from-blue-500 to-blue-600'
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <div className="max-w-3xl mx-auto px-6 py-8">
//         <div className="bg-white rounded-lg shadow-sm overflow-hidden">

//           {/* Header */}
//           <div className="border-b border-gray-200 px-6 py-4 bg-gray-50">
//             <h1 className="text-2xl font-bold text-gray-900">
//               Select Payment Method
//             </h1>
//           </div>

//           {/* Payment Methods */}
//           <div className="divide-y divide-gray-200">
//             {paymentMethods.map((method) => (
//               <button
//                 key={method.id}
//                 onClick={() => handlePayment(method.name)}
//                 className="w-full flex items-center justify-between px-6 py-5 hover:bg-gray-50 transition-colors group"
//               >
//                 <div className="flex items-center gap-4">
//                   <div className={`w-14 h-14 rounded-lg ${method.bgColor} flex items-center justify-center shadow-md`}>
//                     {method.icon ? (
//                       <img
//                         src={method.icon}
//                         alt={method.name}
//                         className="w-10 h-10 object-contain rounded"
//                       />
//                     ) : (
//                       <Banknote className="w-8 h-8 text-white" />
//                     )}
//                   </div>

//                   <div className="text-left">
//                     <h3 className="text-lg font-semibold text-gray-900">
//                       {method.name}
//                     </h3>
//                     <p className="text-sm text-gray-600">
//                       {method.subtitle}
//                     </p>
//                   </div>
//                 </div>

//                 <ChevronRight className="w-6 h-6 text-gray-400 group-hover:text-gray-600" />
//               </button>
//             ))}
//           </div>

//          <div className="border-t-8 border-gray-100 px-6 py-6">
//             <div className="flex items-center justify-center gap-4 mb-6">
//               <img
//                 src="data:image/png;base64,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"
//                 alt="Norton"
//                 className="h-8 opacity-40"
//               />
//               <img
//                 src="data:image/png;base64,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"
//                 alt="PCI"
//                 className="h-8 opacity-40"
//               />
//               <div className="flex items-center gap-1 opacity-40">
//                 <span className="text-sm font-semibold">Verified by</span>
//                 <CreditCard className="w-5 h-5" />
//                 <span className="text-sm font-bold">VISA</span>
//               </div>
//               <img
//                 src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/200px-Mastercard-logo.svg.png"
//                 alt="Mastercard"
//                 className="h-8 opacity-40"
//               />
//             </div>
//           </div>

          



//         {/* Order Summary */}
//         <div className="mt-6 bg-white rounded-lg shadow-sm p-6">
//           <h2 className="font-semibold text-gray-900 mb-4">
//             Order Summary
//           </h2>

//           <div className="flex gap-4">
//             <img
//               src={product.image}
//               alt={product.title}
//               className="w-24 h-24 object-cover rounded border border-gray-200"
//             />

//             <div className="flex-1">
//               <h3 className="text-sm text-gray-900 mb-2 line-clamp-2">
//                 {product.title}
//               </h3>
//               <div className="text-sm text-gray-600">
//                 <p>Quantity: {quantity}</p>
//                 <p>Price: Rs. {product.price}</p>
//               </div>
//             </div>
//           </div>
//         </div>


// {/* Total */}
//           <div className="border-t border-gray-200 bg-gray-50 px-6 py-5">
//             <div className="flex items-center justify-between mb-3">
//               <span className="text-gray-700 text-lg">Subtotal</span>
//               <span className="text-gray-900 text-lg font-semibold">
//                 Rs. {totalAmount}
//               </span>
//             </div>

//             <div className="flex items-center justify-between pt-3 border-t border-gray-300">
//               <span className="text-gray-900 text-xl font-bold">
//                 Total Amount
//               </span>
//               <span className="text-[#F85606] text-2xl font-bold">
//                 Rs. {totalAmount}
//               </span>
//             </div>
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// }













import { useLocation, useNavigate } from 'react-router-dom';
import { ChevronRight, Wallet, CreditCard, Banknote } from 'lucide-react';

interface Product {
  image: string;
  title: string;
  price: number;
  discount: number;
  rating: number;
  reviews: number;
}

interface Address {
  recipientName: string;
  phoneNumber: string;
  region: string;
  address: string;
  landmark: string;
  addressCategory: string;
}

interface LocationState {
  product: Product;
  quantity: number;
  totalAmount: number;
  addressId: string;
  address: Address;
}

export default function PaymentGateway() {
  const location = useLocation();
  const navigate = useNavigate();
  const { product, quantity, totalAmount } = location.state as LocationState;

  const UPI_ID = 'yourupi@phonepe'; // Replace with your actual UPI ID (VPA)

  const handlePayment = (method: string) => {
    if (method === 'phonepe' || method === 'gpay') {
      const payeeAddress = UPI_ID; // Your UPI ID for both
      const payeeName = 'Your Merchant Name'; // Replace with your merchant name
      const transactionNote = `${product.title} - Order Payment`;
      const amount = totalAmount.toFixed(2);
      const currency = 'INR';

      const deepLink = `upi://pay?pa=${encodeURIComponent(payeeAddress)}&pn=${encodeURIComponent(payeeName)}&am=${amount}&cu=${currency}&tn=${encodeURIComponent(transactionNote)}`;

      // Redirect to UPI app (PhonePe or Google Pay based on selection)
      window.location.href = deepLink;
    } else {
      // COD
      alert(`Order placed successfully with ${method}!`);
      navigate('/'); // home or success page
    }
  };

  const paymentMethods = [
    {
      id: 'phonepe',
      name: 'PhonePe',
      subtitle: 'UPI Payment',
      icon: 'https://www.phonepe.com/static/media/phonepe-logo.4c3b9b3b.svg',
      bgColor: 'bg-gradient-to-r from-orange-500 to-orange-600'
    },
    {
      id: 'gpay',
      name: 'Google Pay',
      subtitle: 'UPI Payment',
      icon: 'https://www.gstatic.com/images/branding/product/1x/gpay_48dp.png',
      bgColor: 'bg-gradient-to-r from-green-500 to-green-600'
    },
    {
      id: 'cod',
      name: 'Cash on Delivery',
      subtitle: 'Pay when product arrives',
      icon: null,
      bgColor: 'bg-gradient-to-r from-blue-500 to-blue-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-3xl mx-auto px-6 py-8">
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">

          {/* Header */}
          <div className="border-b border-gray-200 px-6 py-4 bg-gray-50">
            <h1 className="text-2xl font-bold text-gray-900">
              Select Payment Method
            </h1>
          </div>

          {/* Payment Methods */}
          <div className="divide-y divide-gray-200">
            {paymentMethods.map((method) => (
              <button
                key={method.id}
                onClick={() => handlePayment(method.id)}
                className="w-full flex items-center justify-between px-6 py-5 hover:bg-gray-50 transition-colors group"
              >
                <div className="flex items-center gap-4">
                  <div className={`w-14 h-14 rounded-lg ${method.bgColor} flex items-center justify-center shadow-md`}>
                    {method.icon ? (
                      <img
                        src={method.icon}
                        alt={method.name}
                        className="w-10 h-10 object-contain rounded"
                      />
                    ) : (
                      <Banknote className="w-8 h-8 text-white" />
                    )}
                  </div>

                  <div className="text-left">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {method.name}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {method.subtitle}
                    </p>
                  </div>
                </div>

                <ChevronRight className="w-6 h-6 text-gray-400 group-hover:text-gray-600" />
              </button>
            ))}
          </div>

         <div className="border-t-8 border-gray-100 px-6 py-6">
            <div className="flex items-center justify-center gap-4 mb-6">
              <img
                src="data:image/png;base64,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"
                alt="Norton"
                className="h-8 opacity-40"
              />
              <img
                src="data:image/png;base64,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"
                alt="PCI"
                className="h-8 opacity-40"
              />
              <div className="flex items-center gap-1 opacity-40">
                <span className="text-sm font-semibold">Verified by</span>
                <CreditCard className="w-5 h-5" />
                <span className="text-sm font-bold">VISA</span>
              </div>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/200px-Mastercard-logo.svg.png"
                alt="Mastercard"
                className="h-8 opacity-40"
              />
            </div>
          </div>

          



        {/* Order Summary */}
        <div className="mt-6 bg-white rounded-lg shadow-sm p-6">
          <h2 className="font-semibold text-gray-900 mb-4">
            Order Summary
          </h2>

          <div className="flex gap-4">
            <img
              src={product.image}
              alt={product.title}
              className="w-24 h-24 object-cover rounded border border-gray-200"
            />

            <div className="flex-1">
              <h3 className="text-sm text-gray-900 mb-2 line-clamp-2">
                {product.title}
              </h3>
              <div className="text-sm text-gray-600">
                <p>Quantity: {quantity}</p>
                <p>Price: Rs. {product.price}</p>
              </div>
            </div>
          </div>
        </div>


{/* Total */}
          <div className="border-t border-gray-200 bg-gray-50 px-6 py-5">
            <div className="flex items-center justify-between mb-3">
              <span className="text-gray-700 text-lg">Subtotal</span>
              <span className="text-gray-900 text-lg font-semibold">
                Rs. {totalAmount}
              </span>
            </div>

            <div className="flex items-center justify-between pt-3 border-t border-gray-300">
              <span className="text-gray-900 text-xl font-bold">
                Total Amount
              </span>
              <span className="text-[#F85606] text-2xl font-bold">
                Rs. {totalAmount}
              </span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}