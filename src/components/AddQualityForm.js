import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";

function AddQualityForm() {
  const [taka, setTaka] = useState("");
  const [inspector, setInspector] = useState("");
  const [result, setResult] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addDoc(collection(db, "qualities"), { taka, inspector, result });
    setTaka("");
    setInspector("");
    setResult("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={taka} onChange={e => setTaka(e.target.value)} placeholder="Taka" required />
      <input value={inspector} onChange={e => setInspector(e.target.value)} placeholder="Inspector" required />
      <input value={result} onChange={e => setResult(e.target.value)} placeholder="Result" required />
      <button type="submit">Add Quality Inspection</button>
    </form>
  );
}
export default AddQualityForm;
