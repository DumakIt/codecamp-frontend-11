import styled from "@emotion/styled";
import LayoutBanner from "./banner";
import LayoutHeader from "./header";
import LayoutSidebar from "./sidebar";
import LayoutSlideBar from "./slidebar/LayoutSlideBar.container";

interface ILayoutProps {
  children: JSX.Element;
}

const Container = styled.div`
  width: 100%;
`;

const LayoutBody = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export default function Layout(props: ILayoutProps): JSX.Element {
  return (
    <Container>
      <LayoutSlideBar />
      <LayoutHeader />
      <LayoutBanner />
      <LayoutBody>{props.children}</LayoutBody>
    </Container>
  );
}
