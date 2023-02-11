import styled from "@emotion/styled";

export const ListContainer = styled.div`
  width: 100%;
`;

export const ListWrapper = styled.div`
  position: relative;
  margin: auto;
  width: 1200px;
  border-bottom: 1px solid #4f4f4f;
`;

export const ListHeader = styled.div`
  padding-bottom: 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  border-bottom: 1px solid #4f4f4f;
`;

export const WriteBtn = styled.button`
  width: 170px;
  height: 50px;
  background-color: white;
  border: 1px solid #bdbdbd;
  border-radius: 10px;
  cursor: pointer;
  font-size: 16px;
`;

export const ListTitle = styled.div`
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
  line-height: 52px;
  text-align: center;
  border-top: 1px solid #bdbdbd;

  & > div {
    height: 100%;
  }

  & > div:first-of-type {
    width: 80px;
    margin-right: 40px;
  }

  & > div:last-of-type {
    width: 80px;
  }

  & > div:nth-of-type(2) {
    width: 700px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    cursor: pointer;
    :hover {
      text-decoration: underline;
    }
  }

  & > div:nth-of-type(3) {
    width: 80px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    margin-left: 40px;
    margin-right: 100px;
  }
`;
