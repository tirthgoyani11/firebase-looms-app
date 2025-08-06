import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";

function AddWorkerForm() {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addDoc(collection(db, "workers"), { name, role });
    setName("");
    setRole("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={name} onChange={e => setName(e.target.value)} placeholder="Worker Name" required />
      <input value={role} onChange={e => setRole(e.target.value)} placeholder="Role" required />
      <button type="submit">Add Worker</button>
    </form>
  );
}
export default AddWorkerForm;
