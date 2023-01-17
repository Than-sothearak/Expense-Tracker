import React, { useState } from "react";
import { BiTransfer } from "react-icons/bi";
import Transactions from "../features/transactions/Transactions";
export const Navbar = () => {
  const [showTransaction, setShowTransaction] = useState(false);
  return (
    <div className="navbar-conatainer">
      <h1>Expense Tracker</h1>
      <button
        className="transaction-btn"
        title="View transactions"
        onClick={() => setShowTransaction(true)}
      >
        <BiTransfer

          />
      </button>
      {showTransaction && <Transactions showTransaction={setShowTransaction} />}
    </div>
  );
};
