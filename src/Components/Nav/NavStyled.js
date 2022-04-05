import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Row = styled.div`
  width: 100%;
  padding: 20px 0px;
`;

export const Div = styled.div`
  width: 70%;
  margin: 0 auto;
  & ul {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: black;
    -ms-overflow-style: none; /* Edge, Internet Explorer */
    scrollbar-width: none; /* Firefox */
    overflow-y: scroll;

    &:: -webkit-scrollbar {
      display: none; /* Chrome, Safari, Opera */
    }
    & li {
      padding: 0 10px;
    }
    @media only screen and (max-width: 420px) {
      overflow: scroll;
    }
  }
  @media only screen and (max-width: 420px) {
    width: 100%;
  }
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: ${(props) => {
    return props.style
      ? (isActive) => (isActive ? "underline" : "none")
      : "none";
  }};
  display: flex;
  align-items: center;
  flex-direction: column;
  &:hover {
    color: red;
  }
  &[aria-current] {
    color: red;
  }
  &[aria-current]:after {
    content: "";
    background: red;
    width: 70%;
    height: 2px;
    margin: 3px 0 auto;
  }
`;
