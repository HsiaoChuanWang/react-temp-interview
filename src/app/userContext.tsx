import { createContext, useState } from "react";

interface UserContextType {
  isOpened: boolean;
  setIsOpened: (isOpened: boolean) => void;
  userInfo: { name: string; phone: string };
  setUserInfo: (userData: { name: string; phone: string }) => void;
}

export const UserContext = createContext<UserContextType>({
  isOpened: false,
  setIsOpened: () => {},
  userInfo: { name: "", phone: "" },
  setUserInfo: () => {},
});

export const UserProvider = ({ children }: any) => {
  const [isOpened, setIsOpened] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: "",
    phone: "",
  });

  return (
    <UserContext.Provider
      value={{
        isOpened,
        setIsOpened,
        userInfo,
        setUserInfo,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
