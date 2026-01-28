import { useEffect, useState } from "react";
import items from "../data/pos_item.json";
import { getSales, saveSales } from "../utils/storage";

export default function SalesJournal() {
  const [sales, setSales] = useState([]);
  const [itemIndex, setItemIndex] = useState("");
  const [qty, setQty] = useState(1);
  const [date, setDate] = useState("");

  useEffect(() => {
    setSales(getSales());
  }, []);

  const selectedItem = items[itemIndex];

  const total =
    selectedItem && qty
      ? selectedItem.unitPrice * qty
      : 0;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedItem || !qty || !date) return;

    const newSale = {
      id: Date.now(),
      itemName: selectedItem.itemName,
      category: selectedItem.category,
      unitPrice: selectedItem.unitPrice,
      qty,
      date,
      total
    };

    const updatedSales = [...sales, newSale];
    setSales(updatedSales);
    saveSales(updatedSales);

    setItemIndex("");
    setQty(1);
    setDate("");
  };

  return (
    <div className="page">
      <h2>Sales Journal</h2>

      {/* FORM */}
      <div className="card form-card">
        <h3>Record New Sale</h3>

        <form onSubmit={handleSubmit} className="form-grid">

          <div className="form-field">
            <label>Item</label>
            <select
              value={itemIndex}
              onChange={(e) => setItemIndex(e.target.value)}
              required
            >
              <option value="">Select Item</option>
              {items.map((item, index) => (
                <option key={index} value={index}>
                  {item.itemName} (฿{item.unitPrice})
                </option>
              ))}
            </select>
          </div>

          <div className="form-field">
            <label>Quantity</label>
            <input
              type="number"
              min="1"
              value={qty}
              onChange={(e) => setQty(Number(e.target.value))}
              required
            />
          </div>

          <div className="form-field">
            <label>Date</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>

          <div className="total-box">
            <div>Total</div>
            <div className="total-price">฿{total}</div>
          </div>

          <div className="form-action">
            <button type="submit" className="btn-primary">
              Add Sale
            </button>
          </div>

        </form>
      </div>

      {/* TABLE */}
      <div className="card">
        <h3>Sales Records</h3>

        {sales.length === 0 ? (
          <p className="empty-text">No sales recorded yet.</p>
        ) : (
          <table className="sales-table">
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
              {sales.map((s) => (
                <tr key={s.id}>
                  <td>{s.date}</td>
                  <td>{s.itemName}</td>
                  <td>{s.category}</td>
                  <td>{s.qty}</td>
                  <td className="total-cell">฿{s.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
