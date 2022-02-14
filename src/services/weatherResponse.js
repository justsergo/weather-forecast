import axios from "axios";

const weatherRequest = async (cityName = "London") => {
  const weatherURL = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${process.env.REACT_APP_API_KEY}&units=metric  `;
  const response = await axios.get(weatherURL);
  return response.data;
};

export default weatherRequest;
