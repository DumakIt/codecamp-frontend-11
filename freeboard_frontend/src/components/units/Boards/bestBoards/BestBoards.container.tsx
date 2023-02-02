import * as S from "./BestBoards.styles";
import { gql, useQuery } from "@apollo/client";
import { IQuery } from "../../../../commons/types/generated/types";
import { useRouter } from "next/router";

const FETCH_BOARDS_OF_THE_BEST = gql`
  query {
    fetchBoardsOfTheBest {
      _id
      writer
      title
      contents
      likeCount
      user {
        picture
      }
    }
  }
`;

export default function BestBoards() {
  const { data } = useQuery<Pick<IQuery, "fetchBoardsOfTheBest">>(FETCH_BOARDS_OF_THE_BEST);
  const router = useRouter();

  const onclickBestBoard = (event) => {
    router.push(`/boards/${event.currentTarget.id}`);
  };

  return (
    <S.BestBoardContainer>
      {data?.fetchBoardsOfTheBest.map((el, index) => (
        <S.BestBoardWrapper id={el._id} key={el._id} onClick={onclickBestBoard}>
          <S.UserInfoWrapper>
            <div>BEST {index + 1}위</div>
            <div>
              <img src={el.user?.picture ? `/fetchBoard/${el.user.picture}` : "/fetchBoard/profile.png"} />
            </div>

            <div>{el.writer}</div>
            <S.UserInfoLike>
              <img src="/fetchBoard/like.png" /> {el.likeCount}
            </S.UserInfoLike>
          </S.UserInfoWrapper>
          <S.ContentsWrapper>
            <S.ContentsTitle>{el.title}</S.ContentsTitle>
            <S.ContentsDetail>{el.contents}</S.ContentsDetail>
          </S.ContentsWrapper>
        </S.BestBoardWrapper>
      ))}
    </S.BestBoardContainer>
  );
}
