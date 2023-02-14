import styled from "@emotion/styled";
import LayoutBanner from "./banner";
import LayoutHeader from "./header/LayoutHeader.container";
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

const MyWebs = [
  { title: "자유게시판", contents: "어떤 것들을 배웠고 어떤 기술을 사용했고 이런것을 느꼈다", page: "/boards/" },
  { title: "고양이갤러리", contents: "어떤 것들을 배웠고 어떤 기술을 사용했고 이런것을 느꼈다", page: "/catGallery/" },
  { title: "중고마켓", contents: "어떤 것들을 배웠고 어떤 기술을 사용했고 이런것을 느꼈다", page: "/boards/" },
  { title: "마이페이지", contents: "어떤 것들을 배웠고 어떤 기술을 사용했고 이런것을 느꼈다", page: "/boards/" },
];

export default function Layout(props: ILayoutProps): JSX.Element {
  return (
    <Container>
      <LayoutSlideBar MyWebs={MyWebs} />
      <LayoutHeader MyWebs={MyWebs} />
      <LayoutBanner />
      <LayoutBody>{props.children}</LayoutBody>
    </Container>
  );
}
