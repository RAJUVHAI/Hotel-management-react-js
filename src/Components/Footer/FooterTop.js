import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "./FooterTop.css";

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
    <div className="footer-top-tab">
      <Box className="tab-section" sx={{ width: "100%" }}>
        <h1 className="footer-top-heading">Inspiration for future getaways</h1>
        <Box className="tabs" sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab
              className="tab"
              label="Destinations of Art and Culture"
              {...a11yProps(0)}
            />
            <Tab
              className="tab"
              label="Destinations for outdoor adventure"
              {...a11yProps(1)}
            />
            <Tab className="tab" label="Mountain cabins" {...a11yProps(2)} />
            <Tab className="tab" label="Beach destinations" {...a11yProps(3)} />
            <Tab
              className="tab"
              label="Popular destinations"
              {...a11yProps(4)}
            />
            <Tab className="tab" label="Unique stays" {...a11yProps(5)} />
          </Tabs>
        </Box>
        <TabPanel className="tab" value={value} index={0}>
          <div className="tab-content">
            <ul>
              <li>
                <a href="#"> Phoenix </a>
              </li>
              <li>
                <a href="#"> Arizona </a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="#"> Hot Springs </a>
              </li>
              <li>
                <a href="#"> Arkansas </a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="#"> Los Angeles </a>
              </li>
              <li>
                <a href="#"> California </a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="#"> San Diego </a>
              </li>
              <li>
                <a href="#"> California </a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="#"> San Francisco </a>
              </li>
              <li>
                <a href="#"> California </a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="#"> Barcelona </a>
              </li>
              <li>
                <a href="#"> Catalonia </a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="#"> Prague </a>
              </li>
              <li>
                <a href="#"> Czechia </a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="#"> Washington </a>
              </li>
              <li>
                <a href="#"> District of Columbia </a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="#"> Keswick </a>
              </li>
              <li>
                <a href="#"> England </a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="#"> London </a>
              </li>
              <li>
                <a href="#"> England </a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="#"> Scarborough </a>
              </li>
              <li>
                <a href="#"> England </a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="#"> Sherwood Forest </a>
              </li>
              <li>
                <a href="#"> England </a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="#"> York </a>
              </li>
              <li>
                <a href="#"> England </a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="#"> Paris </a>
              </li>
              <li>
                <a href="#"> France </a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="#"> Rhodes </a>
              </li>
              <li>
                <a href="#"> Greece </a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="#"> Nashville </a>
              </li>
              <li>
                <a href="#"> Indiana </a>
              </li>
            </ul>
          </div>
        </TabPanel>
        <TabPanel className="tab" value={value} index={1}>
          <div className="tab-content">
            <ul>
              <li>
                <a href="#">Lake Martin</a>
              </li>
              <li>
                <a href="#">Alabama</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="#">Banff</a>
              </li>
              <li>
                <a href="#">Alberta</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="#">Nerja</a>
              </li>
              <li>
                <a href="#">Andalucía</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="#">Greer</a>
              </li>
              <li>
                <a href="#">Arizona</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="#">Lake Havasu City</a>
              </li>
              <li>
                <a href="#">Arizona</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="#">Lake Powell</a>
              </li>
              <li>
                <a href="#">Arizona</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="#">North Rim</a>
              </li>
              <li>
                <a href="#">Arizona</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="#">Payson</a>
              </li>
              <li>
                <a href="#">Arizona</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="">Pinetop-Lakeside</a>
              </li>
              <li>
                <a href="#">Arizona</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="#">Red Rock</a>
              </li>
              <li>
                <a href="#">Arizona</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="#">Dinner Plain</a>
              </li>
              <li>
                <a href="#">Australia</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="#">Streaky Bay</a>
              </li>
              <li>
                <a href="#">Australia</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="#">Emerald Lake</a>
              </li>
              <li>
                <a href="#">British Columbia</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="#">Vancouver Island</a>
              </li>
              <li>
                <a href="#">British Columbia</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="#">Victoria</a>
              </li>
              <li>
                <a href="#">British Columbia</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="#">Idyllwild-Pine</a>
              </li>
              <li>
                <a href="#">Cove California</a>
              </li>
            </ul>
          </div>
        </TabPanel>
        <TabPanel className="tab" value={value} index={2}>
          <div className="tab-content">
            <ul>
              <li>
                <a href="#">Lake Martin</a>
              </li>
              <li>
                <a href="#">Alabama</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="#">Banff</a>
              </li>
              <li>
                <a href="#">Alberta</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="#">Nerja</a>
              </li>
              <li>
                <a href="#">Andalucía</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="#">Greer</a>
              </li>
              <li>
                <a href="#">Arizona</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="#">Lake Havasu City</a>
              </li>
              <li>
                <a href="#">Arizona</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="#">Lake Powell</a>
              </li>
              <li>
                <a href="#">Arizona</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="#">North Rim</a>
              </li>
              <li>
                <a href="#">Arizona</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="#">Payson</a>
              </li>
              <li>
                <a href="#">Arizona</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="">Pinetop-Lakeside</a>
              </li>
              <li>
                <a href="#">Arizona</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="#">Red Rock</a>
              </li>
              <li>
                <a href="#">Arizona</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="#">Dinner Plain</a>
              </li>
              <li>
                <a href="#">Australia</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="#">Streaky Bay</a>
              </li>
              <li>
                <a href="#">Australia</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="#">Emerald Lake</a>
              </li>
              <li>
                <a href="#">British Columbia</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="#">Vancouver Island</a>
              </li>
              <li>
                <a href="#">British Columbia</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="#">Victoria</a>
              </li>
              <li>
                <a href="#">British Columbia</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="#">Idyllwild-Pine</a>
              </li>
              <li>
                <a href="#">Cove California</a>
              </li>
            </ul>
          </div>
        </TabPanel>
        <TabPanel className="tab" value={value} index={3}>
          <div className="tab-content">
            <ul>
              <li>
                <a href="#">Lake Martin</a>
              </li>
              <li>
                <a href="#">Alabama</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="#">Banff</a>
              </li>
              <li>
                <a href="#">Alberta</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="#">Nerja</a>
              </li>
              <li>
                <a href="#">Andalucía</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="#">Greer</a>
              </li>
              <li>
                <a href="#">Arizona</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="#">Lake Havasu City</a>
              </li>
              <li>
                <a href="#">Arizona</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="#">Lake Powell</a>
              </li>
              <li>
                <a href="#">Arizona</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="#">North Rim</a>
              </li>
              <li>
                <a href="#">Arizona</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="#">Payson</a>
              </li>
              <li>
                <a href="#">Arizona</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="">Pinetop-Lakeside</a>
              </li>
              <li>
                <a href="#">Arizona</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="#">Red Rock</a>
              </li>
              <li>
                <a href="#">Arizona</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="#">Dinner Plain</a>
              </li>
              <li>
                <a href="#">Australia</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="#">Streaky Bay</a>
              </li>
              <li>
                <a href="#">Australia</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="#">Emerald Lake</a>
              </li>
              <li>
                <a href="#">British Columbia</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="#">Vancouver Island</a>
              </li>
              <li>
                <a href="#">British Columbia</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="#">Victoria</a>
              </li>
              <li>
                <a href="#">British Columbia</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="#">Idyllwild-Pine</a>
              </li>
              <li>
                <a href="#">Cove California</a>
              </li>
            </ul>
          </div>
        </TabPanel>
        <TabPanel className="tab" value={value} index={4}>
          <div className="tab-content">
            <ul>
              <li>
                <a href="#">Lake Martin</a>
              </li>
              <li>
                <a href="#">Alabama</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="#">Banff</a>
              </li>
              <li>
                <a href="#">Alberta</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="#">Nerja</a>
              </li>
              <li>
                <a href="#">Andalucía</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="#">Greer</a>
              </li>
              <li>
                <a href="#">Arizona</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="#">Lake Havasu City</a>
              </li>
              <li>
                <a href="#">Arizona</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="#">Lake Powell</a>
              </li>
              <li>
                <a href="#">Arizona</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="#">North Rim</a>
              </li>
              <li>
                <a href="#">Arizona</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="#">Payson</a>
              </li>
              <li>
                <a href="#">Arizona</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="">Pinetop-Lakeside</a>
              </li>
              <li>
                <a href="#">Arizona</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="#">Red Rock</a>
              </li>
              <li>
                <a href="#">Arizona</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="#">Dinner Plain</a>
              </li>
              <li>
                <a href="#">Australia</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="#">Streaky Bay</a>
              </li>
              <li>
                <a href="#">Australia</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="#">Emerald Lake</a>
              </li>
              <li>
                <a href="#">British Columbia</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="#">Vancouver Island</a>
              </li>
              <li>
                <a href="#">British Columbia</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="#">Victoria</a>
              </li>
              <li>
                <a href="#">British Columbia</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="#">Idyllwild-Pine</a>
              </li>
              <li>
                <a href="#">Cove California</a>
              </li>
            </ul>
          </div>
        </TabPanel>
        <TabPanel className="tab" value={value} index={5}>
          <div className="tab-content">
            <ul>
              <li>
                <a href="#">Lake Martin</a>
              </li>
              <li>
                <a href="#">Alabama</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="#">Banff</a>
              </li>
              <li>
                <a href="#">Alberta</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="#">Nerja</a>
              </li>
              <li>
                <a href="#">Andalucía</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="#">Greer</a>
              </li>
              <li>
                <a href="#">Arizona</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="#">Lake Havasu City</a>
              </li>
              <li>
                <a href="#">Arizona</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="#">Lake Powell</a>
              </li>
              <li>
                <a href="#">Arizona</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="#">North Rim</a>
              </li>
              <li>
                <a href="#">Arizona</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="#">Payson</a>
              </li>
              <li>
                <a href="#">Arizona</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="">Pinetop-Lakeside</a>
              </li>
              <li>
                <a href="#">Arizona</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="#">Red Rock</a>
              </li>
              <li>
                <a href="#">Arizona</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="#">Dinner Plain</a>
              </li>
              <li>
                <a href="#">Australia</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="#">Streaky Bay</a>
              </li>
              <li>
                <a href="#">Australia</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="#">Emerald Lake</a>
              </li>
              <li>
                <a href="#">British Columbia</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="#">Vancouver Island</a>
              </li>
              <li>
                <a href="#">British Columbia</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="#">Victoria</a>
              </li>
              <li>
                <a href="#">British Columbia</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="#">Idyllwild-Pine</a>
              </li>
              <li>
                <a href="#">Cove California</a>
              </li>
            </ul>
          </div>
        </TabPanel>
      </Box>
    </div>
  );
}
