import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];
import budjetReducer from "./budjet";
import Root from "../saga";
const store = configureStore({
  reducer: { budjet: budjetReducer },
  middleware: () => middlewares,
});

sagaMiddleware.run(Root);

export default store;
