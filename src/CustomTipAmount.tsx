import {
  Grid,
  InputAdornment,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import CommentAndSubmit from "./CommentAndSubmit";
import { SettingsPhone } from "@mui/icons-material";

type Props = {
  setTipPageToShow: Function;
  addComment: Function;
  setTipValue: Function;
};

function CustomTipAmount(props: Props) {
  return (
    <Grid container className={"Container"} direction="column">
      <OutlinedInput
        style={{ height: "10vh", width: "15vh" }}
        startAdornment={<InputAdornment position="start">$</InputAdornment>}
        label="Amount"
        onChange={(e) => props.setTipValue("$" + e.target.value)}
      ></OutlinedInput>
      <CommentAndSubmit
        setTipPageToShow={props.setTipPageToShow}
        addComment={props.addComment}
      />
    </Grid>
  );
}

export default CustomTipAmount;
