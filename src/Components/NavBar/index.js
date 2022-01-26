import {Button} from "../Button";
import {StyledInput} from "../Input";
import Logo from "../Logo";
import {Row, Div, RowWrapper} from "./NavBarStyled"

const NavBar = () => {
  return (
    <Row>
      <RowWrapper className="Row">
        <Logo>Hi</Logo>
        <Div>
          
            <StyledInput className="hide-input" placeholder="Try Searching.."></StyledInput>
        

           
            <Button as="a" href="/login" bg="white">Login</Button>
        </Div>
      </RowWrapper>
    </Row>
  );
};

export default NavBar;
