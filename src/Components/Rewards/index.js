import {useState} from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Table from './Table';
import { useSelector } from 'react-redux';
import "./styles.css"

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      className="tabPanel"
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box className="tabPanelItem" sx={{ p: 3 }}>
          <div>{children}</div>
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
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs({user}) {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  console.log(user)
  console.log("==============rewarduser===============")

  const {receipt} = useSelector(state => state.receipts)
  const receiptPending = receipt?.receipt?.filter(receipt => receipt.status === "processing")
  const userReferrals = user?.user?.referrals


  const allRewards = [...receipt?.receipt , ...userReferrals]

  console.log(allRewards)
  console.log(allRewards.length)
  console.log("====================receiptPending==================")

 

  return (
    <Box
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 224 }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider' }}
      >
        <Tab label="All" {...a11yProps(0)} />
        <Tab label="Pending" {...a11yProps(1)} />
        <Tab label="Referral" {...a11yProps(2)} />
        <Tab label="Receipts" {...a11yProps(3)} />
       
      </Tabs>
      <TabPanel style={{width:"100%"}} value={value} index={0}>
        <Table value={allRewards} />
      </TabPanel>
      <TabPanel style={{width:"100%"}} value={value} index={1}>
      <Table value={receiptPending} />
        
      </TabPanel>
      <TabPanel style={{width:"100%"}} value={value} index={2}>
      <Table value={userReferrals} />
      
        
      </TabPanel>
      <TabPanel style={{width:"100%"}} value={value} index={3}>
      <Table />
        
      </TabPanel>
     
    </Box>
  );
}
