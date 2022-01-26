import LogoItem from "../../Assets/Logo.png"
import { Div } from "./Logo"
import {Link} from "react-router-dom"
const Logo = ()  => {
    return (
        <Div>
            <Link to={"/"}>
        <img src={LogoItem} alt="Logo"></img>

            </Link>

        </Div>
    )
}


export default Logo
