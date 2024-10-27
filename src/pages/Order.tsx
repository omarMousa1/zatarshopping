import React, { useEffect } from 'react'
import { store } from '../hooks/store'
import { NavLink } from 'react-router-dom';


export const Order = () => {
  const address = store((state) => state.address);
  const loadAddress = store((state) => state.loadAddress);
  const cart = store((state) => state.cart);
  const loadCart = store((state) => state.loadCart);

  useEffect(() => {
    loadAddress();
  }, [loadAddress]);

  useEffect(() => {
    loadCart();
  }, [loadCart]);


 return (
   <section>
        <div className='flex flex-col items-center bg-green-600 py-12 gap-y-6'>
            <div className='flex flex-col justify-center items-center'>
                <h1 className='font-extrabold text-3xl text-white'>Thank You!</h1>
                <p className='font-semibold text-lg text-white'>Your order has been confirmed.</p>
            </div>
            <div className='border border-white bg-white text-green-500 px-2 py-1 rounded-md w-max text-xs'>
                <NavLink to={'/dashboard'}>ORDER MORE</NavLink>
            </div>
        </div>
        <div className='p-4'>
            <p className='text-center my-6 text-xl font-semibold'>Your order details.</p>
            <div className='shadow-sm shadow-slate-500 bg-slate-100'>
                <div className='p-2'>
                    <div className='hidden sm:grid sm:grid-cols-3 sm:place-items-center sm:mb-12'>
                        <p className=''>Product</p>                 
                        <p className=''>Price</p> 
                        <p className=''>Quantity</p> 
                    </div>
                    {cart.map((item) => (
                        <div key={item.id}>
                            <div className='flex flex-col items-start text-sm gap-y-3 p-4'>
                                <div className='flex justify-center items-center gap-x-3'>
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className='w-20 h-20 object-contain block rounded-md mb-4'
                                    />
                                    <div className='flex flex-col gap-y-3'>
                                        <p>{item.title}</p>
                                        <p>Category: {item.category}</p>
                                    </div>
                                </div>
                                <div className='flex justify-around items-center w-full'>
                                    <p>Quantity: {item.quantity}</p>
                                    <p>Price: ${item.price}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <hr className='bg-black mx-4 my-4' />
                <div className='flex flex-col gap-y-8 p-4'>
                    <div className='flex flex-col gap-y-1'>
                        <p>Total Items: <span>$1</span></p>
                        <p>Package Cost: <span>$1</span></p>
                        <p>Shipping: <span>$1</span></p>
                    </div>
                    <p className='mb-5'>Total: <span>$1</span></p>
                    <div className='flex justify-between items-center'>
                        <p>Order No: <span>111</span></p>
                        <button>Download Invoice</button>
                    </div>
                </div>
            </div>

            <div className='grid grid-cols-2 p-4 mt-6'>
                <div>
                    {address ? (
                        <div>
                            <h1 className='font-bold'>Delivery Address</h1>
                            <p>Name: {address.firstName} {address.lastName}</p>
                            <p>{address.country} - {address.city}</p>
                            <p>{address.streetAddress} - {address.area}</p>
                            <p>{address.postalCode}</p>
                        </div>
                    ) : (
                        <p>No address saved yet. plase add your <NavLink to={'/address'} className='text-blue-500 italic'>address</NavLink></p>
                    )}
                </div>
                <div className='' dir='rtl'>
                    <h1 className='font-bold'>Estimated Delivery</h1>
                    <p>May 24, 2024</p>
                </div>
            </div>
        </div>
    </section>
  )
}
