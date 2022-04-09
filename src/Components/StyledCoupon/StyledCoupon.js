import styled from "styled-components";

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
//   min-width: ${(props) => (props.type === "deals" ? "0px" : "160px")};
  box-shadow: 3px 3px 6px #00000029;
  border-radius: 0px 0px 5px 5px;
  height:100%;


  & div.StyledImgWrapper {
    max-width: 100%;
    position: relative;
  

    &::after {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        to right,
        rgba(0, 0, 0, 0),
        rgba(0, 0, 0, 0.4),
        rgba(0, 0, 0, 0.8)
      );
      z-index: 1;
    }
  }
`;
export const Div = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 10px;
  flex-grow: 1;
  justify-content: space-between;
  position: relative;
`;
