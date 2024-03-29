import { ChangeEvent, Dispatch, MouseEvent, MutableRefObject, SetStateAction } from "react";

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
  images: {
    0: string;
  };
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
  onChangeAddressDetail: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickAddressBtn: (event: MouseEvent<HTMLButtonElement>) => void;
  AddressComplete: (event: any) => void;
  onClickWrite: (event: MouseEvent<HTMLButtonElement>) => void;

  onClickUpdate: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickCancel: () => void;
  setImages: Dispatch<
    SetStateAction<{
      0: string;
    }>
  >;
  zipcode: string;
  address: string;
  addressModalOpen: boolean;
  images: {
    0: string;
  };

  writerErr: string;
  passwordErr: string;
  titleErr: string;
  ContentsErr: string;
  isActive: boolean;
  isEdit: boolean;
  data: any;
}
