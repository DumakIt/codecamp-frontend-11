import { ChangeEvent, MouseEvent } from "react";

export interface ICommentWriteUI {
  isEdit: boolean;
  data: any;
  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onClickCreate: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickUpdate: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickUpdateMove: (event: MouseEvent<HTMLImageElement>) => void;
  onClickDelete: (event: MouseEvent<HTMLImageElement>) => void;
  writer: string;
  password: string;
  contents: string;
}

export interface IEl {
  _id: string;
  writer: string;
  rating: number;
  createdAt: string;
  contents: string;
}
