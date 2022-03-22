import {useEffect, useState} from "react"
import {useSelector} from "react-redux"
import { StyledDiv, Div } from "./StyledCoupon";
import Classes from "../../Styles/Coupon.module.css";
import { OrderBtn } from "../Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faStar } from "@fortawesome/free-solid-svg-icons";
import useStyles from "./styles";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";



import {Grid, CardMedia, Button} from "@material-ui/core"

const StyledCoupon = ({discount, setCurrentId}) => {
   const classes = useStyles()
  const files = discount.selectedFiles.split("|")
  
  const { discounts } = useSelector((state) => state.discounts);
  const {merchants} = useSelector(state => state.merchants)
  const merchant =  merchants?.merchant?.find(merchant => merchant?._id === discount?.merchant)
  const merchantArr = merchant?.address.split(",")
   
  
  console.log(merchant)
 

  return (
   
    <Grid sm={4} md={3} className={classes.gridContainer}>
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
        <div className={classes.overlay2} name="edit">
         
          <Button
            onClick={(e) => {
             
              e.stopPropagation();
              e.preventDefault()
              setCurrentId(discount._id);
            }}
            style={{ color: "white" }}
            size="small"
          >
            <MoreHorizIcon fontSize="medium" />
          </Button>
        </div>
        </div>
        <Div>
          <div>
            <h3>{discount?.title}</h3>
            <div className={Classes.desc}>
              <p>{discount?.description}</p>
            </div>
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
                  {/* {merchants?.merchant?.map(merchant => merchant?._id === discount.merchant)} */}
                  {/* {merchant?.merchant?.address?.split(',')[merchant?.merchant?.address?.split(',').length - 1]} */}
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
            <OrderBtn as="a" href="/login">
              Order
            </OrderBtn>
          </div>
        </Div>
      </StyledDiv>
    </Grid> 
 
  );
};

export default StyledCoupon;
