import styled from "@emotion/styled";

export const ListContainer = styled.div`
  position: relative;
`;

export const ListWrapper = styled.div`
  width: 1200px;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
`;

export const ListHeader = styled.div`
  width: 100%;
  padding: 0 40px;
  height: 52px;
  font-weight: 500;
  font-size: 18px;
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: center;

  & > div:first-of-type {
    width: 80px;
    margin-right: 40px;
  }

  & > div:last-of-type {
    width: 80px;
  }

  & > div:nth-of-type(2) {
    width: 700px;
  }

  & > div:nth-of-type(3) {
    width: 80px;
    margin-left: 40px;
    margin-right: 100px;
  }
`;

export const ListBody = styled.div`
  width: 100%;
  padding: 0 40px;
  height: 52px;
  font-weight: 400;
  font-size: 16px;
  color: #4f4f4f;
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: center;
  border-top: 1px solid #bdbdbd;

  & > div:first-of-type {
    width: 80px;
    margin-right: 40px;
  }

  & > div:last-of-type {
    width: 80px;
  }

  & > div:nth-of-type(2) {
    width: 700px;
    cursor: pointer;
  }

  & > div:nth-of-type(3) {
    width: 80px;
    margin-left: 40px;
    margin-right: 100px;
  }
`;

export const WriteBtn = styled.button`
  margin-top: 20px;
  width: 171px;
  height: 52px;
  background-color: white;
  border: 1px solid #bdbdbd;
  border-radius: 10px;
  cursor: pointer;
  position: absolute;
  right: 0;
  font-size: 16px;
`;
