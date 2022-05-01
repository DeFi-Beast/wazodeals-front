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
                {/* Join our Referral contest to be among the 5 luckiest winners with a Grand prize of #15,000 naira */}
                Your #1 place for anything discounts
                </h2>
                <p className={Classes.Content}>
                {/* Earn additional 25 points upon signup, Refer &amp; earn 12.5 points per referral */}
                </p>
                <Button as="a" href="/signup" >SIGN UP NOW</Button>
            </Div>
            <Div className="banner">
                <img src={BannerItem} alt="Banner"></img>
            </Div>
        </Row>
    </div>
}


export default Banner
