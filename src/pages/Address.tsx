import React, { ChangeEvent, useState } from 'react'
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
  const [paymentMethod, setPaymentMethod] = useState<string>('');
  const [cardNumber, setCardNumber] = useState<string>(''); // Now a string
  const [expirationDate, setExpirationDate] = useState<string>('');
  const [securityCode, setSecurityCode] = useState<string>('');

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

  const handlePaymentMethodChange = (e: ChangeEvent<HTMLSelectElement>) => setPaymentMethod(e.target.value);

  const handleCardNumberChange = (e: ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value.replace(/\D/g, '');
      setCardNumber(value);
  };

  const handleExpirationDateChange = (e: ChangeEvent<HTMLInputElement>) => {
      let value = e.target.value.replace(/[^0-9]/g, ''); 
      if (value.length >= 3) {
          value = value.slice(0, 2) + '/' + value.slice(2, 4);
      }
      setExpirationDate(value);
  };

  const handleSecurityCodeChange = (e: ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value.slice(0, 3);
      setSecurityCode(value);
  };
  
  return (
    <section className='p-4'>
      <div className='rounded-lg shadow-slate-400 shadow-lg p-2'>
        <form onSubmit={handleSubmit} className='flex flex-col gap-y-5'>
          <h1 className='text-2xl font-bold'>Address</h1>
          <div className='sm:grid sm:grid-cols-2 sm:gap-x-6 '>
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
          </div>

          <div className='sm:grid sm:grid-cols-2 sm:gap-x-6'>
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
          </div>

          <div className='sm:grid sm:grid-cols-2 sm:gap-x-6'>
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
          </div>
          <div className='sm:grid sm:grid-cols-2 sm:gap-x-6'>
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
          </div>
          {/* payment method */}

          <div>
            <h1 className='text-2xl font-bold'>Payment</h1>
              <div>
                  <label>Select payment method</label>
                  <select
                      name='selectPaymentMethod'
                      defaultValue='select'
                      onChange={handlePaymentMethodChange}
                      className='w-full h-8 rounded-lg text-sm px-3 bg-[#D9D9D9] cursor-pointer'
                  >
                      <option value='select'>-Select-</option>
                      <option value='creditCard'>Credit Card</option>
                      <option value='tamara'>Tamara</option>
                      <option value='applePay'>Apple Pay</option>
                      <option value='tabby'>Tabby</option>
                  </select>
              </div>

              {paymentMethod === 'creditCard' && (
                  <div className='mt-4'>
                      <div>
                          <label>Credit Card Number</label>
                          <input
                              type='text'
                              value={cardNumber}
                              onChange={handleCardNumberChange}
                              className='w-full h-8 rounded-lg text-sm px-3 bg-[#D9D9D9]'
                              placeholder='Enter your card number'
                          />
                      </div>
                      <div className='mt-2'>
                          <label>Expiration Date (MM/YY)</label>
                          <input
                              type='text'
                              value={expirationDate}
                              onChange={handleExpirationDateChange}
                              className='w-full h-8 rounded-lg text-sm px-3 bg-[#D9D9D9]'
                              placeholder='MM/YY'
                              maxLength={5}
                          />
                      </div>
                      <div className='mt-2'>
                          <label>Security Code (CVV)</label>
                          <input
                              type='text'
                              value={securityCode}
                              onChange={handleSecurityCodeChange}
                              className='w-full h-8 rounded-lg text-sm px-3 bg-[#D9D9D9]'
                              placeholder='CVV'
                              maxLength={3}
                          />
                      </div>
                  </div>
              )}
          </div>

          <div className='border border-gray-500 rounded-lg my-5 text-center w-full'>
            <button type='submit' className='w-full p-2'>Save Address & Order</button>
            {/* <NavLink to={'/order'} type='submit'>Save Address & Order</NavLink> */}
          </div>
        </form>
      </div>
    </section>
  );
};

