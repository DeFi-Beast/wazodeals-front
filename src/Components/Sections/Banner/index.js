import {Row, Div} from "./BannerRow"
import Classes from "../../../Styles/banner.module.css"
import BannerItem from "../../../Assets/banner.png"
import {Button} from "../../Button"
import { Link } from "react-router-dom"

const Banner = ()  => {
    return <div className="Row">
        <Row>
            <Div>
                <h2>
                SIGN UP NOW &amp; EARN 1000 POINTS
                </h2>
                <p className={Classes.Content}>
                Refer &amp; earn 500 points per referral
                </p>
                <Button as="a" href="/register" >SIGN UP NOW</Button>
            </Div>
            <Div className="banner">
                <img src={BannerItem} alt="Banner"></img>
            </Div>
        </Row>
    </div>
}


export default Banner
