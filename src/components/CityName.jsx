import { useSelector } from "react-redux";
import CityNameStyled from "../styledComponents/CityNameStyled";

const CityName = () => {
  const dataCurrentCity = useSelector((state) => state.weather.currentCity);
  const dataWeather = useSelector(
    (state) => state.weather.data[dataCurrentCity]?.city
  );
  console.log(dataWeather);
  return (
    <CityNameStyled>
      <p>Город:{dataWeather?.name}</p>
      <p>Население:{dataWeather?.population} человек</p>
    </CityNameStyled>
  );
};

export default CityName;
