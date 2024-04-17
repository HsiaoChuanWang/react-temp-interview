import { useContext } from "react";
import Button from "./components/Button";
import { UserContext } from "./userContext";

function Card() {
  const { setIsOpened, userInfo } = useContext(UserContext);

  function openInputModal() {
    setIsOpened(true);
  }

  return (
    <div className="min-h-screen bg-white px-12">
      <Button
        onClick={openInputModal}
        otherStyles="my-12 w-32"
        children="開始輸入"
      />

      <div className="border-2 border-black border-solid w-64 p-4">
        <div className="flex gap-2 mb-4">
          <p>姓名</p>
          <p className="max-w-[80%] break-words">{userInfo.name}</p>
        </div>

        <div className="flex gap-2">
          <p>電話</p>
          <p>{userInfo.phone}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
