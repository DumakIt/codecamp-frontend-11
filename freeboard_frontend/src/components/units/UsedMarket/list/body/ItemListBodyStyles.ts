import styled from "@emotion/styled";

export const ContentsWrapper = styled.div`
  display: flex;
  flex-direction: row;
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
