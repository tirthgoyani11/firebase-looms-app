import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";

function AddTakaForm() {
  const [number, setNumber] = useState("");
  const [machine, setMachine] = useState("");
  const [worker, setWorker] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addDoc(collection(db, "takas"), { number, machine, worker, date });
    setNumber("");
    setMachine("");
    setWorker("");
    setDate("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={number} onChange={e => setNumber(e.target.value)} placeholder="Taka Number" required />
      <input value={machine} onChange={e => setMachine(e.target.value)} placeholder="Machine" required />
      <input value={worker} onChange={e => setWorker(e.target.value)} placeholder="Worker" required />
      <input value={date} onChange={e => setDate(e.target.value)} type="date" required />
      <button type="submit">Add Taka</button>
    </form>
  );
}
export default AddTakaForm;
