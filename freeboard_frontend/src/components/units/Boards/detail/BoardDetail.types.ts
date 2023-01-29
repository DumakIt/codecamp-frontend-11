import { MouseEvent } from "react";

export interface IBoardDetailUI {
  data: any;
  AddressBoxWrapperOpacity: () => void;
  opacity: number;
  onClickDeleteBoard: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickEdit: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickList: (event: MouseEvent<HTMLButtonElement>) => void;
  isDelete: boolean;
  deleteModal: any;
}
