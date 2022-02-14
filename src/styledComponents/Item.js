import styled from "styled-components";

const Item = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction || "column"};
  justify-content: ${(props) => props.jcontent || "center"};
  align-items: ${(props) => props.aitems || "normal"};
  flex-wrap: ${(props) => props.wrap || "nowrap"};
  align-content: ${(props) => props.acontent || "normal"};
  box-sizing: border-box;
  border: solid 1px;
  border-radius: 20px;
  width: 200px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 1), -23px 0 20px -23px rgba(0, 0, 0, 0.8),
    23px 0 20px -23px rgba(0, 0, 0, 0.8), 0 0 40px rgba(0, 0, 0, 0.1) inset;
  background-color: #d7faf899;
  padding: 5px;
  margin: 20px;

  p {
    padding: 0;
    margin: 1px;
  }
  button {
    margin 10px;
  }
`;

export default Item;
