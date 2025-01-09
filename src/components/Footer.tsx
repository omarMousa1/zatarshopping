import React from 'react'


export const Footer = () => {
  return (
    <footer className='bg-gray-900 text-white p-8'>
        <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        
            {/* About Section */}
            <div>
                <h4 className="text-lg font-semibold mb-3">About Us</h4>
                <p className="text-sm">
                ZatarShopping is an online shopping platform that offers the best products and guarantees their quality. 
                It also seeks to satisfy its customers by making its services easy and receiving their suggestions.
                </p>
            </div>

            {/* Customer Support Section */}
            <div>
            <h4 className="text-lg font-semibold mb-3">Customer Support</h4>
            <ul className="space-y-2 text-sm">
                <li><a href="/faqs" className="hover:underline">FAQs</a></li>
                <li><a href="/shipping-returns" className="hover:underline">Shipping & Returns</a></li>
                <li><a href="/order-tracking" className="hover:underline">Order Tracking</a></li>
                <li><a href="/customer-service" className="hover:underline">Customer Service</a></li>
            </ul>
            </div>

            {/* Legal Section */}
            <div>
            <h4 className="text-lg font-semibold mb-3">Legal</h4>
            <ul className="space-y-2 text-sm">
                <li><a href="/privacy-policy" className="hover:underline">Privacy Policy</a></li>
                <li><a href="/terms-of-service" className="hover:underline">Terms of Service</a></li>
                <li><a href="/return-policy" className="hover:underline">Return Policy</a></li>
            </ul>
            </div>

            {/* Account Section */}
            <div>
            <h4 className="text-lg font-semibold mb-3">Account</h4>
            <ul className="space-y-2 text-sm">
                <li><a href="/account" className="hover:underline">My Account</a></li>
                <li><a href="/order-history" className="hover:underline">Order History</a></li>
                <li><a href="/wishlist" className="hover:underline">Wishlist</a></li>
                <li><a href="/categories" className="hover:underline">Categories</a></li>
            </ul>
            </div>

            {/* Newsletter and Social Media */}
            <div className='col-span-2 sm:col-span-1'>
            <h4 className="text-lg font-semibold mb-3">Stay Connected</h4>
            <form className="flex flex-col space-y-2">
                <input
                type="email"
                placeholder="Enter your email"
                className="p-2 rounded text-black"
                aria-label="Email address"
                />
                <button type="submit" disabled className="bg-orange-500 hover:bg-orange-600 text-white rounded p-2">
                Subscribe
                </button>
            </form>
            <div className="flex space-x-3 mt-4">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:underline">Facebook</a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:underline">Instagram</a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:underline">Twitter</a>
            </div>
            </div>

        </div>
        {/* Bottom Section */}
        <div className="text-center mt-8 border-t border-gray-700 pt-4">
            <p className="text-sm">&copy; 2024 Zatar. All rights reserved.</p>
            {/* Add Zatar logo here if needed */}
        </div>
    </footer>
  )
}
