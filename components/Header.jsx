'use client';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
      <h1 className="text-xl font-bold text-blue-600">Artistly</h1>
      <nav className="space-x-4">
        <Link href="/" className="hover:underline">Home</Link>
        <Link href="/artists" className="hover:underline">Browse Artists</Link>
        <Link href="/add-artist" className="hover:underline">Add Artist</Link>
        <Link href="/dashboard" className="hover:underline">Dashboard</Link>
      </nav>
    </header>
  );
}
