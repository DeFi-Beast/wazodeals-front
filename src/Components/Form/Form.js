import { useState, useEffect } from "react";
import useStyles from "./styles";
import {
  TextField,
  Button,
  Typography,
  Paper,
  Select,
  OutlinedInput,
  Box,
  Chip,
  MenuItem,
  FormControl,
  InputLabel,
  Grid,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux"; // import { creatediscount, updatediscount } from "../../actions/discounts";
import { useNavigate, useParams } from "react-router-dom";
import DatePicker from "../DatePicker";
import NumberInput from "../NumberInput";
import ImageUploads from "../ImageUploads";
import { updateDiscount } from "../../actions";
import { categories, discounts } from "../../constants";

const Form = ({ currentId, setCurrentId }) => {
  let [startDate, setStartDate] = useState();
  let [endDate, setEndDate] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const classes = useStyles();
  const { merchants } = useSelector((state) => state.merchants);
  const [images, setImages] = useState([]);
  const discount = useSelector((state) =>
    currentId
      ? state.discounts?.discounts?.discounts?.find((p) => p._id === currentId)
      : null
  );

  const { id } = useParams();
  const merchant = merchants?.merchant?.find((merchant) => merchant._id === id);

  const [discountData, setDiscountData] = useState({
    title: "",
    description: "",
    categories: [],
    selectedFiles: "",
    startDate: "",
    endDate: "",
    price: null,
    discount: "",
    merchant: "",
  });

  useEffect(() => {
    setDiscountData({
      ...discountData,
      startDate: startDate,
      endDate: endDate,
    });
  }, [startDate, endDate]);

  let [numberformat, setNumberformat] = useState(null);

  useEffect(() => {
    setDiscountData({ ...discountData, price: numberformat });
  }, [numberformat]);

  useEffect(() => {
    if (discount)
      setDiscountData({
        ...discount,
        merchant: merchants?.merchant?.find((p) => p._id === discount.merchant),
        categories: discount.categories.split(",").filter((e) => e),
      });
  }, [discount]);

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  console.log(discountData);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;

    setDiscountData({
      ...discountData,
      categories: typeof value === "string" ? value.split(",") : value,
    });
  };

  const handleDiscChange = (e) => {
    setDiscountData({ ...discountData, discount: e.target.value });
  };

  const handleMerchantChange = (e) => {
    e.preventDefault();

    setDiscountData({ ...discountData, merchant: e.target.value });
  };

  const clear = () => {
    setCurrentId(null);
    setDiscountData({
      title: "",
      description: "",
      categories: [],
      selectedFiles: "",
      startDate: "",
      endDate: "",
      price: null,
      discount: "",
      merchant: "",
    });

    setNumberformat(Number);

    setStartDate("");

    setEndDate("");
    console.log(numberformat);
  };

  const fileToDataUri = (image) => {
    return new Promise((res) => {
      const reader = new FileReader();
      const { type, name, size } = image;
      reader.addEventListener("load", () => {
        res({
          base64: reader.result,
          name: name,
          type,
          size: size,
        });
      });
      reader.readAsDataURL(image);
    });
  };

  const uploadImage = async (files) => {
    console.log(files);
    if (files && files.length > 0) {
      console.log("test");
      const newImagesPromises = [];
      for (let i = 0; i < files.length; i++) {
        newImagesPromises.push(fileToDataUri(files[i]));
      }
      const newImages = await Promise.all(newImagesPromises);
      let newStrImages = [];

      newImages.map((image) => {
        return newStrImages.push(image.base64);
      });
      console.log(newStrImages);
      setImages([...newStrImages]);
      setDiscountData({
        ...discountData,
        selectedFiles: newStrImages.join("|"),
      });
    }
  };

  const handleSubmit = (e) => {
    const newDiscount = {
      ...discountData,
      categories: discountData?.categories?.join(","),
      merchant: discount?.merchant,
    };
    e.preventDefault();
    if (currentId) {
      dispatch(
        updateDiscount(currentId, {
          ...discountData,
          categories: discountData.categories.join(","),
          merchant: discount.merchant,
        })
      );
    }
    clear();
  };

  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">
          {currentId ? "Edit" : "Create"} A Campaign
        </Typography>

        <TextField
          name="title"
          variant="outlined"
          label="Title"
          fullWidth
          value={discountData.title}
          onChange={(e) =>
            setDiscountData({ ...discountData, title: e.target.value })
          }
        />
        <TextField
          name="description"
          variant="outlined"
          label="Description"
          fullWidth
          multiline
          rows={4}
          value={discountData.description}
          onChange={(e) =>
            setDiscountData({ ...discountData, description: e.target.value })
          }
        />

        <FormControl fullWidth style={{ margin: "8px", position: "relative" }}>
          <InputLabel variant="outlined" id="demo-multiple-chip-label">
            Select Category(s)
          </InputLabel>
          <Select
            labelId="demo-multiple-chip-label"
            id="demo-multiple-chip"
            multiple
            value={discountData.categories}
            onChange={handleChange}
            input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
            renderValue={(selected) => (
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                {selected.map((value) => (
                  <Chip key={value} label={value} />
                ))}
              </Box>
            )}
            MenuProps={MenuProps}
          >
            {categories.map((name) => (
              <MenuItem key={name} value={name}>
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <DatePicker
          startDate={startDate}
          endDate={endDate}
          setStartDate={setStartDate}
          setEndDate={setEndDate}
        />
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={6} sm={6} md={6}>
            <NumberInput
              numberformat={discount ? discountData.price : numberformat}
              setNumberformat={setNumberformat}
            />
          </Grid>
          <Grid item xs={6} sm={6} md={6}>
            <FormControl fullWidth>
              <InputLabel id="discount-label">Discount</InputLabel>
              <Select
                labelId="discount-label"
                variant="outlined"
                id="discount"
                value={discountData.discount}
                label="Discount"
                onChange={handleDiscChange}
              >
                {discounts.map((discount) => (
                  <MenuItem value={discount}>{discount}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
        </Grid>
        <FormControl fullWidth>
          <InputLabel id="merchant-label">Merchant</InputLabel>
          <Select
            labelId="merchant-label"
            variant="outlined"
            id="merchant"
            value={discountData.merchant || merchant?.merchantName}
            label="Discount"
            onChange={handleMerchantChange}
          >
            {merchants?.merchant?.map((merchant) => (
              <MenuItem value={merchant?.merchant || merchant?.merchantName}>
                {merchant?.merchant || merchant?.merchantName}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <ImageUploads uploadImage={uploadImage} />
        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
        >
          Submit
        </Button>
        <Button
          variant="contained"
          color="secondary"
          size="small"
          onClick={clear}
          fullWidth
        >
          Clear
        </Button>
      </form>
    </Paper>
  );
};

export default Form;
