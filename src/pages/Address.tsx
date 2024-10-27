import React, { useState } from 'react'
import { useAuthRedirect } from '../hooks/useAuthRedirect';
import { store } from '../hooks/store';
import { NavLink, useNavigate } from 'react-router-dom';



export const Address = () => {
  
  const [addressInput, setAddressInput] = useState({
    firstName: '',
    lastName: '',
    country: '',
    city: '',
    streetAddress: '',
    area: '',
    postalCode: '',
  });

  const saveAddress = store((state) => state.saveAddress);

  const naviage = useNavigate();

  useAuthRedirect();


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAddressInput((prevState) => ({
        ...prevState,
        [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
        await saveAddress(addressInput);
        alert('Address saved successfully!');
        naviage('/order');
    } catch (err) {
        console.log('Error saving address:', err);
        alert('Failed to save address')
    }
  };
  
  return (
    <section className='p-4'>
      <div className='rounded-lg shadow-slate-400 shadow-lg p-2'>
        <form onSubmit={handleSubmit} className='flex flex-col gap-y-5'>
          <div>
            <label className='text-sm font-semibold'>First Name</label>
            <input
              type="text"
              name="firstName"
              value={addressInput.firstName}
              onChange={handleInputChange}
              className='w-full h-8 rounded-lg text-sm px-3 bg-[#D9D9D9]'
            />
          </div>
          <div>
            <label className='text-sm font-semibold'>Last Name</label>
            <input
              type="text"
              name="lastName"
              value={addressInput.lastName}
              onChange={handleInputChange}
              className='w-full h-8 rounded-lg text-sm px-3 bg-[#D9D9D9]'
            />
          </div>
          <div>
            <label className='text-sm font-semibold'>Country</label>
            <input
              type="text"
              name="country"
              value={addressInput.country}
              onChange={handleInputChange}
              className='w-full h-8 rounded-lg text-sm px-3 bg-[#D9D9D9]'
            />
          </div>
          <div>
            <label className='text-sm font-semibold'>City</label>
            <input
              type="text"
              name="city"
              value={addressInput.city}
              onChange={handleInputChange}
              className='w-full h-8 rounded-lg text-sm px-3 bg-[#D9D9D9]'
            />
          </div>
          <div>
            <label className='text-sm font-semibold'>Street Address</label>
            <input
              type="text"
              name="streetAddress"
              value={addressInput.streetAddress}
              onChange={handleInputChange}
              className='w-full h-8 rounded-lg text-sm px-3 bg-[#D9D9D9]'
            />
          </div>
          <div>
            <label className='text-sm font-semibold'>Area</label>
            <input
              type="text"
              name="area"
              value={addressInput.area}
              onChange={handleInputChange}
              className='w-full h-8 rounded-lg text-sm px-3 bg-[#D9D9D9]'
            />
          </div>
          <div>
            <label className='text-sm font-semibold'>Postal Code</label>
            <input
              type="text"
              name="postalCode"
              value={addressInput.postalCode}
              onChange={handleInputChange}
              className='w-full h-8 rounded-lg text-sm px-3 bg-[#D9D9D9]'
            />
          </div>
          {/* payment method */}
          <div className='border border-gray-500 p-2 rounded-lg my-5 text-center'>
            <NavLink to={'/order'}>Save Address & Order</NavLink>
          </div>
        </form>
      </div>
    </section>
  );
};

