import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Item from "../styledComponents/Item";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import { translation } from "../constants/translaterForItemWeatherFull";

const ItemWeatherFull = () => {
  const { id } = useParams();
  const dataCurrentCity = useSelector((state) => state.weather.currentCity);
  const dataWeather = useSelector((state) =>
    state.weather.data[dataCurrentCity]?.list.find(
      (item) => item.dt === Number(id)
    )
  );

  const accordions = (title, item) => {
    if (typeof item === "object") {
      return (
        <Accordion>
          <AccordionSummary>{translation[title]}</AccordionSummary>
          <AccordionDetails>
            {Object.keys(item).map((key) => accordions(key, item[key]))}
          </AccordionDetails>
        </Accordion>
      );
    }
    if (Array.isArray(item)) {
      return item.map((elem, key) => {
        return accordions(key, elem);
      });
    }

    /* default:
        return title; */
    return (
      <Accordion>
        <AccordionSummary>{translation[title]}</AccordionSummary>
        <AccordionDetails> {item} </AccordionDetails>
      </Accordion>
    );
  };

  const CardsFullWeather = ({ value }) => {
    return <Item aitems="center">{accordions("Weather", value)}</Item>;
  };
  return (
    <>
      <Link to="/">На главную</Link>
      <CardsFullWeather value={dataWeather} />
    </>
  );
};

export default ItemWeatherFull;
