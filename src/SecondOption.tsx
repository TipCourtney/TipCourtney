import { Typography } from "@mui/material";
import BlueBox from "./BlueBox";

export default function SecondOption() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        minHeight: "100%",
      }}
    >
      <Typography>Leave a tip?</Typography>
      <div>
        <BlueBox>15%</BlueBox>
        <BlueBox>20%</BlueBox>
        <BlueBox>25%</BlueBox>
      </div>
      <BlueBox>Custom</BlueBox>
    </div>
  );
}
