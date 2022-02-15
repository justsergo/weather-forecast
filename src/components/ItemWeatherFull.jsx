import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import UlStyled from "../styledComponents/UlStyled";
import Item from "../styledComponents/Item";

export const ItemWeatherFull = () => {
  const { id } = useParams();
  const dataCurrentCity = useSelector((state) => state.weather.currentCity);
  const dataWeather = useSelector((state) =>
    state.weather.data[dataCurrentCity]?.list.find(
      (item) => item.dt === Number(id)
    )
  );

  console.log(dataWeather);

  const CardsFullWeather = ({ value }) => {
    return (
      <Item aitems="center">
        <p>Температура максимум: {value.main.temp_max}°C</p>
        <p>Температура минимум: {value.main.temp_min}°C</p>
        <p>Температура: {value.main.temp}°C</p>
        <p>Ощущается как: {value.main.feels_like}°C</p>
        <p>Атмосферное давление:{value.main.pressure} Па</p>
        <p>Скорость ветра:{value.wind.speed} м/с</p>
        <p>Облачность {value.clouds.all}%</p>
      </Item>
    );
  };
  return (
    <>
      <Link to="/">На главную</Link>
      <CardsFullWeather value={dataWeather} />
    </>
  );
};
