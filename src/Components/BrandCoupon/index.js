
import { BrandCoupon, Div, Span } from "./BrandCoupon";
import Classes from "../../Styles/Coupon.module.css";
import CouponLogo from "../../Assets/coupongenesis.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStopwatch } from "@fortawesome/free-solid-svg-icons";
import { useRef, useState, useEffect } from 'react';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import {Grid} from "@material-ui/core"
import { useDispatch } from "react-redux";
import { updateClick } from "../../actions/coupon"
import { useSelector } from "react-redux";
import "./styles.css"
const Coupon = ({coupon}) => {
  const ref = useRef();
  const [click, setClick] = useState(false)
  const user = JSON.parse(localStorage.getItem('profile'))
  const allCoupons = JSON.parse(localStorage.getItem('coupons'))
  const {coupons} = useSelector(state => state.coupons)
const [counter, setCounter] = useState(Math.abs((new Date(coupon?.endDate).getTime() - new Date().getTime())/1000));
const dispatch = useDispatch()
// console.log(Math.abs((new Date(coupon?.endDate).getTime() - new Date().getTime())/1000))
// console.log(new Date().getTime())

  // Prepend `0` for one digit numbers. For that the number has to be
// converted to string, as numbers don't have length method
const padTime = time => {
  return String(time).length === 1 ? `0${time}` : `${time}`;
};

const format = time => {
  // calculate (and subtract) whole days
var days = Math.floor(time / 86400);
time -= days * 86400;

// calculate (and subtract) whole hours
var hours = Math.floor(time / 3600) % 24;
time -= hours * 3600;

// calculate (and subtract) whole minutes
var minutes = Math.floor(time / 60) % 60;
time -= minutes * 60;

// what's left is seconds
var seconds = Math.floor(time % 60); 

  //Return combined values as string in format mm:ss
  return `${hours}:${minutes}:${padTime(seconds)}`;
};
const formatDays = time => {
  // calculate (and subtract) whole days
var days = Math.floor(time / 86400);
time -= days * 86400;





  //Return combined values as string in format mm:ss
  return `${days} Days`;
};

  useEffect(() => {
    let timer;
    if (counter > 0) {
      timer = setTimeout(() => setCounter(c => c - 1), 1000);
    }

    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [counter]);

const userData = {
  email:user?.user?.email,
  id:user?.user?._id
}

  const handleClick = (id) => {
    console.log( ref)
    setClick(!click)
    navigator.clipboard.writeText(
      `${coupon?.code}`
    );
    console.log(id)
    console.log(user?.user?._id)
   
    const check = coupons?.coupons?.filter(coupon => coupon._id === id)
    console.log( check[0]?.clicks)

      const boolCheck = check[0]?.clicks?.some(usernew => (usernew?.userId === user?.user?._id) )
      console.log(boolCheck)

      console.log( user?.user?._id)
      if(boolCheck){
        console.log("present")
        return
      } else {
        console.log("absent")

        dispatch({type:"UPDATE_CLICK", payload:{id,userData} })
        dispatch(updateClick(id,userData ))
  
      }
    
    console.log(check)
    
    // if(check)
  }
  return (
    <Flippy
    flipOnHover={true} // default false
    flipOnClick={true} // default false
    flipDirection="horizontal" // horizontal or vertical
    ref={ref} // to use toggle method like ref.curret.toggle()
    // if you pass isFlipped prop component will be controlled component.
    // and other props, which will go to div
    className='coupon-container' /// these are optional style, it is not necessary
>
  <FrontSide  >
  <>
      <BrandCoupon>
        <div className={Classes.CouponImg}>
          <img src={CouponLogo} alt="coupon"></img>
        </div>
        <Div>
            <div>
                <h3>CODE</h3>  
                <p>{coupon?.discount}% OFF NGN {coupon?.price} min. on purchases</p> 
            </div>     
            <div>
                  <Span style={{paddingLeft:"0"}}>{counter === 0 ? "0" : <> ends in {formatDays(counter)}</>}</Span>

                <div>
                    <FontAwesomeIcon icon={faStopwatch}></FontAwesomeIcon>
                    <Span>{counter === 0 ? "Time over" : <>{format(counter)}</> }</Span>
                   
                </div>
                <p className={Classes.bold}>{allCoupons?.coupons?.filter(coup => coup?._id === coupon._id)[0]?.clicks?.length} clicks so far</p>
            </div>     
        </Div>
        <div style={{position:"absolute", top:"0", left:"0", background:"white", padding:'10px', borderRadius:"50%"}}><p>{coupon?.discount}% OFF</p></div>
      </BrandCoupon>
    </>
  
  </FrontSide>
  <BackSide style={{ backgroundColor: '#000000', display:"flex", textAlign:"center"}}>
    {user? 
    <Grid container justifyContent='center' alignItems='center' className="coupon-back module">
      {click ?<Grid className='coupon-reveal' onClick={() => handleClick(coupon?._id)}>{coupon?.code}</Grid>  :  <h2 class="stripe-3" onClick={() => handleClick(coupon?._id)}>Click to Copy &amp; Reveal</h2>}
      
      <Grid>{coupon?.code}</Grid>
    </Grid> : <Grid container direction='column' justifyContent='center' alignItems='center' className="coupon-back module">
    
      <h2 class="stripe-3">Login to Reveal Code</h2>
      <Grid><div className='coupon-hide'></div></Grid>
    </Grid>}
  </BackSide>
</Flippy>
  
  );
};

export default Coupon;
