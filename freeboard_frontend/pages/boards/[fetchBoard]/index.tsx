import BoardDetail from "../../../src/components/units/Boards/detail/BoardDetail.container";
import CommentWrite from "../../../src/components/units/Boards/comment/write/BoardCommentWrite.container";

export default function fetchBoard() {
  return (
    <div>
      <BoardDetail />
      <CommentWrite />
    </div>
  );
}
