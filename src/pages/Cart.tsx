import React, { useEffect } from 'react'
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


  return (
    <div>
        <h1 className='text-3xl font-semibold mb-6 text-center'>Your cart</h1>
        <div>
            {cart.map((item) => (
                <div key={item.id} className='flex justify-between items-center border-b pb-4'>
                    <div>
                        <p>{item.title}</p>
                        <p>x {item.quantity}</p>
                        <div className='flex space-x-2 mt-2'>
                            <button onClick={() => increaseQuantity(item.id)} className='bg-green-500 text-white px-4 rounded-md'>+</button>
                            <button onClick={() => decreaseQuantity(item.id)} className='bg-red-500 text-white px-4 rounded-md'>-</button>
                        </div>
                    </div>
                    <p>${(item.price).toFixed(2)}</p>
                </div>
            ))}
        </div>
        
        <div className='mt-6 flex justify-between text-xl font-semibold'>
            <span>Total:</span>
            <span>${calTotal()}</span>
        </div>

        <div>
            <NavLink to={'/address'} className="px-2 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300">Proceed to Address</NavLink>
            <NavLink to={'/dashboard'} className="px-2 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300">Back to shopping</NavLink>
        </div>
    </div>
  )
}
