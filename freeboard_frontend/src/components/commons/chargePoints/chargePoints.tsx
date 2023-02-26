import { Modal } from "antd";
import { useForm } from "react-hook-form";
import { IQuery } from "../../../commons/types/generated/types";
import { useEffectChargePointsLoad } from "../hooks/custom/useEffectChargePointsLoad";
import { useSetIsToggle } from "../hooks/custom/useSetIsToggle";
import { useMutationCreatePointTransactionOfLoading } from "../hooks/mutation/useMutationCreatePointTransactionOfLoading";

declare const window: typeof globalThis & {
  IMP: any;
};

interface IOnClickChargeFormData {
  amount: string;
}

interface IChargePointsProps {
  data: Pick<IQuery, "fetchUserLoggedIn"> | undefined;
}

export default function ChargePoints(props: IChargePointsProps): JSX.Element {
  const [isToggle, changeIsToggle] = useSetIsToggle();
  const [isOpen, changeIsOpen] = useSetIsToggle();
  useEffectChargePointsLoad(changeIsToggle);
  const { register, handleSubmit } = useForm<IOnClickChargeFormData>();
  const { createPointTransactionOfLoading } = useMutationCreatePointTransactionOfLoading();

  const onClickCharge = (value: IOnClickChargeFormData) => {
    const IMP = window.IMP;
    IMP.init("imp49910675");

    IMP.request_pay(
      {
        pg: "kakaopay",
        pay_method: "card",
        name: "포인트 충전",
        amount: value.amount,
        buyer_email: props.data?.fetchUserLoggedIn.email,
        buyer_name: props.data?.fetchUserLoggedIn.name,
      },
      (rsp: any) => {
        // callback
        if (rsp.success) {
          changeIsOpen();
          createPointTransactionOfLoading({ impUid: rsp.imp_uid });
        } else {
          Modal.error({
            title: "충전을 실패했습니다",
            content: "확인 후 다시 시도해주세요.",
            onOk() {
              changeIsOpen();
            },
          });
        }
      }
    );
  };

  return (
    <div>
      <button onClick={changeIsOpen}>충전하기</button>
      {isToggle ? (
        isOpen && (
          <Modal title="충전하실 금액을 입력해주세요." open={true} onCancel={changeIsOpen} footer={null}>
            <form onSubmit={handleSubmit(onClickCharge)}>
              <input type="number" {...register("amount")} />
              <span>원</span>
              <button type="button" onClick={changeIsOpen}>
                취소하기
              </button>
              <button>충전하기</button>
            </form>
          </Modal>
        )
      ) : (
        <div>로딩안됨</div>
      )}
    </div>
  );
}
