// components/Destinations.jsx
"use client";

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const destinations = [
  { id: 1, name: 'Srinagar', image: '/images/srinagar.jpeg', description: 'Experience the serene Dal Lake and Mughal Gardens.' },
  { id: 2, name: 'Gulmarg', image: '/images/gulmarg.jpg', description: 'A paradise for skiers and nature lovers.' },
  { id: 3, name: 'Sonamarg', image: '/images/sonamarg.jpg', description: 'The Meadow of Gold, perfect for trekking.' },
  { id: 4, name: 'Pahalgam', image: '/images/pahalgam.jpg', description: 'Lush green meadows and the tranquil Lidder River.' },
  { id: 5, name: 'Leh', image: '/images/leh.jpg', description: 'Explore the rugged landscapes and monasteries of Leh.' },
  { id: 6, name: 'Yousmarg', image: '/images/yousmarg.jpg', description: 'A hidden gem, ideal for a peaceful nature retreat.' },
];

const Destinations = () => {
  const router = useRouter();

  const handleViewAllDestinations = () => {
    router.push('/destinations');
  };

  return (
    <div className="p-6 md:p-8">
      <h2 className="text-5xl font-bold text-center text-yellow-500 mb-4 font-allura underline-animation">
        Popular Destinations
      </h2>
      <p className="text-center text-gray-500 mb-8 max-w-xl mx-auto">
        Uncover the beauty of the most popular destinations. From serene lakes to breathtaking mountain landscapes, explore your next adventure.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mx-auto max-w-6xl">
        {destinations.map((destination) => (
          <div
            key={destination.id}
            className="relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="relative w-full h-64">
              <Image
                src={destination.image}
                alt={destination.name}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
              <div className="absolute bottom-0 left-0 p-4 bg-white shadow-lg w-full md:w-3/4">
                <h3 className="text-lg font-bold text-gray-800 font-poppins">{destination.name}</h3>
                <div className="flex items-center text-yellow-500 mt-1">
                  ★★★★☆
                  <span className="text-gray-600 text-sm ml-2">(25 reviews)</span>
                </div>
                <p className="text-gray-600 text-sm mt-2">{destination.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <button
          onClick={handleViewAllDestinations}
          className="px-4 py-2 md:px-6 md:py-3 bg-yellow-500 text-white font-bold rounded-lg hover:bg-yellow-600 transition duration-300 shadow-md"
        >
          More Destinations
        </button>
      </div>
    </div>
  );
};

export default Destinations;
