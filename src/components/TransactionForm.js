import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  addTransaction,
  CATEGORIES,
} from '../features/transactions/transactionsSlice';

export default function TransactionForm({ categories, tranaction }) {
  const dispatch = useDispatch();
  const [category, setCategory] = useState(CATEGORIES[0]);
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (amount === 0) {
      alert('Please input amount!')
    } else { 
   
    dispatch(
      addTransaction({
        category: category,
        description: description,
        amount: parseFloat(amount),
        id: Date.now()
      })
    );
    setCategory(CATEGORIES[0]);
    setDescription('');
    setAmount(0);
    }
    
  };

  return (
    <section className="new-transaction-section">
      <h2>New Transaction</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-wrapper">
          <div>
            <label htmlFor="category">Category</label>
            <select
              id="category"
              value={category}
              onChange={(e) => setCategory(e.currentTarget.value)}
            >
              {CATEGORIES.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>

          <div className='description-input'>
            <label htmlFor="description">Description</label>
            <input
              id="description"
              value={description}
              onChange={(e) => setDescription(e.currentTarget.value)}
              type="text"
            />
          </div>

          <div>
            <label htmlFor="amount">Amount</label>
            <input
              id="amount"
              value={amount}
              onChange={(e) => setAmount(e.currentTarget.value)}
              type="number"
              step="0.01"
            />
          </div>
        </div>
        <div className='form-wrapper-btn'>
        <button>Add Transaction</button>
        </div>
       
      </form>
    </section>
  );
}
