export default function DataTable({ data }) {
  return (
    <table className="w-full border mt-4">
      <thead>
        <tr className="bg-gray-100">
          <th className="p-2">Name</th>
          <th className="p-2">Category</th>
          <th className="p-2">Location</th>
          <th className="p-2">Fee</th>
          <th className="p-2">Action</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, i) => (
          <tr key={i} className="border-t">
            <td className="p-2">{row.name}</td>
            <td className="p-2">{row.category}</td>
            <td className="p-2">{row.location}</td>
            <td className="p-2">{row.fee}</td>
            <td className="p-2">
              <button className="bg-gray-200 px-2 py-1 rounded">View</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
