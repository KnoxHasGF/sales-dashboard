import { LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";

export default function LineChartComp({ sales }) {
  const map = {};
  sales.forEach(s => {
    map[s.date] = (map[s.date] || 0) + s.total;
  });

  const data = Object.entries(map).map(([date, total]) => ({
    date,
    total,
  }));

  return (
    <div className="card">
      <h3>Sales Trend</h3>
      <LineChart width={300} height={200} data={data}>
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Line dataKey="total" stroke="#2563eb" />
      </LineChart>
    </div>
  );
}
