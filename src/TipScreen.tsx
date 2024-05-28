import { Button, Grid, Typography } from "@mui/material";
import BlueBox from "./BlueBox";
import "./App.css";
import { TipPages } from "./App";
import CloseIcon from "@mui/icons-material/Close";

type Props = {
  setTipPageToShow: Function;
  setTipValue: Function;
};
function TipScreen(props: Props) {
  return (
    <Grid container className={"Container"} direction="column">
      <Grid item xs={12} style={{ marginBottom: "4%" }}>
        <Typography color="#4E4F51" fontSize="1.6rem">
          Leave a tip?
        </Typography>
      </Grid>
      <Grid container xs={12} style={{ marginBottom: "3%" }}>
        <Grid item xs={4} style={{ paddingRight: "2%", height: "100px" }}>
          <BlueBox
            onClick={() => {
              props.setTipValue("15%");
              props.setTipPageToShow(TipPages.COMMENT);
            }}
            nextPage={TipPages.COMMENT}
          >
            15%
          </BlueBox>
        </Grid>
        <Grid item xs={4} style={{ paddingRight: "2%", width: "30%" }}>
          <BlueBox
            onClick={() => {
              props.setTipValue("20%");
              props.setTipPageToShow(TipPages.COMMENT);
            }}
            nextPage={TipPages.COMMENT}
          >
            20%
          </BlueBox>
        </Grid>
        <Grid item xs={4}>
          <BlueBox
            onClick={() => {
              props.setTipValue("25%");
              props.setTipPageToShow(TipPages.COMMENT);
            }}
            nextPage={TipPages.COMMENT}
          >
            25%
          </BlueBox>
        </Grid>
      </Grid>
      <Grid container xs={12}>
        <div style={{ minWidth: "100%", height: "50px" }}>
          <BlueBox onClick={props.setTipPageToShow} nextPage={TipPages.CUSTOM}>
            <Typography variant="subtitle1">Custom</Typography>
          </BlueBox>
        </div>
      </Grid>
    </Grid>
  );
}

export default TipScreen;
