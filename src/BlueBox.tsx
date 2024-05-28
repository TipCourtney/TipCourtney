import { Button, Typography, useTheme } from "@mui/material";
import { Component, ReactElement } from "react";
import { TipPages } from "./App";

type Props = {
  children: ReactElement | string;
  onClick: Function;
  nextPage: TipPages;
  disabled?: boolean;
};
export default class BlueBox extends Component<Props> {
  render() {
    return (
      <Button
        style={{
          backgroundColor: this.props.disabled ? "#c0c0c0" : "#1466F0",
          minHeight: "100%",
          borderRadius: 0,
        }}
        fullWidth
        onClick={() => {
          this.props.onClick(this.props.nextPage);
        }}
        disabled={this.props.disabled}
      >
        <Typography color="#F0F4F5" textTransform="none" variant="h4">
          {this.props.children}
        </Typography>
      </Button>
    );
  }
}
