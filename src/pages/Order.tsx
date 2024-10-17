import React, { useEffect } from 'react'
import { store } from '../hooks/store'


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
    <div>
        <h1>Thank you for choosing our store</h1>
        <p>Here is your digital invoice</p>
        <div className='border-2 border-black'>
        {address ? (
            <div>
                <h1>Shipping Addres:</h1>
                <p>firstName: {address.firstName}, lastName: {address.lastName}</p>
                <p>country: {address.country}, city: {address.city}</p>
                <p>streetAddress: {address.streetAddress}, area: {address.area}</p>
                <p>postalCode: {address.postalCode}</p>
            </div>
        ) : (
            <p>No address saved yet. plase add your address</p>
        )}
        </div>
        <div className='border-2 border-black'>
            {cart.map((item) => (
                <div key={item.id}>
                    <div>
                        <p>title: {item.title}</p>
                        <p>quantity: {item.quantity}</p>
                        <p>price: {item.price}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}
