import { createContext, useState } from "react";
import { IModalProviderProps, IModalContext } from "../interfaces/interfaces";

export const ModalContext = createContext<IModalContext>({} as IModalContext);

const ModalProvider = ({ children }: IModalProviderProps) => {
  const [modalCart, setModalCart] = useState(false);

  return (
    <ModalContext.Provider value={{ modalCart, setModalCart }}>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
