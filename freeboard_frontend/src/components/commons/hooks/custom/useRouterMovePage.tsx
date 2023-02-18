import { useRouter } from "next/router";

export const useRouterMovePage = () => {
  const router = useRouter();

  const onClickMovePage = (path: string) => () => {
    router.push(path);
  };

  const routerMovePage = (path: string) => {
    router.push(path);
  };
  return { onClickMovePage, routerMovePage };
};
