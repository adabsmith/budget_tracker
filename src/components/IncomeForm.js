import React, { useState } from 'react';
import { useStateContext } from '../StateContext';

function IncomeForm() {
    const [income, setIncome] = useState('');
    const { dispatch } = useStateContext();

    const handleSubmit = e => {
        e.preventDefault();
        if (income.trim()) {
            dispatch({ type: 'SET_MONTHLY_INCOME', payload: parseFloat(income) });
            setIncome('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <input
                    type="number"
                    value={income}
                    onChange={e => setIncome(e.target.value)}
                    placeholder="Enter your monthly income"
                />
            </div>
            <button type="submit">Set Income</button>
        </form>
    );
}

export default IncomeForm;
