import { createSlice } from '@reduxjs/toolkit';
export const CATEGORIES = ['housing', 'food', 'transportation', 'utilities', 'clothing', 'healthcare', 'personal', 'education', 'entertainment'];
const initialState = Object.fromEntries(CATEGORIES.map(category => [category, []]))


const transactionsSlice = createSlice({
  name: 'transactions',// slice name here,
  initialState: initialState,// initial state here,
  reducers: {
    addTransaction: (state, action) => {
      state[action.payload.category].push(action.payload);
      return state;
    },
    deleteTransaction: (state, action) => {
      const id = action.payload.id;
      const category = action.payload.category;
      // It should delete the old transaction (action.payload) from the correct category’s transaction list in the transactions state object.
      // 1. Find the category in `state` that matches the `category` property on `action.payload`
      // 2.  Filter out the old transaction (the transaction with an `id` matching the `id` property on `action.payload`) from that category's transaction array.
      state[category] = state[category].filter(transaction => transaction.id !== id)
    }
  } 
})

export const selectTransactions = (state) => state.transactions;
export const selectFlattenedTransactions = (state) => Object.values(state.transactions).reduce((a,b) => [...a, ...b], []);
export const { addTransaction, deleteTransaction } = transactionsSlice.actions;
export default transactionsSlice.reducer;