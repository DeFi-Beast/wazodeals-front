import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { StyledDiv, Div } from "./StyledCoupon";
import Classes from "../../Styles/Coupon.module.css";
import { OrderBtn } from "../Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faStar } from "@fortawesome/free-solid-svg-icons";
import useStyles from "./styles";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { Link, useLocation } from "react-router-dom";

import { Grid, CardMedia, Button } from "@material-ui/core";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const StyledCoupon = ({ discount, setCurrentId }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const files = discount.selectedFiles.split("|");
  const { merchants } = useSelector((state) => state.merchants);
  const merchant = merchants?.merchant?.find(
    (merchant) => merchant?._id === discount?.merchant
  );
  const merchantArr = merchant?.address.split(",");

  console.log("=========================merchantArr=============")
  console.log(merchant)
  console.log(merchantArr)
  console.log("=========================merchantArr=============")

  const user = JSON.parse(localStorage.getItem("profile"));
  const [options, setOptions] = useState(false);
  const [cartText, setCartText] = useState(false);

  const query = useQuery();
  const page = query.get("page");

  const Location = useLocation();

  const cart = JSON.parse(localStorage.getItem("cart"));

  useEffect(() => {
    if (
      Location.pathname === "/deals/discounts" ||
      Location.pathname === "/deals/discounts/search"
    ) {
      setOptions(true);
    }
    console.log(Location);
  }, [Location]);

  useEffect(() => {
    const check = cart?.find((cart) => cart._id === discount?._id);
    if (check) {
      setCartText(true);
    }
  }, [cart]);

  const handleAddToCart = (discount, e) => {
    e.preventDefault();
    dispatch({ type: "ADD_TO_CART", payload: discount });
  };
  return (
    <Grid
      xs={10}
      sm={5}
      md={3}
      className={!options ? classes.gridContainer : classes.productContainer}
    >
      <StyledDiv>
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
          {user?.user?.role[0] === "merchant" && (
            <div className={classes.overlay2} name="edit">
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
            </div>
          )}
        </div>
        <Div className={options && classes.whiteBg}>
          <div>
            <h3>
              {discount?.title.length > 40
                ? `${discount?.title.substring(0, 40)}....`
                : `${discount?.title}`}
            </h3>
          </div>
          {!options && (
            <div>
              <div className={Classes.desc}>
                {/* <p>{discount?.description}</p> */}
                <p>
                  {discount?.description.length > 40
                    ? `${discount?.description.substring(0, 40)} ....`
                    : `${discount?.description}`}
                </p>
              </div>
            </div>
          )}

          <div>
            <div className={Classes.PriceRow}>
              <p>
                {" "}
                <span className={`${Classes.bold} ${Classes.big}`}>
                  {discount.discount} %
                </span>{" "}
                Off
              </p>

              <span className={Classes.strike}>
                {Number(discount.price).toLocaleString("en-US")}
              </span>
              <p>
                {" "}
                <span className={Classes.bold}>
                  {Number(
                    discount.price -
                      (`${discount.discount}` * discount.price) / 100
                  ).toLocaleString("en-US")}
                </span>{" "}
              </p>
            </div>
            <div className={Classes.infoRow}>
              <div>
                <FontAwesomeIcon icon={faMapMarkerAlt}></FontAwesomeIcon>
                <span>
                  {`${merchant?.address.split(",")[merchantArr?.length - 2]}, ${
                    merchant?.address.split(",")[merchantArr?.length - 1]
                  }`}
                </span>
              </div>
              <div className={Classes.infoColored}>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <span>{discount.point} WP</span>
              </div>
            </div>
          </div>
          <div style={{ textAlign: "center" }}>
            {options ? (
              <Grid
                className={Classes.productLinksContainer}
                container
                justifyContent="space-between"
              >
                <Link to={`/discounts/${discount._id}`}>View</Link>
                <Link
                  to={!page ? "#" : `/deals/discounts?page=${page}`}
                  onClick={(e) => handleAddToCart(discount, e)}
                >
                  {cartText ? (
                    <span style={{ color: "grey" }}>Added</span>
                  ) : (
                    "Add To Cart"
                  )}
                </Link>
              </Grid>
            ) : (
              <OrderBtn
                as="a"
                href="/login"
                onClick={(e) => handleAddToCart(discount, e)}
              >
                {cartText ? (
                  <span style={{ color: "black" }}>Added</span>
                ) : (
                  "Add To Cart"
                )}
              </OrderBtn>
            )}
          </div>
        </Div>
      </StyledDiv>
    </Grid>
  );
};

export default StyledCoupon;
