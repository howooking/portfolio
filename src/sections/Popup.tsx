import React, { useContext } from "react";

type Props = {
  openType: string;
};

export default function Popup({ openType }: Props) {
  const popupMap: { [key: string]: React.ComponentType } = {
    Phone: PhonePopup,
    Number: NumberPopup,
    Bank: BankPopup,
    Password: PasswordPopup,
  };
  const popupComponent = popupMap[openType];

  if (!popupComponent) {
    return (
      <PopupTemplate>
        <span>잘못된 접근입니다.</span>
      </PopupTemplate>
    );
  }

  return (
    <PopupTemplate>
      <popupComponent />
    </PopupTemplate>
  );
}

const PhonePopup = () => {
  return <div>휴대폰 변경</div>;
};

const NumberPopup = () => {
  return <div>사업자 변경</div>;
};

const BankPopup = () => {
  return <div>계좌 변경</div>;
};

const PasswordPopup = () => {
  return <div>비밀번호 변경</div>;
};

const PopupTemplate = ({ children }) => {
  const { setPopup } = React.useContext(PopupContext);
  return (
    <div
      className={"fixed bg-transparent"}
      style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
    >
      <div
        className={
          "flex h-[500px] w-[800px] items-center justify-center rounded-[10px] border-2 bg-white"
        }
      >
        {children}
        <button onClick={() => setPopup(false)}>닫기</button>
      </div>
    </div>
  );
};
