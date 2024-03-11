import { take, call, put, select } from "redux-saga/effects";
import { budjetActions } from "../store/budjet";
import axios from "axios";
export function* addData() {
  while (true) {
    const { payload } = yield take("budjet/addEntries");
    const { totalIncome, totalExpense } = yield select((state) => state.budjet);

    const result = yield call(
      axios.post,
      "http://localhost:3000/entries",
      payload
    );
    const result2 = yield call(axios.put, "http://localhost:3000/total", {
      Expense: totalExpense,
      Income: totalIncome,
    });
    console.log(result2);
  }
}
