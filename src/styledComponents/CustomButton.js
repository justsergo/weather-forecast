import styled from "styled-components";

const CustomButton = styled.button`
  margin: 10px;
  width: 70px;
  height: 55px;
  border-radius: 10px;
  background-color: ${(props) => (props.noActive ? "#00020c8c" : "#e8112fe0")};
  pointer-events: ${(props) => (props.noActive ? "none" : "auto")};
`;

export default CustomButton;
