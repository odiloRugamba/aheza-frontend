import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from 'redux-saga'
import RootReducer from "./reducers";
import * as sagas from "./saga";

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(RootReducer, applyMiddleware(sagaMiddleware));

for (let saga in sagas) {
 sagaMiddleware.run(sagas[saga]);
}

