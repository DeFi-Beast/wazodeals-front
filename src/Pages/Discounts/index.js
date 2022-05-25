import { useSelector } from "react-redux";
import { Grid } from "@material-ui/core";
import StyledCoupon from "../../Components/StyledCoupon";
import useStyles from "./styles";

const Discounts = ({ setCurrentId }) => {
  const { discounts } = useSelector((state) => state.discounts);
  const classes = useStyles();

  if (!discounts) {
    return <>No Discounts</>;
  }

  return (
    <Grid container spacing={2} className={classes.mainContainer}>
      {discounts?.discounts?.map((discount) => (
        <StyledCoupon discount={discount} setCurrentId={setCurrentId} />
      ))}
    </Grid>
  );
};

export default Discounts;
