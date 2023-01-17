import { Navbar } from '../components/Navbar';
import Budgets from '../features/budgets/Budgets';
import { useSelector } from 'react-redux';
import { selectFlattenedTransactions } from '../features/transactions/transactionsSlice';
import TransactionForm from '../components/TransactionForm';

function App() {
  const transactions = useSelector(selectFlattenedTransactions);
  return (
    <div className="App">
    <header className="App-header">
      <Navbar />
      <Budgets />
      <TransactionForm transactions={transactions}/>
    </header>
  </div>
  );
}

export default App;
