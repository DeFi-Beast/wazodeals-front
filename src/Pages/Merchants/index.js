import { useState, useEffect } from "react";
import { Container, Grow, Grid, Paper } from "@material-ui/core";
import { useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import Form from "../../Components/Form/Form";
import useStyles from "./styles";
import StyledCoupon from "../../Components/StyledCoupon";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Merchants = () => {
  const [currentId, setCurrentId] = useState(null);
  const [tags, setTags] = useState([]);
  const classes = useStyles();
  const query = useQuery();
  const searchQuery = query.get("searchQuery");
  const { id } = useParams();
  const { discounts } = useSelector((state) => state.discounts);
  const allDiscounts = discounts?.discounts?.filter(
    (discount) => discount.merchant === id
  );

  console.log(discounts);

  return (
    <Grow in>
      <Container maxWidth="xl">
        <Grid
          container
          justifyContent="space-between"
          alignItems="stretch"
          spacing={3}
          className={classes.gridContainer}
        >
          {allDiscounts ? (
            allDiscounts.length > 0 ? (
              <Grid item xs={12} sm={6} md={9}>
                {/* <Discounts setCurrentId={setCurrentId} /> */}
                <Grid container spacing={2} className={classes.mainContainer}>
                  {allDiscounts?.map((discount) => (
                    <StyledCoupon
                      discount={discount}
                      setCurrentId={setCurrentId}
                    />
                  ))}
                </Grid>
              </Grid>
            ) : (
              <div
                style={{
                  textAlign: "center",
                  display: "flex",
                  alignItems: "center",
                  height: "100vh",
                  width: "50%",
                }}
              >
                <h1 style={{ fontSize: "3.5rem", textAlign: "left" }}>
                  Create your first campaign!!
                </h1>
              </div>
            )
          ) : (
            <div
              style={{
                textAlign: "center",
                display: "flex",
                alignItems: "center",
                height: "100vh",
                width: "50%",
              }}
            >
              <h1 style={{ fontSize: "3.5rem", textAlign: "left" }}>
                Create your first campaign!!
              </h1>
            </div>
          )}

          <Grid item xs={12} sm={6} md={3}>
            <Form currentId={currentId} setCurrentId={setCurrentId} />
            {!searchQuery && !tags.length && (
              <Paper elevation={6} className={classes.pagination}>
                {/* <Pagination page={page} /> */}
              </Paper>
            )}
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
};

export default Merchants;
