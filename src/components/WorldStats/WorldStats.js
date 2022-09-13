import React from 'react'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ChartData from './ChartData';
import AllChartData from './AllChartData';
import Time from './Time';
import {useState} from 'react'
import { Historical } from './Historical';

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
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function WorldStats() {
  const [value, setValue] = useState(0);



  const handleChange = (event, newValue) => {
    setValue(newValue);
  };






  return (
    
    <>


      <Typography variant='h3' color='primary'>World Data </Typography>
      <Box
        sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', minHeight: {xs: '75vh', md:'70vh'}, borderRadius: '20px', boxShadow: 3, marginTop:'10px' }}
        
        color='secondary'
      >


        <Tabs
          orientation="vertical"
          variant="scrollable"
          color='secondary'
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          sx={{ borderRight: 1, borderColor: 'divider' ,bgcolor: 'rgba(144,164,174,0.5)', borderTopLeftRadius: '20px', borderBottomLeftRadius: '20px'}}
        >
          <Tab label="Today" {...a11yProps(0)} />
          <Tab label="All Time" {...a11yProps(1)} />
          <Tab label="Historical" {...a11yProps(2)} />
          <Tab label="Exact date" {...a11yProps(3)} />

        </Tabs>
        <TabPanel value={value} index={0} >
            <ChartData />
        </TabPanel>
        <TabPanel value={value} index={1}>
            <AllChartData />
        </TabPanel>
        <TabPanel value={value} index={2}>
            <Historical />

        </TabPanel>
        <TabPanel value={value} index={3}>
            <Time />

        </TabPanel>


      </Box>
    </>
  )

}