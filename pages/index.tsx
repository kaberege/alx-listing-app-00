// pages/index.tsx

import React from 'react';
import Head from 'next/head';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import { PLACEHOLDER_IMAGE } from '../constants';

export default function Home() {
  return (
    <>
      <Head>
        <title>ALX Listing App</title>
        <meta name="description" content="Airbnb clone listing page" />
      </Head>
      <main className="min-h-screen bg-gray-100 p-8">
        <h1 className="text-3xl font-bold mb-6 text-center">Featured Listings</h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <Card
            title="Cozy Studio in Downtown"
            description="A beautiful and modern studio apartment in the heart of the city."
            image={PLACEHOLDER_IMAGE}
          />
          <Card
            title="Beachside Bungalow"
            description="Relax and unwind in this seaside home with stunning ocean views."
            image={PLACEHOLDER_IMAGE}
          />
          <Card
            title="Mountain Retreat"
            description="Escape to the mountains in this quiet and scenic getaway."
            image={PLACEHOLDER_IMAGE}
          />
        </div>

        <div className="mt-10 text-center">
          <Button label="See All Listings" onClick={() => alert('Button Clicked!')} />
        </div>
      </main>
    </>
  );
}
