import {Row, Div} from "./BannerRow"
import Classes from "../../../Styles/banner.module.css"
import BannerItem from "../../../Assets/banner.png"
import {Button} from "../../Button"

const Banner = ()  => {
    return <div className="Row">
        <Row>
            <Div>
                <h2>
                SHOP AT HIGH DISCOUNT RATES &amp; EARN POINTS
                </h2>
                <p className={Classes.Content}>
                Register in less than a minute &amp; enjoy unlimited discounts
                </p>
                <Button >Get Started</Button>
            </Div>
            <Div className="banner">
                <img src={BannerItem} alt="Banner"></img>
            </Div>
        </Row>
    </div>
}


export default Banner
