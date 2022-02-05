import {Row, Div, StyledNavLink} from "./NavStyled"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDumbbell, faFemale, faHome, faPallet, faPlaneDeparture, faShoppingCart, faUtensils, } from '@fortawesome/free-solid-svg-icons'

const Nav = ()  => {
    return (
    <Row>
        <Div>
            <ul>
        {/* <li>
            <StyledNavLink to="/food">
            <FontAwesomeIcon icon={faUtensils} />
            <p>Food</p>
            </StyledNavLink>
        </li>
        <li>
            <StyledNavLink to="/beauty">
            <FontAwesomeIcon icon={faPallet} />
            <p>Beauty</p>
            </StyledNavLink>
        </li>
        <li>
            <StyledNavLink to="/stores">
            <FontAwesomeIcon icon={faShoppingCart} />
            <p>Stores</p>
            </StyledNavLink>
        </li> */}
        <li>
            <StyledNavLink to="/">
            <FontAwesomeIcon icon={faHome} />
            <p>Home</p>
            </StyledNavLink>
        </li>
        {/* <li>
            <StyledNavLink to="/fashion">
            <FontAwesomeIcon icon={faFemale} />
            <p>Fashion</p>
            </StyledNavLink>
        </li>
        <li>
            <StyledNavLink to="/travel">
            <FontAwesomeIcon icon={faPlaneDeparture} />
            <p>Travel</p>
            </StyledNavLink>
        </li>
        <li>
            <StyledNavLink to="/lifestyle">
            <FontAwesomeIcon icon={faDumbbell} />
            <p>LifeStyle</p>
            </StyledNavLink>
        </li> */}
            </ul>
        </Div>
    </Row>
    )
}


export default Nav
