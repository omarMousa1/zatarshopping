import React, { useEffect } from 'react';
import { store } from '../hooks/store';
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
      <div className="flex flex-col items-center bg-green-600 py-12 gap-y-6">
        <div className="text-center">
          <h1 className="font-extrabold text-3xl text-white">Thank You!</h1>
          <p className="font-semibold text-lg text-white">
            Your order has been confirmed.
          </p>
        </div>
        <div className="border border-white bg-white text-green-500 px-2 py-1 rounded-md text-xs">
          <NavLink to="/dashboard">ORDER MORE</NavLink>
        </div>
      </div>
      <div className="p-4">
        <p className="text-center my-6 text-xl font-semibold">Your order details</p>
        <div className="shadow-sm shadow-slate-500 bg-slate-100 p-4">
          <div className="grid gap-y-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="grid grid-cols-1 sm:grid-cols-3 items-center gap-y-4 sm:gap-4 p-4 bg-white rounded-lg shadow-md"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-20 h-20 object-contain rounded-md"
                  />
                  <div>
                    <p>{item.title}</p>
                    <p className="text-sm text-gray-500">
                      Category: {item.category}
                    </p>
                  </div>
                </div>
                <p className="text-center ">
                  Quantity: {item.quantity}
                </p>
                <p className="text-center ">
                  Price: ${item.price}
                </p>
              </div>
            ))}
          </div>
          <hr className="my-4" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <p>Total Items: <span>$1</span></p>
              <p>Package Cost: <span>$1</span></p>
              <p>Shipping: <span>$1</span></p>
              <p className="font-semibold">Total: <span>$1</span></p>
            </div>
            <div className="flex justify-between items-center">
              <p>Order No: <span>111</span></p>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
                Download Invoice
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-4 mt-6">
          <div>
            {address ? (
              <div>
                <h1 className="font-bold">Delivery Address</h1>
                <p>
                  {address.firstName} {address.lastName}
                </p>
                <p>
                  {address.country} - {address.city}
                </p>
                <p>
                  {address.streetAddress} - {address.area}
                </p>
                <p>{address.postalCode}</p>
              </div>
            ) : (
              <p>
                No address saved yet. Please add your{' '}
                <NavLink to="/address" className="text-blue-500 italic">
                  address
                </NavLink>
              </p>
            )}
          </div>
          <div dir="rtl">
            <h1 className="font-bold">Estimated Delivery</h1>
            <p>May 24, 2024</p>
          </div>
        </div>
      </div>
    </section>
  );
};
