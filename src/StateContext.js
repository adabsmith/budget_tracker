import React, { createContext, useReducer, useContext } from 'react';

// Initial state
const initialState = {
  transactions: [],
  monthlyIncome: 0,
};

// Reducer function to manage state updates
function stateReducer(state, action) {
  switch (action.type) {
    case 'ADD_TRANSACTION':
      return { ...state, transactions: [...state.transactions, action.payload] };
    case 'REMOVE_TRANSACTION':
      return { ...state, transactions: state.transactions.filter(transaction => transaction.id !== action.payload) };
    case 'SET_MONTHLY_INCOME':
      return { ...state, monthlyIncome: action.payload };
    default:
      return state;
  }
}

// Create context
const StateContext = createContext();

// Provider component
export function StateProvider({ children }) {
  const [state, dispatch] = useReducer(stateReducer, initialState);

  return (
    <StateContext.Provider value={{ state, dispatch }}>
      {children}
    </StateContext.Provider>
  );
}

// Custom hook to use the state context
export function useStateContext() {
  return useContext(StateContext);
}
