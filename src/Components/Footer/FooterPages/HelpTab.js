import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Login from "./Login";
import HelpCardGuest from "./HelpCardGuest";
import HelpCardHost from "./HelpCardHost";
import HelpCardExprHost from "./HelpCardExprHost";
import HelpCardTrAdmin from "./HelpCardTrAdmin";

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

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab className="tab" label="Guest" {...a11yProps(0)} />
          <Tab className="tab" label="Host" {...a11yProps(1)} />
          <Tab className="tab" label="Experience Host" {...a11yProps(2)} />
          <Tab className="tab" label="Travel Admin" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Login />
        <HelpCardGuest />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Login />
        <HelpCardHost />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Login />
        <HelpCardExprHost />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Login />
        <HelpCardTrAdmin />
      </TabPanel>
    </Box>
  );
}
