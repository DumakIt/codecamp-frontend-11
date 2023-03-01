import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 3%;
  & img {
    width: 110px;
    cursor: pointer;
  }
`;

export const ProfileWrapper = styled.div`
  width: 50%;
  & > img {
    width: 100%;
  }
`;
