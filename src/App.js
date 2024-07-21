import React from 'react';
import { StateProvider } from './StateContext';
import TransactionForm from './components/TransactionForm';
import TransactionList from './components/TransactionList';
import BudgetSummary from './components/BudgetSummary';
import ExpenseChart from './components/ExpenseChart';
import IncomeExpenseChart from './components/IncomeExpenseChart';
import IncomeForm from './components/IncomeForm';
import './App.css';

function App() {
  return (
    <StateProvider>
      <div className="App">
        <h1>Budget Tracker</h1>
        <IncomeForm />
        <BudgetSummary />
        <TransactionForm />
        <TransactionList />
        <IncomeExpenseChart />
        <ExpenseChart />
      </div>
    </StateProvider>
  );
}

export default App;
