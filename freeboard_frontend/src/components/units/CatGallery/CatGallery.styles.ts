import styled from "@emotion/styled";
import { Modal, Select } from "antd";

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
  cursor: pointer;

  & div {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 70px;
    color: white;
    opacity: 0;
    z-index: 1;
    transition: all 0.1s linear;
  }

  &:hover {
    img {
      filter: grayscale(100%) blur(3px) brightness(0.5);
      transition: all 0.1s linear;
    }
    div {
      opacity: 1;
    }
  }
`;

export const Img = styled.img`
  cursor: pointer;
  width: 100%;
  height: 100%;
`;

export const CustomModal = styled(Modal)`
  top: 30%;
`;

export const SaveCatContainer = styled.div`
  height: 300px;
  padding: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const SaveCatImg = styled.img`
  width: 44%;
  height: 100%;
  object-fit: contain;
`;

export const ImgInfoContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const TitleWrapper = styled.div`
  margin: 20px 0 30px;
  display: flex;
  flex-direction: column;

  & > div {
    margin-right: 10px;
    margin-top: 5px;
    align-self: flex-end;
    font-size: 12px;
    color: #828282;
  }
`;

export const InputTitle = styled.input`
  margin-top: 5px;
  padding: 0 11px;
  height: 32px;
  border-radius: 8px;
  border: 1px solid #d9d9d9;

  &:focus {
    outline: 1px solid #4096ff;
  }
`;

export const CustomSelect = styled(Select)`
  width: 100%;
`;

export const SelectAddCategoryWrapper = styled.div`
  height: 50px;
  padding: 10px 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-top: 1px solid #d9d9d9;
`;

export const AddCategoryInput = styled.input`
  padding: 0 10px;
  height: 100%;
  width: 75%;
  border: 1px solid #d9d9d9;
  border-radius: 8px;

  &:focus {
    outline: 1px solid #4096ff;
  }
`;

export const AddCategoryBtn = styled.button`
  height: 100%;
  width: 20%;
  border: 1px solid #d9d9d9;
  background-color: white;
  border-radius: 8px;
  font-size: 12px;
  cursor: pointer;
  &:hover {
    background-color: #71b1ff;
    border: none;
  }
`;

export const BtnWrapper = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
`;

export const BtnCancel = styled.button`
  height: 35px;
  width: 70px;
  border-radius: 4px;
  border: none;
  background-color: #d9d9d9;
  cursor: pointer;
`;

export const BtnSave = styled.button`
  margin-left: 15px;
  height: 35px;
  width: 70px;
  border-radius: 4px;
  border: none;
  background-color: #71b1ff;
  cursor: pointer;
`;

export const navBar = styled.div`
  border: 1px solid red;
  position: absolute;
  right: 70px;
  top: 0;
  width: 300px;
  height: 200px;
`;
