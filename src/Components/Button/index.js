import styled from "styled-components";

export const Button = styled.button`
  cursor: pointer;
  text-decoration: none;
  color: ${(props) => (props.bg === "white" ? "red" : "white")};
  background-color: ${(props) => (props.bg === "white" ? "white" : "red")};
  padding: ${(props) => (props.bg === "white" ? "7px 20px" : "10px 30px")};
  border-radius: 6px;
  text-align: center;
  border: none;
    white-space:nowrap;
    margin-left: ${(props) => (props.log === "logout" ? "20px" : "0")};

  &:hover {
    border: ${(props) =>
      props.bg === "white" ? "1px solid white" : "1px solid red"};
    background-color: ${(props) =>
      props.bg === "white" ? "red" : "white"};
    color: ${(props) => (props.bg === "white" ? "white" : "red")};
    padding: ${(props) => (props.bg === "white" ? "7px 20px" : "10px 30px")};
  }
`;
export const OrderBtn = styled.button`
  cursor: pointer;
  text-decoration: none;
  color: red;
  background-color: transparent;
  padding: 5px auto;
  width: 90%;
  text-align: center;
  border-radius: 6px;
  text-align: center;
  margin-top:16px;
  border: 1px solid red;
  display:block;

  &:hover {
    background: red;
    color: white;
  }
`;
