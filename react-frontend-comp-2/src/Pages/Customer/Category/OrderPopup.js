// CheckoutPage.js
import React from 'react';

const OrderPopup = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-orange-500">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Checkout</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-600">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="mt-1 p-2 w-full border rounded focus:outline-none focus:ring focus:border-orange-400"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 p-2 w-full border rounded focus:outline-none focus:ring focus:border-orange-400"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="card" className="block text-sm font-medium text-gray-600">
              Credit Card
            </label>
            <input
              type="text"
              id="card"
              className="mt-1 p-2 w-full border rounded focus:outline-none focus:ring focus:border-orange-400"
            />
          </div>
          <button
            type="submit"
            className="bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600 focus:outline-none focus:ring focus:border-orange-400"
          >
            Place Order
          </button>
        </form>
      </div>
    </div>
  );
};

export default OrderPopup;
