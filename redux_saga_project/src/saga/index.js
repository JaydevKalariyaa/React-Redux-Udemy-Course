import { spawn } from "redux-saga/effects";
import { addData } from "./addData";
import { deleteData } from "./deleteData";
import { getData } from "./getData";
import { updateData } from "./updateData";

export default function* rootSaga() {
  yield spawn(getData);
  yield spawn(addData);
  yield spawn(deleteData);
  yield spawn(updateData);
}
