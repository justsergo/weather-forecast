import { put, takeEvery, call } from "redux-saga/effects";
import weatherRequest from "../services/weatherResponse";
import {
  FETCH_WEATHER_REQUEST,
  FETCH_WEATHER_SUCCESS,
  FETCH_WEATHER_FAILURE,
} from "../constants/weather";

function* axiosWeatherWorker(action) {
  try {
    const weather = yield call(weatherRequest, action.payload.cityName);
    yield put({
      type: FETCH_WEATHER_SUCCESS,
      payload: {
        weather,
        currentCity: action.payload.cityName,
      },
    });
  } catch (error) {
    yield put({ type: FETCH_WEATHER_FAILURE, error });
  }
}

export function* axiosWeatherWatcher() {
  yield takeEvery(FETCH_WEATHER_REQUEST, axiosWeatherWorker);
}
