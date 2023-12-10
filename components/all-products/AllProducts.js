// "use client"
// import React, { useEffect, useState } from 'react';
// import { Tab } from '@headlessui/react';

// export default function Example() {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [selectedCategory, setSelectedCategory] = useState('AllProducts');

//   const getProducts = async (category) => {
//     try {
//       setLoading(true);
//       const response = await fetch(
//         `/api/products/${category === 'AllProducts' ? 'getproducts' : `categoryproducts?category=${category}`}`
//       );
//       if (response.ok) {
//         const data = await response.json();
//         setProducts(data.allProducts);
//       } else {
//         setProducts([]);
//       }
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     getProducts(selectedCategory);
//   }, [selectedCategory]);

//   let [categories] = useState({
//     AllProducts: [],
//     Shirts: [],
//     Pents: [],
//     Watches: [],
//     Fruits: [],
//     Furniture: [],
//   });

//   return (
//     <div className="w-[100%] max-[100%] py-16">
//       <Tab.Group>
//         <Tab.List className="flex space-x-1 rounded-xl mx-8 bg-purple-200 p-1">
//           {Object.keys(categories).map((category) => (
//             <Tab
//               key={category}
//               onClick={() => {
//                 setSelectedCategory(category);
//                 getProducts(category);
//               }}
//               className={({ selected }) =>
//                 classNames(
//                   'w-full rounded-lg py-2.5 text-sm font-medium leading-5 gap-10',
//                   'ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
//                   selected
//                     ? 'bg-white text-purple-700 shadow px-2'
//                     : 'text-purple-600 hover:bg-white/[0.12] hover:text-white'
//                 )
//               }
//             >
//               {category}
//             </Tab>
//           ))}
//         </Tab.List>
//         <Tab.Panels className="mt-2">
//           {loading && <p>Loading...</p>}
//           {!loading && (
//             <>
//               {products.length > 0 ? (
//                 <Tab.Panel
//                   key={selectedCategory}
//                   className={classNames(
//                     'rounded-xl bg-white p-3',
//                     'ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
//                   )}
//                 >
//                   {/* <ProductList products={products} /> */}
//                 </Tab.Panel>
//               ) : (
//                 <p>No products found.</p>
//               )}
//             </>
//           )}
//         </Tab.Panels>
//       </Tab.Group>
//     </div>
//   );
// }
