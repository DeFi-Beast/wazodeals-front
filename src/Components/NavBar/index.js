import { Button } from "../Button";
import { StyledInput } from "../Input";
import Logo from "../Logo";
import { Row, Div, RowWrapper } from "./NavBarStyled";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserAlt } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import BaseURL from "../Helper";
import axios from "axios";
import { useDispatch } from "react-redux";
import { LOG_OUT } from "../../constants";


const NavBar = () => {
  const dispatch = useDispatch()

  const user = JSON.parse(localStorage.getItem("profile"))

  console.log(user)

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch({type:LOG_OUT})
    
  };

  return (
    <Row>
      <RowWrapper className="Row">
        <div className="ann-bar">
          <p style={{textAlign:"justify"}}>Site still in Beta Phase,Join our Referral contest for a grand prize of #15,000 naira and also every point earned is equivalent to #20 naira</p>
        </div>
        <Logo>Hi</Logo>
        <Div>
          <StyledInput
            className="hide-input"
            placeholder="Try Searching.."
          ></StyledInput>{user ?
         (
            <div>
              <Link to={`/user`}>
                <FontAwesomeIcon
                  style={{ color: "white" }}
                  icon={faUserAlt}
                ></FontAwesomeIcon>
              </Link>
              <Button
                as="a"
                href="/logout"
                bg="white"
                log="logout"
                onClick={handleLogout}
              >
                Logout
              </Button>
            </div>
          ) : (
            <Button as="a" href="/user/login" bg="white">
              Login
            </Button>
          )}
        </Div>
      </RowWrapper>
    </Row>
  );
};

export default NavBar;
