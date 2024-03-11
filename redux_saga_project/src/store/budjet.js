import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  entries: [],
  totalIncome: 0,
  totalExpense: 0,
  temp: false,
};

const budjetSlice = createSlice({
  name: "budjet",
  initialState,
  reducers: {
    replaceEntries(state, action) {
      state.entries = action.payload.entries || [];
      state.totalIncome = action.payload.totalIncome || 0;
      state.totalExpense = action.payload.totalExpense || 0;
      state.temp = false;
    },
    addEntries(state, action) {
      console.log(action);
      state.entries.unshift(action.payload);
      if (action.payload.isExpense)
        state.totalExpense += Number(action.payload.amount);
      else state.totalIncome += Number(action.payload.amount);

      state.temp = true;
    },
    removeEntries(state, action) {
      state.entries = state.entries.filter(
        (entry) => entry.id !== action.payload.id
      );
      if (action.payload.isExpense)
        state.totalExpense -= Number(action.payload.amount);
      else state.totalIncome -= Number(action.payload.amount);

      state.temp = true;
    },
    updateEntries(state, action) {
      let updatedEntryIndex = state.entries.findIndex(
        (entry) => entry.id === action.payload.id
      );
      let oldAmount = state.entries[updatedEntryIndex].amount;
      let oldisExpense = state.entries[updatedEntryIndex].isExpense;
      state.entries[updatedEntryIndex] = {
        ...state.entries[updatedEntryIndex],
        ...action.payload.updatedEntry,
      };
      if (action.payload.updatedEntry.isExpense && oldisExpense) {
        state.totalExpense =
          state.totalExpense +
          Number(action.payload.updatedEntry.amount) -
          Number(oldAmount);
      } else if (action.payload.updatedEntry.isExpense && !oldisExpense) {
        state.totalExpense =
          state.totalExpense + Number(action.payload.updatedEntry.amount);
        state.totalIncome -= Number(oldAmount);
      } else if (!action.payload.updatedEntry.isExpense && oldisExpense) {
        state.totalExpense -= Number(oldAmount);
        state.totalIncome += Number(action.payload.updatedEntry.amount);
      } else {
        state.totalIncome =
          state.totalIncome +
          Number(action.payload.updatedEntry.amount) -
          Number(oldAmount);
      }

      state.temp = true;
    },
  },
});

export default budjetSlice.reducer;
export const budjetActions = budjetSlice.actions;
