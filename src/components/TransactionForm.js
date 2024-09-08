import React, { useState } from "react";

const TransactionForm = ({ addTransaction }) => {
  const [paidBy, setPaidBy] = useState("");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [splitAmong, setSplitAmoung] = useState([]);

  
  const participants = ["Rajneesh", "Harshit", "Nistha", "Ankesh"];

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!paidBy || !amount || !description || !splitAmong.lenght === 0) {
      alert("Please fill the all the fiels ");
      return;
    }
    const newTransaction = {
      paidBy,
      amount: parseFloat(amount),
      description,
      splitAmong,
    };
    addTransaction(newTransaction);

    setPaidBy("");
    setAmount("");
    setDescription("");
    setSplitAmoung("");
  };

  const handleSplitAmongChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setSplitAmoung([...splitAmong, value]);
    } else {
      setSplitAmoung(splitAmong.filter((name) => name !== value));
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-lg rounded-lg p-6 space-y-4 max-w-lg mx-auto "
    >
      <h2 className="text-2xl font-bold text-gray-800">Add new Transaction</h2>

      <div className="mb-4">
        <label className="block front-semibold mb-1">Paid By:</label>
        <select
          value={paidBy}
          onChange={(e) => setPaidBy(e.target.value)}
          className="w-full p-2 border rounded"
        >
          <option value="">Select who paid</option>
          {participants.map((participant) => (
            <option key={participant} value={participant}>
              {participant}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label className="block font-semibold mb-1">Amount:</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter amount"
          className="w-full p-2 border rounded"
        />
      </div>

      <div className="mb-4">
        <label className="block font-semibold mb-1">Description</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter Description"
          className="w-full p-2 border rounded"
        />
      </div>

      <div className="mb-4">
        <label className="block font-semibold mb-1">Split Among:</label>
        {participants.map((participant) => (
          <div key={participant} className="flex items-center mb-2">
            <input
              type="checkbox"
              value={participant}
              checked={splitAmong.includes(participant)}
              onChange={handleSplitAmongChange}
              className="mr-2"
            />

            <label>{participant}</label>
          </div>
        ))}
      </div>

      <button
        type="submit"
        className=" p-2  hover:bg-primary-dark w-full  bg-primary text-white py-2 px-4 rounded-full hover:bg-secondary hover:scale-105 transition-transform  "
      >
        Add transaction
      </button>
    </form>
  );
};

export default TransactionForm;
