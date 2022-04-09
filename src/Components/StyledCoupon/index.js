import {useEffect, useState} from "react"
import {useSelector, useDispatch} from "react-redux"
import { StyledDiv, Div } from "./StyledCoupon";
import Classes from "../../Styles/Coupon.module.css";
import { OrderBtn } from "../Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faStar } from "@fortawesome/free-solid-svg-icons";
import useStyles from "./styles";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { Link, useLocation } from "react-router-dom";



import {Grid, CardMedia, Button} from "@material-ui/core"

const StyledCoupon = ({discount, setCurrentId}) => {
  const dispatch = useDispatch()
   const classes = useStyles()
  const files = discount.selectedFiles.split("|")
  const {merchants} = useSelector(state => state.merchants)
  const merchant =  merchants?.merchant?.find(merchant => merchant?._id === discount?.merchant)
  const merchantArr = merchant?.address.split(",")
  const user = JSON.parse(localStorage.getItem("profile"))
  const [options, setOptions] = useState(false)
   
 const Location = useLocation()


 useEffect(() => {
   if(Location.pathname === "/deals/discounts") {
     setOptions(true)
   }
 
 }, [Location])
 
 const handleAddToCart = (discount) => {
  dispatch({type:'ADD_TO_CART', payload:discount})
}
  return (
   
    <Grid xs={10} sm={5} md={3} className={!options ? classes.gridContainer : classes.productContainer}>
      <StyledDiv >
        <div className="StyledImgWrapper">
         
          <CardMedia
          className={classes.media}
          image={
            files[0] ||
            "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"
          }
          height="194"
          title={discount.title}
          alt="hero image"
        />
        {user?.user?.role[0] === "merchant" &&  <div className={classes.overlay2} name="edit">
         
         <Button
           onClick={(e) => {
            
             e.stopPropagation();
             setCurrentId(discount._id);
           }}
           style={{ color: "white" }}
           size="small"
         >
           <MoreHorizIcon fontSize="medium" />
         </Button>
       </div> }
       
        </div>
        <Div className={options && classes.whiteBg}>
          <div>
            <h3>{discount?.title.length > 40 ? `${discount?.title.substring(0, 40)}....`: `${discount?.title}`}</h3>
           
            
          </div>
          {!options &&  <div>
          <div className={Classes.desc}>
              {/* <p>{discount?.description}</p> */}
              <p>
              {discount?.description.length > 40 ? `${discount?.description.substring(0, 40)} ....`: `${discount?.description}`}
              </p>
            </div>
          </div>}
         
          <div>
          <div className={Classes.PriceRow}>
              <p>
                {" "}
                <span className={`${Classes.bold} ${Classes.big}`}>
                  {discount.discount} %
                </span>{" "}
                Off
              </p>

              <span className={Classes.strike}>{discount.price}</span>
              <p>
                {" "}
                <span className={Classes.bold}>
                  {discount.price -
                    (`${discount.discount}` * discount.price) / 100}
                </span>{" "}
              </p>
            </div>
            <div className={Classes.infoRow}>
              <div>
                <FontAwesomeIcon icon={faMapMarkerAlt}></FontAwesomeIcon>
                <span>
                    {`${merchant?.address.split(",")[merchantArr?.length - 2]}, ${merchant?.address.split(",")[merchantArr?.length - 1]}`  }
                </span>
              </div>
              <div className={Classes.infoColored}>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <span>{discount.point} WP</span>
              </div>
            </div>
          </div>
          <div style={{ textAlign: "center" }}>
            {options ? 
            <Grid className={Classes.productLinksContainer} container justifyContent="space-between">
              <Link to={`/discounts/${discount._id}`}>View</Link>
              <Link to="#" onClick={() => handleAddToCart(discount)}>Add To Cart</Link>
            </Grid>
            :<OrderBtn as="a" href="/login">
              Order
            </OrderBtn> }
            
          </div>
        </Div>
      </StyledDiv>
    </Grid> 
 
  );
};

export default StyledCoupon;
