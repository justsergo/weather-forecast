import { useSelector } from "react-redux";
import Item from "../styledComponents/Item";
import UlStyled from "../styledComponents/UlStyled";
import { Link } from "react-router-dom";
import dayjs from "dayjs";

export const ItemWeather = (item) => {
  const dataCurrentCity = useSelector((state) => state.weather.currentCity);
  const dataWeather = useSelector((state) =>
    state.weather.data[dataCurrentCity]?.list.slice(0, 5)
  );
  console.log(dataWeather);

  const CardsWeather = ({ item }) => {
    return (
      <Item aitems="center">
        <p>{dayjs(item.dt_txt).format("ddd, MMM D, h:mm A")}</p>
        <i className={`owf owf-${item.weather[0].id}  owf-5x `}></i>
        <p>Температура {item.main.temp} °C</p>
        <p>Ощущается как {item.main.feels_like} °C</p>
        <Link to={`/info/${item.dt}`}>Подробно</Link>
      </Item>
    );
  };

  return (
    <UlStyled>
      {dataWeather?.map((item) => {
        return <CardsWeather item={item} key={item.dt} />;
      })}
    </UlStyled>
  );
};
