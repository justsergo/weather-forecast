import { applyMiddleware, combineReducers, createStore } from "redux";
import createSagaMiddleWare from "redux-saga";
import { axiosWeatherWatcher } from "../saga/dataResponseSaga";
import { dataWeatherReducer } from "./dataWeatherReducer";

const sagaMiddleWare = createSagaMiddleWare();

const rootReducer = combineReducers({ weather: dataWeatherReducer });

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleWare));

sagaMiddleWare.run(axiosWeatherWatcher);
