import styled from "@emotion/styled";

export const Container = styled.div`
  width: 130px;
  border: 1px solid red;
`;

export const ContentsWrapper = styled.div`
  width: 100%;
  height: 150px;
  border: 1px solid red;
  & > div {
    text-align: center;
    padding-top: 6px;
  }
`;

export const ContentsImgWrapper = styled.div`
  width: 100%;
  height: 80%;
  border: 1px solid blue;
`;

export const ContentsImg = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
`;
