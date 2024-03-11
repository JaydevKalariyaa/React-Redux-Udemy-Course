import { take, call, put, select } from "redux-saga/effects";

import axios from "axios";

export function* deleteData() {
  while (true) {
    const { payload } = yield take("budjet/removeEntries");
    console.log(payload);
    const result = yield call(
      axios.delete,
      `http://localhost:3000/entries/${payload.id}`
    );
    const { totalIncome, totalExpense } = yield select((state) => state.budjet);

    const result2 = yield call(axios.put, "http://localhost:3000/total", {
      Expense: totalExpense,
      Income: totalIncome,
    });
    console.log(result2);
  }
}
