
import { StyledDiv, Div } from "./StyledCoupon";
import Classes from "../../Styles/Coupon.module.css"; 
import { OrderBtn } from "../Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faStar } from "@fortawesome/free-solid-svg-icons";


const StyledCoupon = (props) => {

  
  return (
    <>
        
      <StyledDiv key={props.index}>
        <div className="StyledImgWrapper">
          <img src={props.coupon.cImg} alt="coupon"></img>
          {/* <div className={Classes.CouponLogo}>
            <img src={props.coupon.cLogo} alt="couponLogo"></img>
          </div> */}
        </div>
        <Div>
            <div>
                <h3>{props.coupon.title}</h3> 
                <div className={Classes.desc}>
                <p>{props.coupon.description}</p> 

                </div>
                <div className={Classes.PriceRow}>
                <p> <span className={`${Classes.bold} ${Classes.big}`}>{props.coupon.discount} %</span> Off</p> 
                  
                  <span className={Classes.strike}>{props.coupon.price}</span>
                  <p> <span className={Classes.bold}>{props.coupon.price - (`${props.coupon.discount}`*props.coupon.price)/100}</span> </p> 

                </div>
                <div  className={Classes.infoRow}>
                  <div>
                  <FontAwesomeIcon icon={faMapMarkerAlt}
                  >

                  </FontAwesomeIcon>
                  <span>{props.coupon.location}</span>
                  </div>
                  <div className={Classes.infoColored}>
                    <FontAwesomeIcon icon={faStar}>

                    </FontAwesomeIcon>
                  <span>{props.coupon.point} WP</span>

                  </div>
                  
                </div>
            </div>     
            <div style={{textAlign:"center"}}>
          <OrderBtn as="a" href="/login">Order</OrderBtn>
                
            </div>     
        </Div>
      </StyledDiv>
    </>
  );
};

export default StyledCoupon;
