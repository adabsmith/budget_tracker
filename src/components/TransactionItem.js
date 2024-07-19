import React from 'react';
import { useStateContext } from '../StateContext';

function TransactionItem({ transaction }) {
    const { dispatch } = useStateContext();

    return (
        <div>
            <span>{transaction.description}: ${transaction.amount + '  '}</span>
            <button onClick={() => dispatch({ type: 'REMOVE_TRANSACTION', payload: transaction.id })}>
                Remove
            </button>
        </div>
    );
}

export default TransactionItem;
