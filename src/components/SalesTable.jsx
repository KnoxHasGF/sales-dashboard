export default function SalesTable({ sales }) {
  return (
    <table border="1" style={{ marginTop: 20, width: "100%" }}>
      <thead>
        <tr>
          <th>Date</th>
          <th>Item</th>
          <th>Category</th>
          <th>Qty</th>
          <th>Total (฿)</th>
        </tr>
      </thead>
      <tbody>
        {sales.map(s => (
          <tr key={s.id}>
            <td>{s.date}</td>
            <td>{s.itemName}</td>
            <td>{s.category}</td>
            <td>{s.quantity}</td>
            <td>{s.total}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
