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
import { logout } from "../../App/authSlice";

const NavBar = () => {
  const { isLoggedIn, userId } = useSelector((state) => state.authSliceReducer);
  const dispatch = useDispatch()

  const handleLogout = (e) => {
    e.preventDefault();

  
    // localStorage.setItem("userId", " ")
    // localStorage.setItem("email", " ")
    // localStorage.setItem("token", " ")
    // return new Promise((resolve, reject) => {
    //   const config = {
    //     headers: {
    //       'Content-Type': 'application/json;charset=UTF-8',
    //       "Access-Control-Allow-Origin": "*",
    //       Authorization: `Bearer ${localStorage.getItem("token")}`,
    //     },
    //   };
    //   axios
    //     .get(`${BaseURL}/logout`, config)
    //     .then(res => 
    //       resolve(res.data), 
    //       dispatch(logout()),

    //       // console.log(resolve(res.data)),
    //       err => reject(err))
    // });

      const config = {
        headers: {
          'Content-Type': 'application/json;charset=UTF-8',
          "Access-Control-Allow-Origin": "*",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      };

    axios.get(`${BaseURL}/logout`, config)
      .then((response) => {
        const result = response.data;
        console.log(result);

        if (result.success) {
          dispatch(logout())
           
        }
      })

      .catch((errors) => {
        // react on errors.
        console.error(errors);
      });
  };

  return (
    <Row>
      <RowWrapper className="Row">
        <Logo>Hi</Logo>
        <Div>
          <StyledInput
            className="hide-input"
            placeholder="Try Searching.."
          ></StyledInput>
          {isLoggedIn ? (
            <div>
              <Link to={`/user/${userId}`}>
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
            <Button as="a" href="/login" bg="white">
              Login
            </Button>
          )}
        </Div>
      </RowWrapper>
    </Row>
  );
};

export default NavBar;
