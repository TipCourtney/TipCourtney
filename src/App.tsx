import React, { ReactElement, useState } from "react";
import "./App.css";
import TipScreen from "./TipScreen";
import CommentAndSubmit from "./CommentAndSubmit";
import CustomTipAmount from "./CustomTipAmount";
import ViewComments from "./ViewComments";
import { Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

function App() {
  let [tipPageToShow, setTipPageToShow] = useState<TipPages>(TipPages.TIP);
  let [tipValue, setTipValue] = useState<String>("");
  let [comments, setComments] = useState<TipAndComment[]>([]);

  let addComment = (comment: String) => {
    let newComment: TipAndComment = { tip: tipValue, comment: comment };
    setComments((comments) => [...comments, newComment]);
  };

  function showTipPage() {
    switch (tipPageToShow) {
      case TipPages.TIP:
        return (
          <TipScreen
            setTipPageToShow={setTipPageToShow}
            setTipValue={setTipValue}
          />
        );
      case TipPages.COMMENT:
        return (
          <CommentAndSubmit
            setTipPageToShow={setTipPageToShow}
            addComment={addComment}
          />
        );
      case TipPages.CUSTOM:
        return (
          <CustomTipAmount
            setTipPageToShow={setTipPageToShow}
            addComment={addComment}
            setTipValue={setTipValue}
          />
        );
      case TipPages.VIEW_COMMENTS:
        return (
          <ViewComments
            setTipPageToShow={setTipPageToShow}
            comments={comments}
          />
        );
    }
  }
  return (
    <div className={"App"}>
      {tipPageToShow == TipPages.TIP ? (
        <Button
          onClick={() => {
            setTipPageToShow(TipPages.VIEW_COMMENTS);
          }}
        >
          <CloseIcon />
        </Button>
      ) : (
        <div></div>
      )}
      {showTipPage()}
    </div>
  );
}

export default App;

export enum TipPages {
  TIP,
  CUSTOM,
  COMMENT,
  VIEW_COMMENTS,
}

export interface TipAndComment {
  tip: String;
  comment: String;
}
