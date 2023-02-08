import styled from "@emotion/styled";

export const BestBoardContainer = styled.div`
  margin: 30px 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

export const BestBoardWrapper = styled.div`
  width: 400px;
  height: 170px;
  display: flex;
  flex-direction: row;
  border-radius: 10px;
  cursor: pointer;

  box-shadow: 0 0.0625em 0.0625em rgba(0, 0, 0, 0.25), 0 0.125em 0.5em rgba(0, 0, 0, 0.25), inset 0 0 0 1px rgba(255, 255, 255, 0.1);
`;

export const UserInfoWrapper = styled.div`
  width: 25%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-right: 1px solid rgba(189, 189, 189, 0.5);
  position: relative;

  & div:first-of-type {
    position: absolute;
    top: -30px;
    left: 0;
  }
`;

export const UserInfoLike = styled.div`
  margin-top: 5px;
  font-size: 14px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;

  & img {
    width: 15px;
    margin-right: 8px;
  }
`;

export const ContentsWrapper = styled.div`
  width: 70%;
  padding: 15px;
`;

export const ContentsTitle = styled.div`
  font-size: 18px;
`;

export const ContentsDetail = styled.div`
  margin-top: 8px;

  font-size: 12px;
`;
