import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { FETCH_WEATHER_REQUEST } from "../constants/weather";
import Item from "../styledComponents/Item";
import UlStyled from "../styledComponents/UlStyled";
import { Link, Route, Routes, useParams } from "react-router-dom";
import dayjs from "dayjs";
import ItemWeatherFull from "../components/ItemWeatherFull";

const ItemWeather = () => {
  const dispatch = useDispatch();
  const { city } = useParams();
  console.log(city);
  React.useEffect(() => {
    if (city) {
      dispatch({
        type: FETCH_WEATHER_REQUEST,
        payload: { cityName: city },
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const currentCity = useSelector((state) => state.weather.currentCity);
  const dataWeather = useSelector((state) =>
    state.weather.data[currentCity]?.list.slice(0, 5)
  );

  console.log(dataWeather);

  const CardsWeather = ({ item }) => {
    return (
      <Item aitems="center">
        <p>{dayjs(item.dt_txt).format("ddd, MMM D, h:mm A")}</p>
        <i className={`owf owf-${item.weather[0].id}  owf-5x `}></i>
        <p>Температура {item.main.temp} °C</p>
        <p>Ощущается как {item.main.feels_like} °C</p>
        <Link to={`/${currentCity}/${item.dt}`}>Подробно</Link>
      </Item>
    );
  };

  return (
    <Routes>
      <Route
        path="/"
        exact
        element={
          <UlStyled>
            {dataWeather?.map((item) => {
              return <CardsWeather item={item} key={item.dt} />;
            })}
          </UlStyled>
        }
      />
      <Route path="/:id" exact element={<ItemWeatherFull />} />
    </Routes>
  );
};

export default ItemWeather;
