import { Grid, TextField, Typography } from "@mui/material";
import "./App.css";
import BlueBox from "./BlueBox";
import { TipPages } from "./App";
import { useState } from "react";
import { DisabledByDefault } from "@mui/icons-material";

type Props = {
  setTipPageToShow: Function;
  addComment: Function;
  disabled?: boolean;
};
function CommentAndSubmit(props: Props) {
  let [comment, setComment] = useState<String>("");

  let submitTip = (tipPage: TipPages) => {
    props.addComment(comment);
    props.setTipPageToShow(tipPage);
  };

  return (
    <Grid container className={"Container"} direction="column">
      <Grid item xs={12} style={{ marginBottom: "4%", width: "100%" }}>
        <Typography style={{ marginBottom: "3%" }}>Leave a comment!</Typography>
        <TextField
          fullWidth={true}
          multiline={true}
          onChange={(e) => {
            setComment(e.target.value);
          }}
        ></TextField>
      </Grid>

      <div style={{ minWidth: "100%", height: "50px" }}>
        <BlueBox
          onClick={submitTip}
          nextPage={TipPages.TIP}
          disabled={comment == "" || props.disabled}
        >
          <Typography variant="subtitle1">Submit</Typography>
        </BlueBox>
      </div>
    </Grid>
  );
}

export default CommentAndSubmit;
