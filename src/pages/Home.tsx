import React from 'react'
import { NavLink, Link } from 'react-router-dom';

interface RootLayoutProps {
  user: any;
}

export const Home: React.FC<RootLayoutProps> = ({ user }) => {
  return (
    <div className='max-w-5xl bg-slate-100 rounded-md p-5'>
      <h1 className="text-4xl font-extrabold text-gray-800 mb-8">
        Welcome to <span className="text-green-800">ZatarShopping</span>
      </h1>
      <p className="text-xl text-gray-600 mb-8 max-w-lg">
        Your One-Stop Online Shop for Everything! Explore our wide range of
        products, from the latest fashion trends to cutting-edge tech gadgets, all
        available at competitive prices.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <div className="p-6 bg-white shadow-lg rounded-lg text-center">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Discover New Arrivals</h2>
          <p className="text-gray-600 mb-4">
            Browse our latest collections across various categories, handpicked to match your style and needs.
          </p>
          <NavLink to={"/dashboard"}>
          <button className="bg-indigo-600 text-white" onClick={() => {}}>Shop Now</button>
          </NavLink>
          {/* {user ? (
           <NavLink to={"/login"}>
              <Button onClick={() => {}}>Login</Button>
           </NavLink>
          ) : (
            <NavLink to={"/dashboard"}>
          <Button className="bg-indigo-600 text-white" onClick={() => {}}>Shop Now</Button>
          </NavLink>
          )} */}
        </div>

        <div className="p-6 bg-white shadow-lg rounded-lg text-center">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Exclusive Deals & Discounts</h2>
          <p className="text-gray-600 mb-4">
            Don’t miss out on our ongoing promotions! Enjoy incredible discounts and special offers.
          </p>
          <button className="bg-indigo-600 text-white">View Deals</button>
        </div>

        <div className="p-6 bg-white shadow-lg rounded-lg text-center">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Fast & Secure Checkout</h2>
          <p className="text-gray-600 mb-4">
            We’ve streamlined the checkout process to ensure secure payments and fast delivery options.
          </p>
          <button className="bg-indigo-600 text-white">Learn More</button>
        </div>
        <div className="text-center bg-indigo-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4 text-indigo-600">Join Our Community</h2>
        <p className="text-gray-600 mb-4">
          Become a part of the ZatarShopping family by registering for an account.
        </p>
        <div className='flex justify-center'>
        <Link to="/register">
          <button className="bg-indigo-600 text-white mr-4">Register</button>
        </Link>
        <Link to="/login">
          <button className="bg-indigo-600 text-white">Login</button>
        </Link>
        </div>
      </div>
      </div>
    </div>
  )
}