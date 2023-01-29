import { ChangeEvent, MouseEvent } from "react";

export interface ICommentWriteUI {
  isEdit: boolean;
  isOpen: boolean;
  isOpenDelete: boolean;
  data: any;
  changeIsOpen: () => void;
  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  commentCreate: (value: number) => void;
  onClickUpdate: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickUpdateMove: (event: MouseEvent<HTMLImageElement>) => void;
  onClickDelete: (event: any) => void;
  ChangeIsOpenDelete: (event: any) => void;
  onChangeModalPassword: (event: ChangeEvent<HTMLInputElement>) => void;
  writer: string;
  password: string;
  contents: string;
  rating: number;
}

export interface IEl {
  _id: string;
  writer: string;
  rating: number;
  createdAt: string;
  contents: string;
}
