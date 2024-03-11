import { take, call, select } from "redux-saga/effects";

import axios from "axios";
export function* updateData() {
  while (true) {
    const { payload } = yield take("budjet/updateEntries");
    console.log("hello");
    console.log(payload.updatedEntry);
    const result = yield call(
      axios.patch,
      `http://localhost:3000/entries/${payload.id}`,
      payload.updatedEntry
    );
    const { totalIncome, totalExpense } = yield select((state) => state.budjet);

    const result2 = yield call(axios.put, "http://localhost:3000/total", {
      Expense: totalExpense,
      Income: totalIncome,
    });
    console.log(result);
  }
}
