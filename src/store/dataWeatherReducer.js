import {
  FETCH_WEATHER_FAILURE,
  FETCH_WEATHER_SUCCESS,
  SET_WEATHER_CURRENT_CITY,
} from "../constants/weather";

const defaultState = {
  currentCity: "",
  data: {
    key:{
    a:{
      b:[1,2,3,4]
    },
    b:2,
    c:3
  }
},
  error: {},
};


export const dataWeatherReducer = (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_WEATHER_SUCCESS:
      return {
        data: {
          ...state.data,
          [action.payload.currentCity]: action.payload.weather,
        },
        currentCity: action.payload.currentCity,
      };
    case SET_WEATHER_CURRENT_CITY:
      return { ...state, currentCity: action.payload.cityName };
    case FETCH_WEATHER_FAILURE:
      return { ...state, error: action.error };
    default: 
      return state;
  }
};
