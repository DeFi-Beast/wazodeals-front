import { Row, Div } from "./BannerRow";
import Classes from "../../../Styles/banner.module.css";
import BannerItem from "../../../Assets/banner.png";
import { Button } from "../../Button";

const Banner = () => {
  return (
    <div className="Row">
      <Row>
        <Div>
          <h2>Your #1 place for anything discounts</h2>
          <p className={Classes.Content}></p>
          <Button as="a" href="/signup">
            SIGN UP NOW
          </Button>
        </Div>
        <Div className="banner">
          <img src={BannerItem} alt="Banner"></img>
        </Div>
      </Row>
    </div>
  );
};

export default Banner;
