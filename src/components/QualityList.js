import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

function QualityList() {
  const [qualities, setQualities] = useState([]);

  useEffect(() => {
    const fetchQualities = async () => {
      const querySnapshot = await getDocs(collection(db, "qualities"));
      setQualities(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    };
    fetchQualities();
  }, []);

  return (
    <div>
      <h2>Quality Inspections</h2>
      <ul>
        {qualities.map(quality => (
          <li key={quality.id}>
            {quality.taka} — {quality.inspector} — {quality.result}
          </li>
        ))}
      </
