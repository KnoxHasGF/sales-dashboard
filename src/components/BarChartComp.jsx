import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell
} from "recharts";

const COLORS = [
  "#2563eb", // blue
  "#16a34a", // green
  "#f97316", // orange
  "#dc2626", // red
  "#9333ea"  // purple
];

export default function BarChartComp({ sales }) {
  const itemMap = {};

  sales.forEach(s => {
    itemMap[s.itemName] =
      (itemMap[s.itemName] || 0) + s.total;
  });

  const data = Object.entries(itemMap)
    .map(([name, total]) => ({ name, total }))
    .sort((a, b) => b.total - a.total)
    .slice(0, 5);

  if (data.length === 0) return <p>No data</p>;

  return (
    <div className="card">
      <h3>Top 5 Selling Items</h3>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis
            dataKey="name"
            angle={-20}
            textAnchor="end"
            interval={0}
            height={70}
          />
          <YAxis />
          <Tooltip formatter={v => `฿${v}`} />

          <Bar dataKey="total">
            {data.map((_, index) => (
              <Cell
                key={index}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
