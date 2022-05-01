// import UserLayout from "../../Components/Layouts/UserLayout.js"

import { useState, useEffect } from "react";
import Classes from "../../Styles/User.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCheck } from "@fortawesome/free-solid-svg-icons";
// import { Button } from "../../Components/Button";
import { Link, Navigate, useParams } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";
import Pie from "../../Components/Pie";
import BaseURL from "../../Components/Helper";
import { useDispatch, useSelector } from "react-redux";
import UserLayout from "../../Components/Layouts/UserLayout";
import AddIcon from "@material-ui/icons/Add";
import {
  Grid,
  Fab,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
} from "@mui/material";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Input from "../../Components/LoginFiles/Input";
import FileBase from "react-file-base64";
import { createReceipt, getReceiptById } from "../../actions/receipts";
import { updateUser} from "../../actions/user";
import { useNavigate } from "react-router-dom";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import PropTypes from "prop-types";
import Rewards from "../../Components/Rewards";
import Loader from "../../Components/Loader";

import "./styles.css";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const initialState = {
  merchant: "",
  user: "",
  selectedFiles: [],
};
const initialProfileState = {
  phone: "",
  id:"",
};

const User = () => {
  const [referred, setReferred] = useState("");
  const [copied, setCopied] = useState(false);
  const user = JSON.parse(localStorage.getItem("profile"));
  const [open, setOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleProfileOpen = () => setProfileOpen(true);
  const handleClose = () => setOpen(false);
  const handleProfileClose = () => setProfileOpen(false);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState(initialState);
  const [profileData, setProfileData] = useState(initialProfileState);
  const [error, setError] = useState("");
  const { merchants } = useSelector((state) => state.merchants);
  const isLoading = useSelector((state) => state.auth.isLoading);
  const navigate = useNavigate();
  const [value, setValue] = useState(0);
  const { id } = useParams();
  const [showPassword, setShowPassword] = useState(false);
  const {receipt} = useSelector(state => state.receipts)
  let [receiptTotal, setReceiptTotal] = useState(null);

  console.log(receipt)

  useEffect(() => {
    
   receiptTotal = receipt?.receipt?.reduce(function (previousValue, currentValue) {
      return (
        previousValue +
        currentValue.point 
      )
    }, 0);
    return setReceiptTotal(receiptTotal)
    
  }, [user])



  

  console.log(receiptTotal)
  
  const handleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };

  const CopyToClipboard = () => {
    //   console.log(navigator.clipboard.write.length)
    if (navigator.clipboard.write.length >= 1) {
      setCopied("true");
    }
    navigator.clipboard.writeText(
      `https://wazodeals.com/signup?user=${user?.user?.referralCode}`
    );
  };

  const totalPoint = user?.user?.point + user?.user?.referrals.length * 12.5 + receiptTotal ;

  console.log(totalPoint);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
 

  console.log(profileData);
  const uploadImages = (files) => {
    setFormData({
      ...formData,
      selectedFiles: files.map((file) => file.base64),
    });
  };
  const clear = () => {
    setFormData({
      merchant: "",
      selectedFiles: [],
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !formData.user ||
      !formData.merchant ||
      formData.selectedFiles.length === 0
    ) {
      return;
    } else {
      dispatch(
        createReceipt(
          { ...formData, selectedFiles: formData.selectedFiles.join("|") },
          navigate
        )
      );
      handleClose();
      clear();
      // window.location.reload(false);
    }
  };
  const handleProfileChange = (e) => {
    setProfileData({ ...profileData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    
  setProfileData({...profileData, id:user?.user?._id})
  }, [])
  console.log(profileData)
  const handleUpdateProfile = (e) => {
    e.preventDefault();
    dispatch(updateUser(profileData))

  };
  const handleVerifyPhone = (e) => {
    e.preventDefault()
  };
  useEffect(() => {
    setFormData({ ...formData, user: user?.user?._id });
    dispatch(getReceiptById(id));
  }, []);

  console.log(formData);
  return (
    <UserLayout>
      <div className="Row RowPadding">
        <p style={{ marginBottom: "10px" }}>
          Welcome,{" "}
          <h4 style={{ display: "inline" }}>{user?.user?.name || "Anon"}</h4>
        </p>
        <div className={Classes.UserContainer}>
          <div className={Classes.UserCard}>
            <div>
              <div className={Classes.UserCardRow}>
                <FontAwesomeIcon icon={faUserCheck} />
                <div className="circularContainer">
                  <Pie point={totalPoint}></Pie>
                </div>
              </div>
              <Button
                className={totalPoint >= 750 ? "redeemBtn" : "disabledBtn" }
                disabled={totalPoint >= 750 ? false : true}
                href="/"
                
                >
                {/* <Link to="/">Redeem</Link> */}
               
                Redeem
              </Button>
            </div>
          </div>
          <div className={`${Classes.UserCard} ${Classes.UserCardMargin}`}>
            <div className={Classes.UserCardRow}>
              <h4>Your Referral Code</h4>
            </div>
            <div className={Classes.UserCodeRow}>
              <div className={Classes.UserCode}>
                <p>
                  <a
                    href={`https://wazodeals.com/signup?user=${user?.user?.referralCode}`}
                  >
                    {" "}
                    https://wazodeals.com/signup?user={user?.user?.referralCode}
                  </a>
                </p>
              </div>
              <Button
                className={Classes.Button}
                onClick={CopyToClipboard}
                style={{
                  background: "white",
                  color: "red",
                  boxShadow: "1px 1px black",
                }}
              >
                {copied ? "Copied!" : "Copy"}
              </Button>
            </div>
            <div style={{ marginTop: "20px", textAlign: "left" }}>
              <h3>Referred : {user?.user?.referrals.length} Persons</h3>
            </div>
          </div>
          <div className={Classes.UserCard}>
            <div className={Classes.UserColumn}>
              Claim extra rewards from your shopping receipts <br></br>
              <Button
                onClick={handleOpen}
                style={{
                  background: "white",
                  color: "red",
                  boxShadow: "1px 1px red",
                  marginTop: "20px",
                }}
              >
                Upload A Receipt
              </Button>
              <Grid xs={3}>
                <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={style} className="modal">
                    <Grid container justifyContent="space-between">
                      <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="h2"
                        mt={3}
                      >
                        Upload A Receipt
                      </Typography>
                      <CloseIcon
                        style={{ cursor: "pointer" }}
                        onClick={handleClose}
                      />
                    </Grid>

                    <form onSubmit={handleSubmit}>
                      <Grid spacing={2}>
                        <Grid my={5}>
                          <FormControl
                            error={error}
                            required={true}
                            style={{ width: "100%" }}
                          >
                            <InputLabel htmlFor="merchant">
                              Select Merchant
                            </InputLabel>
                            <Select
                              name="merchant"
                              value={formData.merchantName}
                              onChange={handleChange}
                              required={true}
                            >
                              {merchants?.merchant?.map((merchant) => (
                                <MenuItem value={merchant._id}>
                                  {merchant.merchantName || merchant.merchant}
                                </MenuItem>
                              ))}
                            </Select>
                            {error && (
                              <FormHelperText>Select a value</FormHelperText>
                            )}
                          </FormControl>
                        </Grid>
                        <Grid my={5}>
                          <label
                            htmlFor="upload-photo"
                            style={{ position: "relative", cursor: "pointer" }}
                          >
                            <FileBase
                              type="file"
                              multiple={true}
                              name="upload-photo"
                              style={{ display: "none", cursor: "pointer" }}
                              onDone={uploadImages}
                            />
                            <Fab
                              color="secondary"
                              size="small"
                              component="span"
                              aria-label="add"
                              variant="extended"
                              style={{
                                position: "absolute",
                                top: "0",
                                left: "0",
                                width: "100%",
                                pointerEvents: "none",
                                cursor: "pointer",
                                background: "white",
                                color: "red",
                              }}
                            >
                              <AddIcon /> Upload Receipt(s)
                            </Fab>
                            <Grid
                              container
                              sm={12}
                              mt={2}
                              style={{ overflowY: "scroll", height: "200px" }}
                            >
                              {formData?.selectedFiles?.length > 0 ? (
                                <>
                                  {formData?.selectedFiles?.map((file, i) => (
                                    <Grid
                                      container
                                      sm={3.1}
                                      xs={5.5}
                                      mx={1}
                                      my={1}
                                    >
                                      <img
                                        style={{
                                          width: "100%",
                                          height: "100px",
                                        }}
                                        key={i}
                                        src={file}
                                      />
                                    </Grid>
                                  ))}{" "}
                                </>
                              ) : (
                                <p
                                  style={{
                                    textAlign: "center",
                                    display: "flex",
                                    alignItem: "center",
                                  }}
                                >
                                  Upload A Clear Copy of Your Shopping
                                  Receipt(s) Copy of Your Shopping Receipt
                                </p>
                              )}
                            </Grid>
                          </label>
                        </Grid>
                      </Grid>

                      <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        style={{ background: "#FF0076" }}
                      >
                        Submit
                      </Button>
                    </form>
                  </Box>
                </Modal>
              </Grid>
            </div>
          </div>
        </div>
        <Grid mt={3}>
          <Box sx={{ width: "100%", overflow: "auto !important" }}>
            <Box
              className="tabContainer"
              sx={{ borderBottom: 1, borderColor: "divider" }}
            >
              <Tabs
                value={value}
                onChange={handleTabChange}
                aria-label="basic tabs example"
              >
                <Tab label="Profile" {...a11yProps(0)} />
                <Tab label="Rewards" {...a11yProps(1)} />
                <Tab label="Shopping History" {...a11yProps(2)} />
              </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
              <h4>Profile Information</h4>
              <Grid spacing={2} sm={12} px={5} className="user-profile">
                <Grid sm={4} mt={3}>
                  <span>Email</span> - {user?.user?.email}
                </Grid>
                <Grid container sm={12} mt={3} alignItems="center">
                  <span>Phone</span> -{" "}
                  {user?.user?.phone
                    ? `${user?.user?.phone}`
                    : "Add Phone Number"}
                  <form onSubmit={handleVerifyPhone} >
                    {user?.user?.phone ? (
                      <Grid container>
                      <Grid mx={3}>
                      <Button
                        onClick={handleProfileOpen}
                        type="submit"
                        style={{
                          background: "white",
                          color: "red",
                          boxShadow: "1px 1px red",
                        }}
                      >
                        Update
                      </Button>
                      </Grid>
                       
                      <Button
                        onClick={handleProfileOpen}
                        type="submit"
                        style={{
                          background: "white",
                          // color: "red",
                          boxShadow: "1px 1px red",
                        }}
                        disabled
                      >
                        Verify
                      </Button>
                      </Grid>
                     
                    ) : (
                      <Button
                        onClick={handleProfileOpen}
                        style={{
                          background: "white",
                          color: "red",
                          boxShadow: "1px 1px red",
                        }}
                      >
                        Add
                      </Button>
                    )}
                  </form>
                </Grid>
              </Grid>

              <Grid xs={3}>
                <Modal
                  open={profileOpen}
                  onClose={handleProfileClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={style} className="modal">
                    <Grid container justifyContent="space-between">
                      <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="h2"
                        mt={3}
                      >
                        Add Your Number
                      </Typography>
                      <CloseIcon
                        style={{ cursor: "pointer" }}
                        onClick={handleProfileClose}
                      />
                    </Grid>

                    <form onSubmit={handleUpdateProfile}>
                      <Grid container>
                        <Grid spacing={2} px={3}>
                          <Grid my={3}>
                            <Input
                              name="phone"
                              label="Mobile Phone"
                              handleChange={handleProfileChange}
                              type="tel"
                              value={profileData.phone}
                            />
                          </Grid>
                        </Grid>
                        <Button
                          type="submit"
                          variant="contained"
                          color="primary"
                          style={{
                            boxShadow:
                              "0px 7px 11px 9px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)",
                            background:
                              "linear-gradient(30deg, #eee, #fff, yellow)",
                            color: "black",
                          }}
                        >
                          {isLoading ? <Loader /> : "Add"}
                        </Button>
                      </Grid>
                    </form>
                  </Box>
                </Modal>
              </Grid>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <Rewards user={user} />
            </TabPanel>
            <TabPanel value={value} index={2}>
              <Grid>
                <h4>Shopping History</h4>
              </Grid>
            </TabPanel>
          </Box>
        </Grid>
      </div>
    </UserLayout>
  );
};

export default User;
