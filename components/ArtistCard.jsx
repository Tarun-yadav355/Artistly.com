export default function ArtistCard({ name, category, priceRange, location }) {
  return (
    <div className="p-4 border rounded shadow">
      <h3 className="text-xl font-semibold">{name}</h3>
      <p className="text-sm text-gray-600">{category} • {location}</p>
      <p className="text-sm mt-2">Price: {priceRange}</p>
      <button className="mt-4 bg-blue-600 text-white px-3 py-1 rounded">Ask for Quote</button>
    </div>
  );
}
