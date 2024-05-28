import { Button } from "@mui/material";
import { TipAndComment, TipPages } from "./App";

type Props = {
  setTipPageToShow: Function;
  comments: TipAndComment[];
};
export default function ViewComments(props: Props) {
  return (
    <div>
      <ul>
        {props.comments.map((comment) => (
          <li>
            {comment.tip} - {comment.comment}
          </li>
        ))}
      </ul>
      <Button
        onClick={() => {
          props.setTipPageToShow(TipPages.TIP);
        }}
      >
        Return
      </Button>
    </div>
  );
}
