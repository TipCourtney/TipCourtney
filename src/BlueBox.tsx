import { Button, Typography, useTheme } from "@mui/material";
import { Component, ReactElement } from "react";

type Props = {
  children: ReactElement | string;
};
export default class BlueBox extends Component<Props> {
  render() {
    return (
      <Button
        style={{
          backgroundColor: "#1466F0",
          minHeight: "100%",
          borderRadius: 0,
        }}
        fullWidth
      >
        {this.props.children}
      </Button>
    );
  }
}
