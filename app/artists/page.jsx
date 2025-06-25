// app/artists/page.jsx
'use client';
import { useState } from 'react';
import artists from '../../data/artists.json';
import ArtistCard from '../../components/ArtistCard';
import FilterBlock from '../../components/FilterBlock';

export default function ArtistListing() {
  const [filters, setFilters] = useState({ category: '', location: '' });

  const filtered = artists.filter((a) =>
    (!filters.category || a.category === filters.category) &&
    (!filters.location || a.location.toLowerCase().includes(filters.location.toLowerCase()))
  );

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Browse Artists</h2>
      <FilterBlock filters={filters} onChange={setFilters} />
      <div className="grid md:grid-cols-3 gap-6 mt-6">
        {filtered.map((artist, i) => (
          <ArtistCard key={i} {...artist} />
        ))}
      </div>
    </div>
  );
}
