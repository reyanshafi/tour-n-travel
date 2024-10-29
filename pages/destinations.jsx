"use client";
import "../app/globals.css";
import React from 'react';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import GetQuoteButton from '../components/GetQuoteButton';

const destinations = [
  { id: 1, name: 'Srinagar', image: '/images/srinagar.jpeg', description: 'Experience the beauty of the Dal Lake and Mughal Gardens in Srinagar.' },
  { id: 2, name: 'Gulmarg', image: '/images/gulmarg.jpg', description: 'A paradise for skiers and nature lovers, known for its scenic beauty.' },
  { id: 3, name: 'Sonamarg', image: '/images/sonamarg.jpg', description: 'The Meadow of Gold, perfect for trekking and nature walks.' },
  { id: 4, name: 'Pahalgam', image: '/images/pahalgam.jpg', description: 'A serene town known for its lush green meadows and Lidder River.' },
  { id: 5, name: 'Leh', image: '/images/leh.jpg', description: 'Explore the rugged landscapes, monasteries, and culture of Leh.' },
  { id: 6, name: 'Yousmarg', image: '/images/yousmarg.jpg', description: 'A hidden gem, ideal for a peaceful escape into nature.' },
  { id: 7, name: 'Kupwara', image: '/images/kupwara.jpg', description: 'Known as the crown of Kashmir, Kupwara is a destination of breathtaking landscapes and serene valleys.' },
  { id: 8, name: 'Doodhpathri', image: '/images/doodhpathri.jpg', description: 'A valley of milk, Doodhpathri is a lush green meadow ideal for a day of relaxation amidst nature.' },
  { id: 9, name: 'Gurez Valley', image: '/images/gurez.jpg', description: 'A remote valley known for its stunning beauty, vibrant culture, and unparalleled adventure opportunities.' },
];

const Destinations = () => {
  return (
    <div>
      <Navbar />
      <div className="mt-28 mb-28">
        <h2 className="text-5xl font-bold text-center text-yellow-500 mb-4 font-montserrat underline-animation">
          Popular Destinations
        </h2>
        <p className="text-center text-gray-700 text-lg max-w-2xl mx-auto mb-12">
          Explore the best destinations to make your travel dreams come true. From tranquil valleys to adventurous peaks, each location promises unforgettable experiences.
        </p>
        
        <div className="max-w-6xl mx-auto space-y-16">
          {destinations.map((destination, index) => (
            <div key={destination.id} className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {index % 2 === 0 ? (
                <>
                  {/* First Card: Image left, description right */}
                  <div className="relative h-64 w-full lg:h-80 rounded-xl shadow-lg overflow-hidden transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl">
                    <Image
                      src={destination.image}
                      alt={destination.name}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-xl transition-transform duration-300"
                    />
                  </div>
                  <div className="space-y-4 p-4 lg:p-8 bg-white rounded-xl shadow-lg transition-shadow duration-300 hover:shadow-xl text-center lg:text-left">
                    <h3 className="text-2xl font-bold text-yellow-500 font-montserrat">{destination.name}</h3>
                    <p className="text-gray-700">{destination.description}</p>
                    <div className="flex justify-center lg:justify-start">
                      <GetQuoteButton />
                    </div>
                  </div>
                </>
              ) : (
                <>
                  {/* Second Card: Description left, image right */}
                  <div className="space-y-4 p-4 lg:p-8 bg-white rounded-xl shadow-lg transition-shadow duration-300 hover:shadow-xl text-center lg:text-left">
                    <h3 className="text-2xl font-bold text-yellow-500 font-montserrat">{destination.name}</h3>
                    <p className="text-gray-700">{destination.description}</p>
                    <div className="flex justify-center lg:justify-start">
                      <GetQuoteButton />
                    </div>
                  </div>
                  <div className="relative h-64 w-full lg:h-80 rounded-xl shadow-lg overflow-hidden transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl">
                    <Image
                      src={destination.image}
                      alt={destination.name}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-xl transition-transform duration-300"
                    />
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Destinations;
