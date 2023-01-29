import { MouseEvent } from "react";
export interface IBoardListUI {
  data: any;
  onClickTitle: (event: MouseEvent<HTMLDivElement>) => void;
  onClickBoardWrite: (event: MouseEvent<HTMLButtonElement>) => void;
}

export interface IEl {
  _id: string;
  title: string;
  writer: string;
  createdAt: string;
}
