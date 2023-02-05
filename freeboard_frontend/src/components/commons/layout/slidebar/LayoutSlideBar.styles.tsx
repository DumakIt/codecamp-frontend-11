import styled from "@emotion/styled";

interface IProps {
  isHover: boolean;
}

export const SlideBarContainer = styled.div`
  width: ${(props: IProps) => (props.isHover ? "100%" : "0")};
  height: ${(props: IProps) => (props.isHover ? "100%" : "0")};
  position: fixed;
  z-index: ${(props: IProps) => (props.isHover ? 10 : 1)};

  transition-property: background-color, box-shadow;
  transition-duration: 0.3s;
  transition-timing-function: ease-out;
  background-color: ${(props: IProps) => (props.isHover ? "rgba(0, 0, 0, 0.45)" : "")};

  & > div:hover > :first-of-type {
    left: 0;
    box-shadow: 22px 0 24px rgba(99, 99, 99, 0.4);
  }
`;

export const SlideBarWrapperBody = styled.div`
  z-index: 1;
  width: 20%;
  height: 100%;
  padding: 0 30px 30px;
  position: fixed;
  left: -20%;
  background-color: #ffd601;

  transition: all 0.3s ease-out;

  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const SlideBarRight = styled.div`
  width: 12px;
  height: 180px;

  background-color: white;
  border-radius: 0 12px 12px 0;
  border: 2px solid #bdbdbd;
  border-left: none;
  opacity: 0.7;

  position: fixed;
  top: 20%;
  left: 0;
  transform: translate(0, -50%);
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
