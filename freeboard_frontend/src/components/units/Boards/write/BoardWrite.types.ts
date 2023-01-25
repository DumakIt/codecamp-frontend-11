import { ChangeEvent, MouseEvent } from "react";

export interface IBoardWriteProps {
  isEdit: boolean;
  data?: any;
}

export interface IBoardAddress {
  zipcode: string;
  address: string;
  addressDetail: string;
}

export interface IUpdateBoardInput {
  title?: string;
  contents?: string;
  boardAddress: IBoardAddress;
  youtubeUrl?: string;
}

export interface IMyVariables {
  password: string;
  boardId: string;
  updateBoardInput: IUpdateBoardInput;
}

export interface IRegBtn {
  isActive: boolean;
}

export interface IBoardWriteUi {
  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeTitle: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onChangeYoutubeUrl: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeZipcode: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeAddress: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeAddressDetail: (event: ChangeEvent<HTMLInputElement>) => void;
  checkErr: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickUpdate: (event: MouseEvent<HTMLButtonElement>) => void;
  writerErr: string;
  passwordErr: string;
  titleErr: string;
  ContentsErr: string;
  isActive: boolean;
  isEdit: boolean;
  data: any;
}
