import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction || "column"};
  justify-content: ${(props) => props.jcontent || "center"};
  align-items: ${(props) => props.aitems || "normal"};
  flex-wrap: ${(props) => props.wrap || "nowrap"};
  align-content: ${(props) => props.acontent || "normal"};
  background-color: ${(props) => props.bcolor || ""};
  width: ${(props) => props.width || ""};
  height: ${(props) => props.height || ""};
`;

export default Wrapper;
