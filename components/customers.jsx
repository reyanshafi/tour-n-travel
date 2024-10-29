// components/Customers.jsx
"use client";

import React from 'react';
import Image from 'next/image';

const customers = [
  {
    id: 1,
    name: 'Alice Johnson',
    image: '/images/customers/customer1.jpg',
    testimonial: 'A wonderful trip, everything was perfectly planned!',
  },
  {
    id: 2,
    name: 'David Lee',
    image: '/images/customers/customer2.jpg',
    testimonial: 'A journey I will never forget, highly recommended!',
  },
  {
    id: 3,
    name: 'Emily Clark',
    image: '/images/customers/customer3.jpg',
    testimonial: 'Excellent service and beautiful destinations!',
  },
  {
    id: 4,
    name: 'Michael Brown',
    image: '/images/customers/customer4.jpg',
    testimonial: 'Amazing experience, will definitely book again!',
  },
  {
    id: 5,
    name: 'Sophia White',
    image: '/images/customers/customer1.jpg',
    testimonial: 'A seamless travel experience with fantastic guides.',
  },
];

const Customers = () => {
  return (
    <div className="p-6 md:p-8 bg-gradient-to-b from-gray-100 via-white to-gray-100 min-h-screen">
      <h2 className="text-5xl font-bold text-center text-yellow-500 mb-4 font-allura underline-animation">
        Happy Customers
      </h2>
      <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
        Meet some of our happy customers who have explored new horizons with us. Their smiles say it all!
      </p>
      <div className="flex flex-wrap justify-center gap-6">
        {customers.map((customer, index) => (
          <div
            key={customer.id}
            className="w-64 h-80 bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105"
            style={{
              marginTop: `${index * 10}px`,
              boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
            }}
          >
            <div className="relative w-full h-40">
              <Image
                src={customer.image}
                alt={customer.name}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 hover:scale-110"
              />
            </div>
            <div className="p-4 text-center space-y-2">
              <h3 className="text-xl font-bold text-yellow-500 font-montserrat">{customer.name}</h3>
              <p className="text-sm text-gray-600 italic">"{customer.testimonial}"</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Customers;
