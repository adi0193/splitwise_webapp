import React, { useState, useEffect } from "react";

import TransactionForm from "./components/TransactionForm";
import TransactionList from "./components/TransactionList";
import BalanceSheet from "./components/BalanceSheet";
import { calculateBalance } from "./services/BalanceLogic";
import './App.css'


const App = () => {
  <h1 className="font-sans text-2xl">Expense Tracker</h1>;

  const [darkMode, setDarkMode] = useState(
    () => JSON.parse(localStorage.getItem("darkMode")) || false
  );

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };
  
  

  const [transactions, setTransactions] = useState([
    {
      paidBy: "Rajneesh",
      amount: 100,
      description: "Lunch",
      splitAmong: ["Rajneesh", "Harshit", "Nistha"],
    },
    {
      paidBy: "Harshit",
      amount: 300,
      description: "Dinner",
      splitAmong: ["Rajneesh", "Harshit", "Ankesh"],
    },
    {
      paidBy: "Nistha",
      amount: 600,
      description: "Hotel",
      splitAmong: ["Rajneesh", "Harshit", "Nistha"],
    },
  
  ]);

  const addTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
  };
  const balances = calculateBalance(transactions);
  

  return (
    <div
      className={`${
        darkMode ? "dark" : ""
      } min-h-screen bg-gradient-to-r from-gray-100 to-blue-200`}
    >
      <button
        onClick={toggleDarkMode}
        className="dark-mode-toggle bg-gray-800 text-white py-2 px-4 rounded-full absolute top-4 right-4"
      >
           {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>

      <div className="min-h-screen bg-gray-100 p-8 bg-gradient-to-r from-gray-100 to-blue-200">
        <h1 className=" text-4xl font-bold text-center mb-8 text-primary">
          Splitwise web App
        </h1>

        <TransactionForm addTransaction={addTransaction} />
        <TransactionList transactions={transactions} />
        <BalanceSheet balances={balances} />
      </div>
    </div>
  );
};

export default App;
