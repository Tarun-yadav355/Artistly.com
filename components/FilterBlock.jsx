export default function FilterBlock({ filters, onChange }) {
  return (
    <div className="flex flex-wrap gap-4">
      <select
        value={filters.category}
        onChange={(e) => onChange({ ...filters, category: e.target.value })}
        className="border p-2 rounded"
      >
        <option value="">All Categories</option>
        <option value="Singers">Singers</option>
        <option value="Dancers">Dancers</option>
        <option value="DJs">DJs</option>
        <option value="Speakers">Speakers</option>
      </select>

      <input
        type="text"
        placeholder="Location"
        value={filters.location}
        onChange={(e) => onChange({ ...filters, location: e.target.value })}
        className="border p-2 rounded"
      />
    </div>
  );
}
