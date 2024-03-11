import { take, call, put } from "redux-saga/effects";
import { budjetActions } from "../store/budjet";
import axios from "axios";
export function* getData() {
  while (true) {
    yield take("budjet/replaceEntries");

    const result = yield call(axios, "http://localhost:3000/entries");

    const total = yield call(axios, "http://localhost:3000/total");

    // const income = yield call(axios, "http://localhost:3000/totalIncome");
    console.log(total);
    yield put(
      budjetActions.replaceEntries({
        entries: result.data || [],
        totalExpense: total.data.Expense || 0,
        totalIncome: total.data.Income || 0,
      })
    );
  }
}
