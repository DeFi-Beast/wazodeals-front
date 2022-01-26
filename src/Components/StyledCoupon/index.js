
import { StyledDiv, Div } from "./StyledCoupon";
import Classes from "../../Styles/Coupon.module.css"; 
import { OrderBtn } from "../Button";


const StyledCoupon = (props) => {

  
  return (
    <>
        
      <StyledDiv key={props.index}>
        <div className="StyledImgWrapper">
          <img src={props.coupon.cImg} alt="coupon"></img>
          <div className={Classes.CouponLogo}>
            <img src={props.coupon.cLogo} alt="couponLogo"></img>
          </div>
        </div>
        <Div>
            <div>
                <h3>{props.coupon.title}</h3>  
                <p>Up to <span className={Classes.bold}>{props.coupon.discount}</span> OFF fries</p> 
            </div>     
            <div style={{textAlign:"center"}}>
          <OrderBtn>Order</OrderBtn>
                
            </div>     
        </Div>
      </StyledDiv>
    </>
  );
};

export default StyledCoupon;
