// app/dashboard/page.jsx
'use client';
import DataTable from '../../components/DataTable';
import submissions from '../../data/submissions.json';

export default function Dashboard() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Manager Dashboard</h2>
      {submissions.length > 0 ? (
        <DataTable data={submissions} />
      ) : (
        <p>No submissions available at the moment.</p>
      )}
    </div>
  );
}
