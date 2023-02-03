import styled from "@emotion/styled";

export const SlideBarCon111tainer = styled.div`
  width: 500px;
  &:hover div:first-of-type {
    left: 0;
  }
`;

export const SlideBarContainer = styled.div`
  z-index: 2;
  width: 20%;
  height: 100%;
  padding: 0 30px 30px;
  position: fixed;
  left: -20%;

  background-color: #ffd601;

  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const SlideBarHover = styled.div`
  z-index: 2;
  background-color: red;
  width: 40px;
  height: 250px;
  position: fixed;
  left: 20%;
  top: 50%;
  transform: translate(0, -50%);
  border: 1px solid red;
`;

export const MyWebsWrapper = styled.div`
  margin-top: 30px;
  padding: 20px;
  height: 400px;
  background-color: white;
  border-radius: 40px;
  box-shadow: 0 2px 8px 0 rgba(99, 99, 99, 0.4);
  cursor: pointer;
`;

export const MyWebsImg = styled.div`
  height: 200px;
  border-radius: 20px;
  background-color: #bdbdbd;
`;

export const MyWebsTitle = styled.div`
  margin: 15px 0 5px;
  font-size: 22px;
  font-weight: bolder;
`;

export const MyWebsContents = styled.div`
  font-size: 12px;
`;
