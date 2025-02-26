import React from 'react'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ProfileDetail from './ProfileDetail';
import ProductForm from '../components/CreateStock';
import Inventory from '../components/Inventory';
import ExportRequestForm from '../components/Export_Request';
import MyExports from '../components/MyExports';
import TenderApplication from '../components/TenderApplication';

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 4 }}>
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
      id: `vertical-tab-${index}`,
      'aria-controls': `vertical-tabpanel-${index}`,
    };
  }

const Profile = () => {
    const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className=' sm:px-[10%] mx-auto px-6 pt-28 pb-[600px'>
        <Box
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 1024}}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider' }}
      >
        <Tab label="Profile" {...a11yProps(0)} />
        <Tab label="Tender" {...a11yProps(1)} />
        <Tab label="Inventory" {...a11yProps(2)} />
        <Tab label="Exports" {...a11yProps(3)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <ProfileDetail/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <TenderApplication></TenderApplication>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Inventory></Inventory>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <MyExports></MyExports>
      </TabPanel>
    </Box>
    </div>
  )
}

export default Profile