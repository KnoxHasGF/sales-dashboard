import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

const COLORS = ["#2563eb", "#16a34a", "#f97316", "#dc2626", "#9333ea"];

export default function PieChartComp({ sales }) {
  const dataMap = {};

  sales.forEach(s => {
    dataMap[s.category] = (dataMap[s.category] || 0) + s.total;
  });

  const data = Object.keys(dataMap).map(key => ({
    name: key,
    value: dataMap[key]
  }));

  if (data.length === 0) return <p>No data</p>;

  return (
    <div className="card">
      <h3>Sales by Category</h3>

      <ResponsiveContainer width="100%" height={280}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            outerRadius={100}
            label={({ name, percent }) =>
              `${name} ${(percent * 100).toFixed(0)}%`
            }
          >
            {data.map((_, index) => (
              <Cell
                key={index}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>

          <Tooltip formatter={v => `฿${v}`} />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
