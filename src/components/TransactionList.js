import React from 'react';
import { useStateContext } from '../StateContext';
import TransactionItem from './TransactionItem';

function TransactionList() {
    const { state } = useStateContext();

    return (
        <div>
            <h2>Transactions</h2>
            {state.transactions.length > 0 ? (
                state.transactions.map(transaction => <TransactionItem key={transaction.id} transaction={transaction} />)
            ) : (
                <p>No transactions</p>
            )}
        </div>
    );
}

export default TransactionList;
