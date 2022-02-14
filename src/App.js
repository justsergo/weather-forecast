import SearchPanel from "./components/Searchpanel";
import { TextInfoPosition } from "./components/CityName";
import { ItemWeather } from "./components/ItemWeather";
import Wrapper from "./styledComponents/wrapper";

function App() {
  return (
    <Wrapper aitems={"center"}>
      <SearchPanel />
      <TextInfoPosition />
      <ItemWeather />
    </Wrapper>
  );
}

export default App;
