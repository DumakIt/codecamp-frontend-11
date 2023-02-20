import styled from "@emotion/styled";

export const Container = styled.div`
  max-width: 1000px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const ContentsWrapper = styled.div`
  margin: 20px;
  width: 250px;
  height: 350px;
  border: 1px solid #bdbdbd;
`;

export const ImgWrapper = styled.div`
  height: 250px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #bdbdbd;

  & > img {
    width: 100%;
    object-fit: contain;
  }
`;

interface IContentsTitleProps {
  isKeyword: boolean;
}

export const ContentsTitle = styled.div`
  margin: 10px;
`;

export const ContentsTitleSpan = styled.span`
  background-color: ${(props: IContentsTitleProps) => (props.isKeyword ? "yellow" : "")};
`;

export const ContentsSeller = styled.div`
  margin: 10px;
`;
