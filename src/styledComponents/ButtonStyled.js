import styled from "styled-components";

const ButtonStyled = styled.button`
  margin: 10px;
  width: 70px;
  height: 55px;
  border-radius: 10px;
  background-color: ${(props) => props.bcolor};
`;

export default ButtonStyled;
