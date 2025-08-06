import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

function Reports() {
  const [takas, setTakas] = useState([]);
  const [exportUrl, setExportUrl] = useState("");

  useEffect(() => {
    const fetchTakas = async () => {
      const querySnapshot = await getDocs(collection(db, "takas"));
      const data = querySnapshot.docs.map(doc => doc.data());
      setTakas(data);
    };
    fetchTakas();
  }, []);

  const handleExport = () => {
    const csv = [
      ["Number", "Machine", "Worker", "Date"],
      ...takas.map(t => [t.number, t.machine, t.worker, t.date])
    ].map(e => e.join(",")).join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    setExportUrl(URL.createObjectURL(blob));
  };

  return (
    <div>
      <h2>Reports</h2>
      <button onClick={handleExport}>Export Takas to CSV</button>
      {exportUrl && <a href={exportUrl} download="takas.csv">Download CSV</a>}
      <ul>
        {takas.map((t, i) => (
          <li key={i}>{t.number} — {t.machine} — {t.worker} — {t.date}</li>
        ))}
      </ul>
    </div>
  );
}
export default Reports;
