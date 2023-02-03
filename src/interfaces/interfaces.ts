import { ReactNode } from "react";

export interface IProduct {
  brand: string;
  createdAt: Date;
  description: string;
  id: number;
  name: string;
  photo: string;
  price: string;
  updateAt: Date;
}

export interface IProductProps {
  product: IProduct;
}

export interface IModalProviderProps {
  children: ReactNode;
}

export interface IModalContext {
  modalCart: boolean;
  setModalCart: any;
}
