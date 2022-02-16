import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  FETCH_WEATHER_REQUEST,
  SET_WEATHER_CURRENT_CITY,
} from "../constants/weather";
import SearchPanelStyle from "../styledComponents/SearchPanleStyled";
import Wrapper from "../styledComponents/wrapper";
import ButtonStyled from "../styledComponents/ButtonStyled";

const SearchPanel = () => {
  const [cityName, setCityName] = React.useState("минск");
  const [handleButton, setHandleButton] = React.useState(["#e8112fe0", false]);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const weather = useSelector((state) => state.weather);
  const currentCity = useSelector((state) => state.weather.currentCity);

  const textInput = (event) => {
    const text = event.target.value;
    setCityName(text);
    if (text === "") {
      setHandleButton(["#00020c8c", true]);
    } else if (text === currentCity) {
      setHandleButton(["#00020c8c", true]);
    } else {
      setHandleButton(["#e8112fe0", false]);
    }
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
    navigate(`/${cityName}`);
  };

  return (
    <Wrapper bcolor="#e9ecef;" width="100%" height="170px">
      <SearchPanelStyle>
        <input type="text" placeholder="Введите город" onInput={textInput} />
        <ButtonStyled
          bcolor={handleButton[0]}
          onClick={handleOnClick}
          disabled={handleButton[1]}
        >
          Показать погоду
        </ButtonStyled>
      </SearchPanelStyle>
    </Wrapper>
  );
};

export default SearchPanel;
