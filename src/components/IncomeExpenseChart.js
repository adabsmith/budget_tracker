import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { useStateContext } from '../StateContext';

function IncomeExpenseChart() {
    const { state } = useStateContext();

    const totalIncome = state.monthlyIncome;

    const totalExpenses = Math.abs(state.transactions
        .filter(transaction => transaction.amount < 0)
        .reduce((acc, transaction) => acc + transaction.amount, 0));

    const summaryData = [
        { name: 'Income', value: totalIncome },
        { name: 'Expenses', value: totalExpenses },
    ];

    return (
        <div className="chart-container">
            <h2>Income vs Expenses</h2>
            <BarChart width={600} height={300} data={summaryData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="value" fill="#8884d8" />
            </BarChart>
        </div>
    );
}

export default IncomeExpenseChart;
