
// import { Facebook, Twitter, Instagram, Youtube, MessageCircle } from 'lucide-react';

// const DarazFooter = () => {
//     return (
//         <footer className="bg-white border-t border-gray-200">
//             <div className="max-w-7xl mx-auto px-6 py-4">
//                 <div className="flex items-center justify-between">
//                     <div className="flex items-center gap-8">

//                         {/* Daraz International */}
//                         <div>
//                             <h3 className="text-sm font-semibold text-gray-800 mb-2">
//                                 Daraz International
//                             </h3>

//                             <div className="flex items-center gap-4">

//                                 {/* Pakistan */}
//                                 <div className="flex items-center gap-2">
//                                     <div className="w-6 h-6 rounded-full overflow-hidden">
//                                         <img
//                                             src="https://img.lazcdn.com/us/domino/1fe7d756-2469-4d8e-82b2-d5eb7cbad875_PK-84-84.png"
//                                             alt="Pakistan"
//                                             className="w-full h-full object-cover"
//                                         />
//                                     </div>
//                                     <span className="text-xs text-gray-700">Pakistan</span>
//                                 </div>

//                                 {/* Bangladesh */}
//                                 <div className="flex items-center gap-2">
//                                     <div className="w-6 h-6 rounded-full overflow-hidden">
//                                         <img
//                                             src="https://img.lazcdn.com/us/domino/05a4ef2c-095c-407d-9295-aa45b5412de0_PK-84-84.png"
//                                             alt="Bangladesh"
//                                             className="w-full h-full object-cover"
//                                         />
//                                     </div>
//                                     <span className="text-xs text-gray-700">Bangladesh</span>
//                                 </div>

//                                 {/* Sri Lanka */}
//                                 <div className="flex items-center gap-2">
//                                     <div className="w-6 h-6 rounded-full overflow-hidden">
//                                         <img
//                                             src="https://img.lazcdn.com/us/domino/5536488d-c32a-44eb-8307-ed6651d907da_PK-84-84.png"
//                                             alt="Sri Lanka"
//                                             className="w-full h-full object-cover"
//                                         />
//                                     </div>
//                                     <span className="text-xs text-gray-700">Sri Lanka</span>
//                                 </div>

//                                 {/* Myanmar */}
//                                 <div className="flex items-center gap-2">
//                                     <div className="w-6 h-6 rounded-full overflow-hidden">
//                                         <img
//                                             src="https://img.lazcdn.com/us/domino/8896f696-b36f-4cb1-8576-2e86eed05046_PK-84-84.png"
//                                             alt="Myanmar"
//                                             className="w-full h-full object-cover"
//                                         />
//                                     </div>
//                                     <span className="text-xs text-gray-700">Myanmar</span>
//                                 </div>

//                                 {/* Nepal */}
//                                 <div className="flex items-center gap-2">
//                                     <div className="w-6 h-6 rounded-full overflow-hidden">
//                                         <img
//                                             src="https://img.lazcdn.com/us/domino/39f7f111-619f-47cd-993c-a551aaed15fd_PK-86-86.png"
//                                             alt="Nepal"
//                                             className="w-full h-full object-cover"
//                                         />
//                                     </div>
//                                     <span className="text-xs text-gray-700">Nepal</span>
//                                 </div>

//                             </div>
//                         </div>

//                         {/* Follow Us */}
//                         <div>
//                             <h3 className="text-sm font-semibold text-gray-800 mb-2">
//                                 Follow Us
//                             </h3>

//                             <div className="flex items-center gap-3">
//                                 <a className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center">
//                                     <Facebook className="w-4 h-4 text-white" />
//                                 </a>
//                                 <a className="w-8 h-8 rounded-full bg-black flex items-center justify-center">
//                                     <Twitter className="w-4 h-4 text-white" />
//                                 </a>
//                                 <a className="w-8 h-8 rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 flex items-center justify-center">
//                                     <Instagram className="w-4 h-4 text-white" />
//                                 </a>

                                
//                                 <a
//                                     href="#"
//                                     className="w-8 h-8 bg-orange rounded-full  flex items-center justify-center"
//                                 >
//                                     <img
//                                         src="https://img.lazcdn.com/us/domino/6bf9555a-40ae-466d-a756-907f70aa3461_PK-76-76.png"
//                                         alt="YouTube"
//                                         className="w-4 h-4 object-contain"
//                                     />
//                                 </a>

//                             </div>
//                         </div>

//                     </div>

//                     <div className="text-xs text-blue-600 font-medium">
//                         © Daraz 2025
//                     </div>
//                 </div>
//             </div>

//             {/* Floating Message Button */}
//             <button className="fixed bottom-6 right-6 bg-white border border-gray-300 shadow-lg rounded-lg px-4 py-3 flex items-center gap-2">
//                 <MessageCircle className="w-5 h-5 text-blue-600" />
//                 <span className="text-sm font-medium text-gray-800">Messages</span>
//             </button>
//         </footer>
//     );
// };

// export default DarazFooter;
import { Facebook, Twitter, Instagram, MessageCircle } from 'lucide-react';

const DarazFooter = () => {
  return (
    <footer className="bg-white border-t border-gray-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

          {/* LEFT SIDE */}
          <div className="flex flex-col sm:flex-row sm:items-start gap-6">

            {/* Daraz International */}
            <div>
              <h3 className="text-sm font-semibold text-gray-800 mb-3">
                Daraz International
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                {[
                  { name: "Pakistan", img: "https://img.lazcdn.com/us/domino/1fe7d756-2469-4d8e-82b2-d5eb7cbad875_PK-84-84.png" },
                  { name: "Bangladesh", img: "https://img.lazcdn.com/us/domino/05a4ef2c-095c-407d-9295-aa45b5412de0_PK-84-84.png" },
                  { name: "Sri Lanka", img: "https://img.lazcdn.com/us/domino/5536488d-c32a-44eb-8307-ed6651d907da_PK-84-84.png" },
                  { name: "Myanmar", img: "https://img.lazcdn.com/us/domino/8896f696-b36f-4cb1-8576-2e86eed05046_PK-84-84.png" },
                  { name: "Nepal", img: "https://img.lazcdn.com/us/domino/39f7f111-619f-47cd-993c-a551aaed15fd_PK-86-86.png" },
                ].map((country) => (
                  <div key={country.name} className="flex items-center gap-2">
                    <img src={country.img} alt={country.name} className="w-6 h-6 rounded-full" />
                    <span className="text-xs text-gray-700">{country.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Follow Us */}
            <div>
              <h3 className="text-sm font-semibold text-gray-800 mb-3">
                Follow Us
              </h3>

              <div className="flex items-center gap-3">
                <a className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center">
                  <Facebook className="w-4 h-4 text-white" />
                </a>
                <a className="w-8 h-8 rounded-full bg-black flex items-center justify-center">
                  <Twitter className="w-4 h-4 text-white" />
                </a>
                <a className="w-8 h-8 rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 flex items-center justify-center">
                  <Instagram className="w-4 h-4 text-white" />
                </a>
                <a className="w-8 h-8 rounded-full flex items-center justify-center">
                  <img
                    src="https://img.lazcdn.com/us/domino/6bf9555a-40ae-466d-a756-907f70aa3461_PK-76-76.png"
                    alt="Youtube"
                    className="w-4 h-4 object-contain"
                  />
                </a>
              </div>
            </div>

          </div>

          {/* COPYRIGHT */}
          <div className="text-xs text-blue-600 font-medium text-center md:text-right">
            © Daraz 2025
          </div>

        </div>
      </div>

      {/* Floating Message Button */}
      <button className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 bg-white border border-gray-300 shadow-lg rounded-full sm:rounded-lg px-4 py-3 flex items-center gap-2">
        <MessageCircle className="w-5 h-5 text-blue-600" />
        <span className="hidden sm:block text-sm font-medium text-gray-800">
          Messages
        </span>
      </button>
    </footer>
  );
};

export default DarazFooter;
