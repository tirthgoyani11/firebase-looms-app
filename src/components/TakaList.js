import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

function TakaList() {
  const [takas, setTakas] = useState([]);

  useEffect(() => {
    const fetchTakas = async () => {
      const querySnapshot = await getDocs(collection(db, "takas"));
      setTakas(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    };
    fetchTakas();
  }, []);

  return (
    <div>
      <h2>Takas</h2>
      <ul>
        {takas.map(taka => (
          <li key={taka.id}>
            {taka.number} — {taka.machine} — {taka.worker} — {taka.date}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default TakaList;
