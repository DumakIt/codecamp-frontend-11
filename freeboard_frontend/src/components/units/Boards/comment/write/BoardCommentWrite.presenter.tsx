import * as Style from "./BoardCommentWrite.styles";
import { ICommentWriteUI, IEl } from "./BoardCommentWrite.types";

export function CommentWriteUI(props: ICommentWriteUI) {
  return (
    <Style.CommentContainer>
      <Style.WriteWrapper>
        <Style.InfoBox>
          <Style.InfoBoxInput type="text" placeholder="닉네임" onChange={props.onChangeWriter} disabled={props.isEdit ? true : false} value={props.writer} />
          <Style.InfoBoxInput type="password" placeholder="비밀번호" onChange={props.onChangePassword} value={props.password} />
          <Style.WriteButton onClick={props.isEdit ? props.onClickUpdate : props.onClickCreate}>{props.isEdit ? "수정" : "등록"}</Style.WriteButton>
        </Style.InfoBox>
        <Style.WriteComment onChange={props.onChangeContents} placeholder={props.isEdit ? "수정할 내용을 입력해 주세요" : "댓글을 작성해 주세요."} value={props.contents}></Style.WriteComment>
      </Style.WriteWrapper>

      {props.data?.fetchBoardComments.map((el: IEl) => (
        <Style.FetchWrapper key={el._id}>
          <Style.FetchUserBox>
            <Style.FetchUserProfile src="/fetchBoard/profile.png" />
            <Style.FetchUserWriter>{el.writer}</Style.FetchUserWriter>
          </Style.FetchUserBox>

          <Style.FetchCommentBox>
            <Style.FetchCommentUtilityBox>
              <div>
                {el.rating} / 5 | {el.createdAt.slice(0, 10).replaceAll("-", ".")}
              </div>
              <Style.CommentUtility>
                <Style.CommentUtilityImg className={el._id} src="/comment/update.png" onClick={props.onClickUpdateMove} />
                <Style.CommentUtilityImg className={el._id} src="/comment/delete.png" onClick={props.onClickDelete} />
              </Style.CommentUtility>
            </Style.FetchCommentUtilityBox>

            <Style.FetchCommentLine></Style.FetchCommentLine>

            <Style.FetchComment>{el.contents}</Style.FetchComment>
          </Style.FetchCommentBox>
        </Style.FetchWrapper>
      ))}
    </Style.CommentContainer>
  );
}
