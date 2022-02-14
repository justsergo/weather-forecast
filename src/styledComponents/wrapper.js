import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction || "column"};
  justify-content: ${(props) => props.jcontent || "center"};
  align-items: ${(props) => props.aitems || "normal"};
  flex-wrap: ${(props) => props.wrap || "nowrap"};
  align-content: ${(props) => props.acontent || "normal"};
`;

export default Wrapper;
