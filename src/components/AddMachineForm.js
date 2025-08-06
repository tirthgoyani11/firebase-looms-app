import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";

function AddMachineForm() {
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addDoc(collection(db, "machines"), { name, status });
    setName("");
    setStatus("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={name} onChange={e => setName(e.target.value)} placeholder="Machine Name" required />
      <input value={status} onChange={e => setStatus(e.target.value)} placeholder="Status" required />
      <button type="submit">Add Machine</button>
    </form>
  );
}
export default AddMachineForm;
