import { useState, useEffect, useContext } from "react";
import axios from "axios";

import { IProduct } from "../../interfaces/interfaces";
import Product from "../Product/Product";
import { Container } from "./style";

import { ModalContext } from "../../contexts/ModalContext";
import ModalCart from "../ModalCart/ModalCart";

const ProductList = () => {
  const { modalCart } = useContext(ModalContext);

  const [productList, setProductList] = useState<IProduct[]>([]);

  useEffect(() => {
    axios
      .get(
        "https://mks-challenge-api-frontend.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=ASC"
      )
      .then((response) => setProductList(response.data.products));
  }, []);

  return (
    <Container>
      {modalCart && <ModalCart />}
      <ul>
        {productList.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </ul>
    </Container>
  );
};

export default ProductList;
