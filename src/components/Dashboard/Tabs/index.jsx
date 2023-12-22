/* eslint-disable react/prop-types */
import React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import "./styles.css";
import { ThemeProvider, createTheme } from "@mui/material";

export default function TabsComponent({ coins }) {
  const [value, setValue] = React.useState("grid");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const style = {
    color: "var(--white)",
    fontFamily: "inter",
    fontSize: "1rem",
    textTransform: "capitalize",
  };

  const theme = createTheme({
    pallette: {
      primary: {
        main: "#3a80e9",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange} variant="fullWidth">
              <Tab label="Grid" value="grid" sx={style} />
              <Tab label="List" value="list" sx={style} />
            </TabList>
          </Box>
          <TabPanel value="grid">
            {coins.map((coin) => {
              return (
                <div key={coin.id}>
                  <img src={coin.image} />
                  <p>{coin.name} </p>
                </div>
              );
            })}
          </TabPanel>
          <TabPanel value="list">
            <div></div>
          </TabPanel>
        </TabContext>
      </Box>
    </ThemeProvider>
  );
}
