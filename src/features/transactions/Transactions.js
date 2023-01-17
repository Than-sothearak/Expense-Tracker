import React from 'react';
import { useSelector } from 'react-redux';
import { selectFlattenedTransactions } from './transactionsSlice';
import TransactionList from '../../components/TransactionList';

const Transactions = ({ showTransaction }) => {
  const transactions = useSelector(selectFlattenedTransactions);
  return (
    <div className="comments-container">
      <TransactionList transactions={transactions} showTransaction={showTransaction}/>
      
    </div>
  );
};

export default Transactions;
