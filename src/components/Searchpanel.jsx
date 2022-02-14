import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  FETCH_WEATHER_REQUEST,
  SET_WEATHER_CURRENT_CITY,
} from "../constants/weather";
import SearchPanelStyle from "../styledComponents/SearchPanleStyled";

const SearchPanel = () => {
  const [cityName, setCityName] = React.useState("минск");

  const dispatch = useDispatch();
  const weather = useSelector((state) => state.weather);

  const textInput = (event) => {
    const text = event.target.value;
    setCityName(text);
  };

  const handleOnClick = () => {
    if (weather.data[cityName]) {
      dispatch({
        type: SET_WEATHER_CURRENT_CITY,
        payload: { cityName },
      });
    } else {
      dispatch({
        type: FETCH_WEATHER_REQUEST,
        payload: { cityName },
      });
    }
  };

  return (
    <SearchPanelStyle>
      <input type="text" placeholder="Введите город" onInput={textInput} />
      <button onClick={handleOnClick}>Показать погоду</button>
    </SearchPanelStyle>
  );
};

export default SearchPanel;
