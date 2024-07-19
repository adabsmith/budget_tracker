import React, { useState } from 'react';
import { useStateContext } from '../StateContext';

function TransactionForm() {
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState('');
    const { dispatch } = useStateContext();

    const handleSubmit = e => {
        e.preventDefault();
        if (description.trim() && amount.trim()) {
            dispatch({ type: 'ADD_TRANSACTION', payload: { id: Date.now(), description, amount: parseFloat(amount) } });
            setDescription('');
            setAmount('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <input
                    type="text"
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                    placeholder="Enter description"
                />
            </div>
            <div>
                <input
                    type="number"
                    value={amount}
                    onChange={e => setAmount(e.target.value)}
                    placeholder="Enter amount"
                />
            </div>
            <button type="submit">Add Transaction</button>
        </form>
    );
}

export default TransactionForm;
