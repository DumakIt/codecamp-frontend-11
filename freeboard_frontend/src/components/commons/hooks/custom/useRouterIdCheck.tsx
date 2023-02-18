import { useRouter } from "next/router";

export const useRouterIdCheck = (id: string) => {
  const router = useRouter();
  const queryId = router.query[id];

  if (!queryId) return { id: "undefined" };
  if (typeof queryId === "object") return { id: queryId[0] };

  return { id: queryId };
};
