import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import { useStateContext } from '../StateContext';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

function ExpenseChart() {
    const { state } = useStateContext();

    const expenseData = state.transactions
        .filter(transaction => transaction.amount < 0)
        .map(transaction => ({
            name: transaction.description,
            value: Math.abs(transaction.amount),
        }));

    return (
        <div className="chart-container">
            <h2>Expense Breakdown</h2>
            <PieChart width={400} height={400}>
                <Pie
                    data={expenseData}
                    cx={200}
                    cy={200}
                    labelLine={false}
                    outerRadius={150}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, value }) => `${name}: $${value}`}
                >
                    {expenseData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
                <Tooltip />
                <Legend />
            </PieChart>
        </div>
    );
}

export default ExpenseChart;
