// app/add-artist/page.jsx
'use client';
import ArtistForm from '../../components/ArtistForm';

export default function AddArtist() {
  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Artist Onboarding</h2>
      <ArtistForm />
    </div>
  );
}
