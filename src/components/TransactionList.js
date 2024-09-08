import React, { useState } from "react";

const TransactionList = ({ transactions }) => {
  const [filter, setFilter] = useState("All");

  const filteredTransactions =
    filter === "All"
      ? transactions
      : transactions.filter(
          (transaction) =>
            transaction.paidBy === filter ||
            transaction.splitAmong.includes(filter)
        );
  return (
    <div className="space-y-6 my-8">
      <div className="flex justify-between items-center mb-4">
        <label className="mr-4">Filter by:</label>
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="border border-gray-300 rounded-md p-2"
        >
          <option value="All">All</option>
          <option value="Rajneesh">Rajneesh</option>
          <option value="Harsit">Harsit</option>
          <option value="Nistha">Nistha</option>
          <option value="Ankesh">Ankesh</option>
        </select>
      </div>
      {filteredTransactions.map((transaction, index) => (
        <div
          key={index}
          className="card bg-gray-100 p-4 rounded-lg shadow-sm hover:shadow-lg transition-transform transform hover:-translate-y-1"
        >
          
          <div className="flex justify-between ">
            <h3 className="text-lg font-semibold text-gray-800  hover:text-primary transition duration-300">
              {transaction.description}
            </h3>
            <span className="text-primary font-bold ">
              {transaction.amount}
            </span>
          </div>
          
          <p className="text-sm text-gray-600">Paid By {transaction.paidBy}</p>
          <p className="text-sm text-gray-600">
            Split among: {transaction.splitAmong.join(", ")}{" "}
          </p>
        </div>
      ))}
    </div>
  );
};

export default TransactionList;
