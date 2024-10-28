import { useEffect, useState } from 'react'
import { store } from '../hooks/store'
import { NavLink } from 'react-router-dom';
import { useCalculateTotal } from '../hooks/useCalculateTotal';
import { useUpdateQuantity } from '../hooks/useUpdateQuantity';


export const Cart = () => {

    const cart = store((state) => state.cart);
    const loadCart = store((state) => state.loadCart);
    const { calTotal } = useCalculateTotal();
    const { increaseQuantity, decreaseQuantity } = useUpdateQuantity();

    useEffect(() => {
        loadCart();
    }, [loadCart]);

    const isEmpty = cart.length === 0;


  return (
    <div className=''>
        <h1 className='text-3xl font-semibold mb-6 text-center'>Shopping cart</h1>
        <div className='flex flex-col justify-center items-center rounded-lg shadow-2xl shadow-black m-4 p-5'>
            {isEmpty ? (
                <p>Your cart is empty</p>
            ) : (
                <div className='space-y-4 w-full'>
                    {/* <div className='grid grid-cols-3 place-items-center mb-12'>
                        <p className='font-bold text-2xl italic'>Product</p>
                        <p className='font-bold text-2xl italic'>Price</p> 
                        <p className='font-bold text-2xl italic'>Quantity</p> 
                    </div> */}
                    {cart.map((item) => (
                        <>
                        <div key={item.id} className='grid grid-cols-4 place-content-evenly place-items-center'>
                            <img
                                src={item.image}
                                alt={item.title}
                                className='w-14 h-14 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-44 lg:h-44 object-contain block rounded-md mb-4'
                            />
                            <p className='text-left'>{item.title}</p>
                            <p className=''>${item.price ? item.price.toFixed(2) : 0.00}</p>
                            <div className='flex flex-col-reverse justify-center items-center sm:flex-row sm:space-x-3'>
                                <button onClick={() => decreaseQuantity(item.id)} className='flex justify-center items-center border border-gray-400 text-gray-400 px-4 rounded-md w-8 h-8'>-</button>
                                <p>{item.quantity}</p>
                                <button onClick={() => increaseQuantity(item.id)} className='flex justify-center items-center border border-gray-400 text-gray-400 px-4 rounded-md w-8 h-8'>+</button>
                            </div>
                        </div>
                        <hr />
                        </>
                    ))}
                </div>
            )}
            
            {isEmpty && (
                <div className='flex justify-center items-center gap-x-5 my-6 p-2 rounded-lg shadow-lg text-xl font-semibold border border-gray-500 w-max'>
                    <span>Total:</span>
                    <span>${calTotal()}</span>
                </div>
            )}

            <div className='flex flex-col gap-x-10 gap-y-2 sm:flex-row sm:items-center sm:justify-center text-center w-full'>
                <NavLink to={'/address'} className={`px-2 py-2 border border-gray-400 text-black font-normal rounded-md ${isEmpty ? 'opacity-50 cursor-not-allowed' : 'text-black'}`}>Proceed to Address</NavLink>
                <NavLink to={'/dashboard'} className="px-2 py-2 border border-gray-400 text-black font-normal rounded-md">Back to shopping</NavLink>
            </div>
        </div>
    </div>
  )
}
