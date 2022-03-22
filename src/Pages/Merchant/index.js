import { useState, useEffect } from "react";
import {
  Container,
  Grow,
  Grid,
  Paper,
  AppBar,
  TextField,
  Button,
} from "@material-ui/core";
import { useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import Discounts from "../Discounts";
import ChipInput from "material-ui-chip-input";
import Form from "../../Components/Form/Form";
// import Pagination from "../Pagination";
import useStyles from "./styles";
// import { getPostsBySearch } from "../../actions/posts";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Index = () => {
  const [currentId, setCurrentId] = useState(null);
  const [search, setSearch] = useState("");
  const [tags, setTags] = useState([]);
  
  const dispatch = useDispatch();
  const classes = useStyles();
  const query = useQuery();
  const navigate = useNavigate();

  const page = query.get("page") || 1;
  const searchQuery = query.get("searchQuery");
  console.log(currentId )

  // const searchPost = () => {
  //   if (search.trim() || tags) {
  //     dispatch(getPostsBySearch({ search, tags: tags.join(",") }));
  //     navigate(
  //       `/posts/search?searchQuery=${search || "null"}&tags=${tags.join(",")}`
  //     );
  //   } else {
  //     navigate("/");
  //   }
  // };
  const handleAdd = (tag) => {
    setTags([...tags, tag]);
  };
  console.log(tags);

  const handleDelete = (tagToDelete) => {
    setTags(tags.filter((tag) => tag !== tagToDelete));
  };
  // const handleKeyPress = (e) => {
  //   if (e.keyCode === 13) {
  //     searchPost();
  //   }
  // };
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
          <Grid item xs={12} sm={6} md={9}>
            <Discounts setCurrentId={setCurrentId} />
          </Grid>
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

export default Index;
