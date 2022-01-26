import styled from "styled-components";

export const StyledInput = styled.input`
  width: 45%;
  padding: 5px 20px;
  border: 0px;
  font-size: 12px;
  margin-bottom: 0px;

  @media only screen and(max-width:420px) {
    display: none;
    width:0;
    opacity:0
  }
  &:focus {
    outline: none;
    box-shadow: 0px 0px 2px red;
  };
  border-radius: 20px;
  background: transparent;
  border: 1px solid white;
  color: white;
  ::placeholder{
    text-align: center;
    color: rgba(255, 255, 255, 0.425);
  }
 
`;


