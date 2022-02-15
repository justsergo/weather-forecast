import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Item from "../styledComponents/Item";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";

export const ItemWeatherFull = () => {
  const { id } = useParams();
  const dataCurrentCity = useSelector((state) => state.weather.currentCity);
  const dataWeather = useSelector((state) =>
    state.weather.data[dataCurrentCity]?.list.find(
      (item) => item.dt === Number(id)
    )
  );

  console.log(dataWeather);

  const accordions = (title, item) => {
    switch (item) {
      case typeof item === "object":
        return (
          <Accordion>
            {" "}
            <AccordionSummary> {title} </AccordionSummary>{" "}
            <AccordionDetails> {accordions(title, item)} </AccordionDetails>{" "}
          </Accordion>
        );
      case Array.isArray(item):
        return item.map((elem, key) => {
          return accordions(key, elem);
        });
      default:
        return (
          <Accordion>
            {" "}
            <AccordionSummary> {title} </AccordionSummary>{" "}
            <AccordionDetails> {item} </AccordionDetails>{" "}
          </Accordion>
        );
    }
  };

  const CardsFullWeather = ({ value }) => {
    return (
      <Item aitems="center">
        {/* <p>Температура максимум: {value.main.temp_max}°C</p>
        <p>Температура минимум: {value.main.temp_min}°C</p>
        <p>Температура: {value.main.temp}°C</p>
        <p>Ощущается как: {value.main.feels_like}°C</p>
        <p>Атмосферное давление:{value.main.pressure} Па</p>
        <p>Скорость ветра:{value.wind.speed} м/с</p>
        <p>Облачность {value.clouds.all}%</p>
         */}
        {accordions("Weather", value)}
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
