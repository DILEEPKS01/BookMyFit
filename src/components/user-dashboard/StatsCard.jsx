
export default function StatsCard({ title, value, icon }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-gray-500 text-sm">{title}</p>
          <p className="text-2xl font-bold mt-1">{value}</p>
        </div>
        <div className="text-red text-3xl">{icon}</div>
      </div>
    </div>
  );
}
