import styled from "@emotion/styled";
import { useState } from "react";
import LayoutBanner from "./banner";
import LayoutHeader from "./header";
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
  const [logoPath, setLogoPath] = useState("");
  return (
    <Container>
      <LayoutSlideBar setLogoPath={setLogoPath} />
      <LayoutHeader logoPath={logoPath} />
      <LayoutBanner />
      <LayoutBody>{props.children}</LayoutBody>
    </Container>
  );
}
