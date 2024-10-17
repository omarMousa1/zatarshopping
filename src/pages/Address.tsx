import React, { useState } from 'react'
import { useAuthRedirect } from '../hooks/useAuthRedirect';
import { store } from '../hooks/store';
import { useNavigate } from 'react-router-dom';



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
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="firstName"
        value={addressInput.firstName}
        onChange={handleInputChange}
        placeholder="first name"
      />
      <input
        type="text"
        name="lastName"
        value={addressInput.lastName}
        onChange={handleInputChange}
        placeholder="last Name"
      />
      <input
        type="text"
        name="country"
        value={addressInput.country}
        onChange={handleInputChange}
        placeholder="country"
      />
      <input
        type="text"
        name="city"
        value={addressInput.city}
        onChange={handleInputChange}
        placeholder="city"
      />
      <input
        type="text"
        name="streetAddress"
        value={addressInput.streetAddress}
        onChange={handleInputChange}
        placeholder="street address"
      />
      <input
        type="text"
        name="area"
        value={addressInput.area}
        onChange={handleInputChange}
        placeholder="area"
      />
      <input
        type="text"
        name="postalCode"
        value={addressInput.postalCode}
        onChange={handleInputChange}
        placeholder="postalCode"
      />
      {/* payment method */}
      <button type="submit">Save Address</button>
    </form>
  );
};

