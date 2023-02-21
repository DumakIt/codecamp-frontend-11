declare const window: typeof globalThis & {
  IMP: any;
};

export default function PaymentPage(): JSX.Element {
  const onClickPayment = (): void => {
    const IMP = window.IMP;
    IMP.init("imp78262145");

    IMP.request_pay(
      {
        // param
        pg: "kakaopay",
        pay_method: "card",
        // merchant_uid: "ORD20180131-0000011" // 주문번호 주석시 램덤으로 만듬 ,
        name: "구아아아악",
        amount: 1000,
        buyer_email: "gildong@gmail.com",
        buyer_name: "홍길동",
        buyer_tel: "010-4242-4242",
        buyer_addr: "서울특별시 강남구 신사동",
        buyer_postcode: "01181",
        m_redirect_url: "http://localhost:3000/section28/28-01-payment", //  모바일에서는 결제시, 페이지 주소가 바뀜, 따라서 결제 끝나고 돌아갈 주소 입력해야함
      },
      (rsp: any) => {
        // callback
        if (rsp.success === true) {
          // 결제 성공 시 로직,
          console.log(rsp);

          // 백엔드에 결제관련 데이터 넘겨주기 => 즉, 뮤테이션 실행하기
          // createPointTransactionOfLoading
        } else {
          // 결제 실패 시 로직,
        }
      }
    );
  };
  return (
    <>
      {/* jQuery  */}
      <script
        type="text/javascript"
        src="https://code.jquery.com/jquery-1.12.4.min.js"
      ></script>
      {/* iamport.payment.js */}
      <script src="https://cdn.iamport.kr/v1/iamport.js"></script>
      <button onClick={onClickPayment}>결제하기</button>
    </>
  );
}
