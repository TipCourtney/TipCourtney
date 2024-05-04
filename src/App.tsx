import React, { ReactElement } from "react";
import logo from "./logo.svg";
import "./App.css";
import { createTheme, Grid, ThemeProvider, Typography } from "@mui/material";
import BlueBox from "./BlueBox";
import SecondOption from "./SecondOption";
import { isPropertySignature } from "typescript";

function App() {
  return (
    // <div className={"App"}>
    //   <SecondOption />
    // </div>
    <div className={"App"}>
      <Grid container className={"Container"} direction="column">
        <Grid item xs={12} style={{ marginBottom: "4%" }}>
          <Typography color="#4E4F51" fontSize="1.6rem">
            Leave a tip?
          </Typography>
        </Grid>
        <Grid container xs={12} style={{ marginBottom: "3%" }}>
          <Grid item xs={4} style={{ paddingRight: "2%", height: "100px" }}>
            <BlueBox>
              <TipAmount>15%</TipAmount>
            </BlueBox>
          </Grid>
          <Grid item xs={4} style={{ paddingRight: "2%", width: "30%" }}>
            <BlueBox>
              <TipAmount>25%</TipAmount>
            </BlueBox>
          </Grid>
          <Grid item xs={4}>
            <BlueBox>
              <TipAmount>25%</TipAmount>
            </BlueBox>
          </Grid>
        </Grid>
        <Grid container xs={12}>
          <div style={{ minWidth: "100%", height: "50px" }}>
            <BlueBox>
              <Typography
                color="#F0F4F5"
                textTransform="none"
                variant="subtitle1"
              >
                Custom
              </Typography>
            </BlueBox>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

type Props = {
  children: ReactElement | string;
};

function TipAmount(props: Props) {
  return (
    <Typography color="#F0F4F5" textTransform="none" variant="h4">
      {props.children}
    </Typography>
  );
}
export default App;
