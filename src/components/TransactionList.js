import React, { useState } from "react";
import Transaction from "./Transaction";
import { FaWindowClose } from 'react-icons/fa'
export default function TransactionList({ transactions, showTransaction }) {
  return (
    <div className="transactions-section">
      <ul className="new-transaction-list">
        <div className="new-transaction-bar">
          <h3>Transaction history</h3>
          <button className='btn-close'onClick={() => showTransaction(false)}><FaWindowClose /></button>
        </div>
        {transactions.map((t) => (
          <Transaction transaction={t} key={t.id} />
        ))}
      </ul>
    </div>
  );
}
