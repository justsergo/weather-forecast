import styled from "styled-components";

const SearchPanelStyle = styled.div`
  display: flex;
  align-items: center;
  border: solid 2px;
  border-radius: 10px;
  margin: 10px auto;
  background-color: #d7faf899;

  button {
    margin: 10px;
    width: 70px;
    height: 55px;
    border-radius: 10px;
    background-color: #e8112fe0;
  }

  input {
    margin: 10px;
    height: 40px;
    width: 200px;
  }
`;

export default SearchPanelStyle;
