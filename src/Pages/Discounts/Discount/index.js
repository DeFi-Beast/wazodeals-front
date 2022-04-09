import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getDiscountById } from "../../../actions";
import UserLayout from "../../../Components/Layouts/UserLayout";
import { Grid, Typography, Chip } from "@mui/material";

import "./styles.css";

const Discount = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [selected, setSelected] = useState(0);
  const { discount } = useSelector((state) => state.discounts.discount);
  const cart= useSelector((state) => state.addToCart.cart);
  const files = discount?.selectedFiles.split("|");
  const { merchants } = useSelector((state) => state.merchants);
  const merchant = merchants?.merchant?.find(
    (merchant) => merchant?._id === discount?.merchant
  );
  const categories = discount?.categories.split(",");
 console.log(cart)
 console.log(cart.length)
  // console.log(files[0])
  console.log(discount);
  console.log(merchant);
  console.log(categories);
  useEffect(() => {
    dispatch(getDiscountById(id));
  }, [id]);

  const handleSelectedImg = (index) => {
    // console.log(index);
    setSelected(index);
  };

  const handleAddToCart = (discount) => {
      dispatch({type:'ADD_TO_CART', payload:discount})
  }

  return (
    <UserLayout>
      <div className="Row RowPadding">
        <Grid container>
          <Grid container sm={6} xs={10} m="0 auto">
            <Grid item>
              <img src={files?.[selected]} alt="image" />
            </Grid>
            <Grid container sm={12} display="block">
              {files?.slice(0, 3).map((file, index) => (
                <Grid
                  item
                  key={index}
                  onClick={() => handleSelectedImg(index)}
                  className={selected === index ? "selectedImg" : ""}
                  xs={3}
                  sm={2}
                >
                  <img src={file} alt="image" />
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid item sm={6} xs={12} p={4}>
            <h2 className="product-title">{discount?.title}</h2>
            <Grid
              className="product-info"
              container
              justifyContent="space-between"
              mt={4}
            >
              <Grid item>
                by: <span>{merchant?.merchantName || merchant?.merchant}</span>
              </Grid>
              <Grid item>
                for: <span>&#8358;{discount?.price}</span>
              </Grid>
              <Grid item>
                at: <span>{discount?.discount}% </span>discount
              </Grid>
            </Grid>
            <Grid mt={3}>
            {categories?.map((category) => (
                <Chip
                  label={`${category}`}
                  component="a"
                  href={`/${category}`}
                  variant="outlined"
                  clickable
                />
              ))}
            </Grid>
            <Grid mt={3}>
              <h4>Description</h4>
              <Grid pt={3}>
                <Typography>{discount?.description}</Typography>
              </Grid>
              
            </Grid>
            <Grid mt={5} container justifyContent='flex-end'>
             
              <Grid container  sm={6} className="product-cart" >
                <Link to='#' onClick={()=>handleAddToCart(discount)}>
                  
                  Add To Cart
                  </Link>
              </Grid>
              
            </Grid>
          </Grid>
        </Grid>
        <Grid mt={4} p={5}>
          Similar Items
        </Grid>
      </div>
    </UserLayout>
  );
};

export default Discount;
