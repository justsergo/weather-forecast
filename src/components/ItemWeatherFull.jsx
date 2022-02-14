import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import UlStyled from "../styledComponents/UlStyled";
import Item from "../styledComponents/Item";

export const ItemWeatherFull = () => {
  const dataCurrentCity = useSelector((state) => state.weather.currentCity);
  const dataWeather = useSelector((state) =>
    state.weather.data[dataCurrentCity]?.list.slice(0, 5)
  );

  const CardsFullWeather = (props) => {
    return (
      <Item aitems="center">
        <p>Температура максимум: {props.value.main.temp_max}°C</p>
        <p>Температура минимум: {props.value.main.temp_min}°C</p>
        <p>Температура: {props.value.main.temp}°C</p>
        <p>Ощущается как: {props.value.main.feels_like}°C</p>
        <p>Атмосферное давление:{props.value.main.pressure} Па</p>
        <p>Скорость ветра:{props.value.wind.speed} м/с</p>
        <p>Облачность {props.value.clouds.all}%</p>
      </Item>
    );
  };
  return (
    <>
      <Link to="/">На главную</Link>
      <UlStyled>
        {dataWeather?.map((item) => {
          return <CardsFullWeather value={item} key={item.dt} />;
        })}
      </UlStyled>
    </>
  );
};
