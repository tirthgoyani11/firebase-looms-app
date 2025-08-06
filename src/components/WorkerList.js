import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

function WorkerList() {
  const [workers, setWorkers] = useState([]);

  useEffect(() => {
    const fetchWorkers = async () => {
      const querySnapshot = await getDocs(collection(db, "workers"));
      setWorkers(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    };
    fetchWorkers();
  }, []);

  return (
    <div>
      <h2>Workers</h2>
      <ul>
        {workers.map(worker => (
          <li key={worker.id}>{worker.name} ({worker.role})</li>
        ))}
      </ul>
    </div>
  );
}
export default WorkerList;
