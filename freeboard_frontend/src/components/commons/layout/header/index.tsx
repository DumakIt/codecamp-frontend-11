import styled from "@emotion/styled";
import { useRouter } from "next/router";

const Wrapper = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 3%;
  & img {
    cursor: pointer;
  }
`;

interface ILayoutHeaderProps {
  MyWebs: {
    title: string;
    contents: string;
    page: string;
  }[];
}

export default function LayoutHeader(props: ILayoutHeaderProps): JSX.Element {
  const router = useRouter();

  const onclickLogo = () => {
    props.MyWebs.forEach((el) => {
      if (router.asPath.includes(el.page)) {
        router.push(el.page);
      }
    });
  };

  return (
    <Wrapper>
      <img src="/layout/CMK-Black-logo.svg" onClick={onclickLogo} />
    </Wrapper>
  );
}
