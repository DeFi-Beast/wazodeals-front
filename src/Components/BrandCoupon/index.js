
import { BrandCoupon, Div, Span } from "./BrandCoupon";
import Classes from "../../Styles/Coupon.module.css";
import CouponLogo from "../../Assets/coupongenesis.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStopwatch } from "@fortawesome/free-solid-svg-icons";

const Coupon = (props) => {
  return (
    <>
      <BrandCoupon>
        <div className={Classes.CouponImg}>
          <img src={CouponLogo} alt="coupon"></img>
        </div>
        <Div>
            <div>
                <h3>CODE</h3>  
                <p>25% OFF $200 min. on purchases</p> 
            </div>     
            <div>
                <div>
                    <FontAwesomeIcon icon={faStopwatch}></FontAwesomeIcon>
                    <Span>01:45:09</Span>
                </div>
                <p className={Classes.bold}>109 uses today</p>
            </div>     
        </Div>
      </BrandCoupon>
    </>
  );
};

export default Coupon;
