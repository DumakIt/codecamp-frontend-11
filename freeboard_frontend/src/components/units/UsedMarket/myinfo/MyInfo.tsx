import { useWithAuth } from "../../../commons/hooks/custom/useWithAuth";
import MyInfoHeader from "./header/MyInfoHeader";
import styled from "@emotion/styled";

const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function MyInfo(): JSX.Element {
  // useWithAuth();
  return (
    <Container>
      <MyInfoHeader />
    </Container>
  );
}
