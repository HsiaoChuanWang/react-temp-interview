import { useContext, useState } from "react";
import Button from "./components/Button";
import Input from "./components/Input";
import { UserContext } from "./userContext";

function Modal() {
  const [nameInput, setNameInput] = useState("");
  const [phoneInput, setPhoneInput] = useState("");
  const { isOpened, setIsOpened, userInfo, setUserInfo } =
    useContext(UserContext);

  function closeModal() {
    setIsOpened(false);
  }

  function stopPropagation(e: React.MouseEvent) {
    e.stopPropagation();
  }

  function handleNameInput(e: React.ChangeEvent<HTMLInputElement>) {
    setNameInput(e.target.value);
  }

  function handlePhoneInput(e: React.ChangeEvent<HTMLInputElement>) {
    setPhoneInput(e.target.value);
  }

  function vaildation(name: string, phone: string): boolean {
    if (!name.trim() || !phone.trim()) {
      alert("欄位不得空白");
      return false;
    }

    const isAllNumber = /^\d+$/.test(phone);
    if (!isAllNumber) {
      alert("電話號碼只能包含數字");
      return false;
    }

    setUserInfo({ name, phone });
    closeModal();
    setNameInput("");
    setPhoneInput("");
    return true;
  }

  function handleSubmit() {
    if (vaildation(nameInput, phoneInput)) {
      fetch(`/api/user`, {
        method: "POST",
        body: JSON.stringify(userInfo),
      })
        .then((res) => {
          if (!res.ok) {
            throw new Error("Network response was not ok");
          }
          return res.json();
        })
        .then((res) => {
          console.log("success", res);
        })
        .catch((err) => console.error(err));
    }
  }

  return (
    <div
      className={`${
        isOpened ? "block" : "hidden"
      } w-screen h-screen flex justify-center items-center fixed top-0 z-10 bg-black/60`}
      onClick={closeModal}
    >
      <div
        className="bg-white w-96 h-96 flex justify-center items-center flex-col gap-y-8 p-12 z-20"
        onClick={stopPropagation}
      >
        <Input
          onChange={handleNameInput}
          placeholder="輸入姓名"
          value={nameInput}
        />

        <Input
          onChange={handlePhoneInput}
          placeholder="輸入電話"
          value={phoneInput}
        />

        <Button
          onClick={handleSubmit}
          otherStyles="w-full mt-28"
          children="確認"
        />
      </div>
    </div>
  );
}

export default Modal;
