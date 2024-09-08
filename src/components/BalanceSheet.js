

import React from "react";

const BalanceSheet = ({ balances}) => {
  return (
    <div className="bg-white shawdow-lg rounded-lg pg-6  mt-10 max-w-2xl mx-auto  glass-effect p-6 ">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Balance sheet</h2>
      {/* <button
        onClick={onSettleUp}
        className="bg-green-500 text-white py-2 px-4 rounded-full mb-4 hover:bg-green-600 transition-colors duration-300"
      >
        Settle Up
      </button> */}
      <div className="grid grid-cols-2 gap-6">
        {balances.map((balance, index) => (
          <div
            key={index}
            className="flex items-center justify-between  bg-gray-50 rounded-lg shadow-sm  card  hover:shadow-lg transition-transform transform hover:-translate-y-1 balance-update appear p-4"
          >
            <span className="font-medium text-gray-700">{balance.person}</span>
            <span
              className={`font-semibold ${
                balance.amount >= 0 ? "text-green-500" : " text-red-500"
              }`}
            >
              {balance.amount >= 0
                ? `Owes  ₹${balance.amount.toFixed(2)}`
                : `Is owed ₹${Math.abs(balance.amount).toFixed(2)}`}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
export default BalanceSheet;
