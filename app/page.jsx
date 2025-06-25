'use client';

import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-pink-600 text-white p-4 text-center font-bold text-2xl">
        Artistly
      </header>

      <main className="flex-grow text-center p-10">
        <h1 className="text-4xl font-bold mb-6">Welcome to Artistly</h1>
        <p className="mb-6 text-lg text-gray-700">
          Connect with performing artists for your next event!
        </p>
        <div className="mb-8">
          <Link href="/artists" className="px-6 py-2 bg-pink-500 text-white rounded-md hover:bg-pink-600">
            Explore Artists
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {['Singers', 'Dancers', 'Speakers', 'DJs'].map((category) => (
            <div key={category} className="border p-4 rounded-lg shadow hover:scale-105 transition">
              <h3 className="font-semibold">{category}</h3>
            </div>
          ))}
        </div>
      </main>

      <footer className="bg-gray-100 text-center py-4">
        © 2025 Artistly. All rights reserved.
      </footer>
    </div>
  );
}
