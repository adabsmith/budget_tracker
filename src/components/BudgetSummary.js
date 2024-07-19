import React from 'react';
import { useStateContext } from '../StateContext';

function BudgetSummary() {
    const { state } = useStateContext();

    const totalIncome = state.transactions
        .filter(transaction => transaction.amount > 0)
        .reduce((acc, transaction) => acc + transaction.amount, 0);

    const totalExpenses = state.transactions
        .filter(transaction => transaction.amount < 0)
        .reduce((acc, transaction) => acc + transaction.amount, 0);

    const balance = totalIncome + totalExpenses;

    return (
        <div className="summary-container">
            <h2>Budget Summary</h2>
            <p>Total Expenses: <span style={{ color: '#4CAF50' }}>${totalIncome}</span></p>
            <p>Total Income: <span style={{ color: '#f44336' }}>${Math.abs(totalExpenses)}</span></p>
            <p>Balance: <span style={{ color: balance >= 0 ? '#4CAF50' : '#f44336' }}>${balance}</span></p>
        </div>
    );
}

export default BudgetSummary;
