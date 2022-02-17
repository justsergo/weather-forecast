import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  FETCH_WEATHER_REQUEST,
  SET_WEATHER_CURRENT_CITY,
} from "../constants/weather";
import SearchPanelStyle from "../styledComponents/SearchPanleStyled";
import Wrapper from "../styledComponents/wrapper";
import CustomButton from "../styledComponents/CustomButton";

const SearchPanel = () => {
  const [cityName, setCityName] = React.useState("minsk");
  const [handleButton, setHandleButton] = React.useState(false);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const weather = useSelector((state) => state.weather);
  const currentCity = useSelector((state) => state.weather.currentCity);

  const textInput = (event) => {
    const text = event.target.value;
    setCityName(text);
    if (text === "") {
      setHandleButton(true);
    } else if (text === currentCity) {
      setHandleButton(true);
    } else {
      setHandleButton(false);
    }
  };

  const takeWeather = () => {
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
    navigate(`/${cityName}`);
    if (handleButton) {
      return;
    }
  };

  return (
    <Wrapper bcolor="#e9ecef;" width="100%" height="170px">
      <SearchPanelStyle>
        <input type="text" placeholder="Введите город" onInput={textInput} />
        <CustomButton onClick={takeWeather} noActive={handleButton}>
          Показать погоду
        </CustomButton>
      </SearchPanelStyle>
    </Wrapper>
  );
};

export default SearchPanel;
