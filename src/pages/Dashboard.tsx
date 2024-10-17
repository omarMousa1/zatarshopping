import React, { useEffect } from 'react'
import { useFakeData } from '../hooks/useFakeData'
import { useCartStore } from '../hooks/store';
import { useAuthRedirect } from '../hooks/useAuthRedirect';
import { Product } from '../types/product';
import { SkeletonCard } from '../components/skeletons-loading/Skeletons';


export const Dashboard = () => {
  
  const { products, loading, error } = useFakeData();
  const addToCart = useCartStore((state) => state.addToCart);
  const loadCart = useCartStore((state) => state.loadCart);

  useAuthRedirect();

  useEffect(() => {
    loadCart();
  }, [loadCart]);

  const handleAddToCart = (product: Product) => {
    addToCart({
      id: product.id,
      title: product.title,
      price: product.price,
      quantity: 1,
    });
  };
  
  return (
    <div className='w-full bg-slate-100 rounded-md p-5'>
      <h1 className='text-3xl'>Welcome to your dashboard</h1>
      <p className='text-gray-600 text-left mt-4'>
        This is your personal dashboard where you can browse through our exclusive selection of products. 
        From the latest tech gadgets to everyday essentials, we’ve got you covered. You can explore the full product list, 
        view detailed information, and add items to your cart for a seamless shopping experience. If you encounter any issues 
        or need assistance, feel free to reach out to our support team. Start by exploring the products below and happy shopping!
    </p>
      {loading && <SkeletonCard cards={20} />}
      {error && <div className='text-red-500 text-center'>Error: {error}</div>}
      {!loading && !error && (
        <>
          <h1 className='text-2xl font-bold text-center my-6'>Product List</h1>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
            {products.map((product: Product) => (
              <div
                key={product.id}
                className='bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300'
              >
                <div className='flex justify-center'>
                  <img
                    src={product.image}
                    alt={product.title}
                    className='w-60 h-60 object-contain block rounded-md mb-4'
                  />
                </div>
                <h2 className='text-lg font-semibold'>{product.title}</h2>
                <p className='text-gray-700'> Price: ${product.price}</p>
                <p className='text-gray-500 text-sm'> category: {product.category}</p>
                <button
                  onClick={() => handleAddToCart(product)}
                  className='mt-4 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300'
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  )
}