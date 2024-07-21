import React, { useEffect } from 'react';
import { useStateContext } from '../StateContext';

function BudgetSummary() {
    const { state } = useStateContext();

    const totalIncome = state.monthlyIncome;

    const totalExpenses = state.transactions
        .filter(transaction => transaction.amount < 0)
        .reduce((acc, transaction) => acc + transaction.amount, 0);

    const balance = totalIncome + totalExpenses;

    useEffect(() => {
        if (totalIncome + totalExpenses <= 100) {
            alert('Your expenses are within $100 of your monthly income!');
        }
    }, [totalIncome, totalExpenses]);

    return (
        <div className="summary-container">
            <h2>Budget Summary</h2>
            <p>Monthly Income: <span style={{ color: '#4CAF50' }}>${totalIncome}</span></p>
            <p>Total Expenses: <span style={{ color: '#f44336' }}>${Math.abs(totalExpenses)}</span></p>
            <p>Balance: <span style={{ color: balance >= 0 ? '#4CAF50' : '#f44336' }}>${balance}</span></p>
        </div>
    );
}

export default BudgetSummary;
