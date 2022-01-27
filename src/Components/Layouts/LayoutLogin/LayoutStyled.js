import styled from "styled-components";
import background from "../../../Assets/women.png";

export const Div = styled.div`
  background-image: linear-gradient(
      to right,
      rgba(176, 0, 185, 0.6) -26.48%,
      rgba(0, 0, 0, 0.6) 73.52%
    ),
    url(${background});
  height: 100vh;

  font-size: 50px;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;



  @media(max-width:750px) {
    display:none
  }
  @media(min-width:1000px) {
    min-width: 60%;
  }

  & h3 {
    color: white;
    font-size: 2rem;
    width: 60%;
    text-align: center;
  }
`;
