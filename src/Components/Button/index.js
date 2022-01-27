import styled from "styled-components";

export const Button = styled.button`
  cursor: pointer;
  text-decoration: none;
  color: ${(props) => (props.bg === "white" ? "#AE00BB" : "white")};
  background-color: ${(props) => (props.bg === "white" ? "white" : "#AE00BB")};
  padding: ${(props) => (props.bg === "white" ? "7px 20px" : "10px 30px")};
  border-radius: 6px;
  text-align: center;
  border: none;
    white-space:nowrap;
  &:hover {
    border: ${(props) =>
      props.bg === "white" ? "1px solid white" : "1px solid #AE00BB"};
    background-color: ${(props) =>
      props.bg === "white" ? "#AE00BB" : "white"};
    color: ${(props) => (props.bg === "white" ? "white" : "#AE00BB")};
    padding: ${(props) => (props.bg === "white" ? "7px 20px" : "10px 30px")};
  }
`;
export const OrderBtn = styled.button`
  cursor: pointer;
  text-decoration: none;
  color: #ae00bb;
  background-color: transparent;
  padding: 5px auto;
  width: 90%;
  text-align: center;
  border-radius: 6px;
  text-align: center;
  margin-top:16px;
  border: 1px solid #ae00bb;
  display:block;

  &:hover {
    background: #ae00bb;
    color: white;
  }
`;
