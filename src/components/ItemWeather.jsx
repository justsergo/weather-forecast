import { useSelector } from "react-redux";
import Item from "../styledComponents/Item";
import UlStyled from "../styledComponents/UlStyled";
import { Link } from "react-router-dom";



export const ItemWeather = (item) => {
  const dataCurrentCity = useSelector((state) => state.weather.currentCity);
  const dataWeather = useSelector((state) =>
    state.weather.data[dataCurrentCity]?.list.slice(0, 5)
  );
  console.log(dataWeather);

  const getWeekDay = (date) => {
    let days = [
      "Воскресенье",
      "Понедельник",
      "Вторник",
      "Среда",
      "Четверг",
      "Пятница",
      "Суббота",
    ];

    return days[date.getDay()];
  };

  let date = Date.now() // 3 января 2014 года


  

  /* 
  const weekdayName = new Date().toLocaleString("ru", { weekday: "long" });
    */

  const CardsWeather = (props) => {
    return (
      <Item aitems="center">
        <p>{date}</p>
        <i className={`owf owf-${props.value.weather[0].id }  owf-5x `}></i>
        <p>Температура {props.value.main.temp} °C</p>
        <p>Ощущается как {props.value.main.feels_like} °C</p>
        <Link to="/info">Подробно</Link>
      </Item>
    );
  };

  return (
    <UlStyled>
      {dataWeather?.map((item) => {
        return <CardsWeather value={item} key={item.dt} />;
      })}
    </UlStyled>
  );
};
