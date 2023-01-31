import { ApolloQueryResult } from "@apollo/client";
import { MouseEvent } from "react";
import { IQuery, IQueryFetchBoardsArgs } from "../../../commons/types/generated/types";
export interface IPaginationPageProps {
  lastListNum?: number;
  refetch: (variables: Partial<IQueryFetchBoardsArgs>) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoards">>>;
}

export interface IPaginationUIProps {
  startPage: number;
  lastPage: number;
  onClickListNum: (event: MouseEvent<HTMLSpanElement>) => void;
  onClickPrev: () => void;
  onClickNext: () => void;
}
