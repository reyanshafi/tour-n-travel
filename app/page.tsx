// app/page.jsx
"use client";
import React from 'react';
import HeroSection from '../components/HeroSection';
import "./globals.css";
import Destinations from '../components/Destinations';
import Package from '../components/Packages';
import Reviews from '../components/reviews';
import Team from '../components/team';
import Services from '../components/services.jsx';
import Customers from '../components/customers.jsx';
import Head from 'next/head';

export default function HomePage() {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Allura&display=swap"
          rel="stylesheet"
        />
      </Head>

      <HeroSection />
      <Destinations />
      <Package />
      <Reviews />
      <Team />
      <Services />
      <Customers/>
    </>
  );
}
