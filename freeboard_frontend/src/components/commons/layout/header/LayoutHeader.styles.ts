import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 3%;
  border: 1px solid blue;
  & > img {
    width: 110px;
    cursor: pointer;
    border: 1px solid blue;
  }
`;

export const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 1px solid red;
  width: 10%;
  height: 100%;

  & > img {
    border: 1px solid #828282;
    border-radius: 50%;
    aspect-ratio: 1/1;
    object-fit: cover;
    height: 100%;
  }
`;
