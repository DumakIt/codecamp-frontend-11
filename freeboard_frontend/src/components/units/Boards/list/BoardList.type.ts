import { IQuery, IQueryFetchBoardsArgs } from "./../../../../commons/types/generated/types";
import { MouseEvent } from "react";
import { ApolloQueryResult } from "@apollo/client";
export interface IBoardListUI {
  data: any;
  lastListNum?: number;
  refetch: (variables?: Partial<IQueryFetchBoardsArgs> | undefined) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoards">>>;
  onClickTitle: (event: MouseEvent<HTMLDivElement>) => void;
  onClickBoardWrite: (event: MouseEvent<HTMLButtonElement>) => void;
}

export interface IEl {
  _id: string;
  title: string;
  writer: string;
  createdAt: string;
}
