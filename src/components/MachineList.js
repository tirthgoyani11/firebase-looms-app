import React, { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase";
import Notification from "./Notification";

function MachineList() {
  const [machines, setMachines] = useState([]);
  const [search, setSearch] = useState("");
  const [notiMsg, setNotiMsg] = useState("");

  useEffect(() => {
    async function fetchMachines() {
      let q = collection(db, "machines");
      if (search) {
        q = query(q, where("name", ">=", search), where("name", "<=", search + "\uf8ff"));
      }
      const snap = await getDocs(q);
      setMachines(snap.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    }
    fetchMachines();
  }, [search]);

  return (
    <div>
      <h2>Machines</h2>
      <input placeholder="Search..." value={search} onChange={e => setSearch(e.target.value)} />
      <ul>
        {machines.map(machine => (
          <li key={machine.id}>{machine.name} ({machine.status})</li>
        ))}
      </ul>
      <Notification message={notiMsg} />
    </div>
  );
}
export default MachineList;
