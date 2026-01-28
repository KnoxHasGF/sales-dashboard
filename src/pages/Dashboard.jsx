import { useEffect, useState } from "react";
import { getSales } from "../utils/storage";
import SummaryCards from "../components/SummaryCards";
import LineChartComp from "../components/LineChartComp";
import PieChartComp from "../components/PieChartComp";
import BarChartComp from "../components/BarChartComp";

export default function Dashboard() {
  const [sales, setSales] = useState([]);

  useEffect(() => {
    const load = () => setSales(getSales());
    load();
    window.addEventListener("focus", load);
    return () => window.removeEventListener("focus", load);
  }, []);

  return (
    <div className="page">
      <h2>Dashboard</h2>
      <SummaryCards sales={sales} />

      <div className="grid">
        <LineChartComp sales={sales} />
        <PieChartComp sales={sales} />
        <BarChartComp sales={sales} />
      </div>
    </div>
  );
}
