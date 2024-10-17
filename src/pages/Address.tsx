import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuthRedirect } from '../hooks/useAuthRedirect';
import { auth, db } from '../firebase/firebaseConfig';
import { doc, setDoc } from 'firebase/firestore';

type AddressProps = {
    street: string;
    city: string;
    state: string;
    postalCode: string;
}

export const Address = () => {
  
  const [username, setUsername] = useState<string>('');
  const [address, setAddress] = useState<AddressProps>({
    street: '',
    city: '',
    state: '',
    postalCode: '',
  });

  const naviage = useNavigate();

  useAuthRedirect();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAddress((prevAddress) => ({
        ...prevAddress,
        [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const user = auth.currentUser;

    if (user) {
        try {
            await setDoc(doc(db, "addresses", user.uid), {
                ...address,
                userId: user.uid,
                email: user.email,
                name: username,
                createdAt: new Date(),
            });

            alert("Address saved successfully!");
            // naviage('/checkout') NOTE
        } catch (err) {
            console.log("Error saving address: ", err);
            alert('Failed to save address!');
        }
    } else {
        naviage('/login')
    }
  };
  
    return (
    <div>
      <h2>Enter Your Address</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>You name</label>
          <input
            type="text"
            name="name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Street</label>
          <input
            type="text"
            name="street"
            value={address.street}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>City</label>
          <input
            type="text"
            name="city"
            value={address.city}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>State</label>
          <input
            type="text"
            name="state"
            value={address.state}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Postal Code</label>
          <input
            type="text"
            name="postalCode"
            value={address.postalCode}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit">Save Address</button>
      </form>
    </div>
  )
}
