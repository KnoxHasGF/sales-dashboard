export default function SummaryCards({ sales }) {
  const total = sales.reduce((s, x) => s + (Number(x.total) || 0), 0);

  return (
    <div className="card">
      <h3>Total Sales (All Time)</h3>
      <p>฿{total}</p>
    </div>
  );
}
