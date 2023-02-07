import styled from "@emotion/styled";

export const Container = styled.div`
  position: relative;
  margin-top: 40px;
  width: 100%;
  height: 100%;
`;

export const ImgGrid = styled.div`
  margin: auto;
  width: 50%;
  display: grid;
  grid-auto-columns: 1fr 1fr 1fr;
  grid-auto-flow: column dense;
  gap: 20px;
`;

export const ImgContainer = styled.div`
  display: grid;
  row-gap: 20px;
`;

export const ImgWrapper = styled.div`
  position: relative;

  & div {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 70px;
    color: white;
    opacity: 0;
    z-index: 1;
    cursor: pointer;
  }

  &:hover {
    img {
      filter: grayscale(100%) blur(3px);
      transition: all 0.1s linear;
    }
    div {
      opacity: 1;
      transition: all 0.1s linear;
    }
  }
`;

export const Img = styled.img`
  cursor: pointer;
  width: 100%;
  height: 100%;

  /* &:hover {
    filter: blur(3px);
  } */

  /* &:hover {
    filter: blur(3px);
  }
  &:hover + div {
    display: block;
  } */
`;

export const navBar = styled.div`
  border: 1px solid red;
  position: absolute;
  right: 70px;
  top: 0;
  width: 300px;
  height: 200px;
`;
