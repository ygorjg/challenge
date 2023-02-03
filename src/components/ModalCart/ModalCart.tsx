import { useContext } from "react";
import { ModalContext } from "../../contexts/ModalContext";

const ModalCart = () => {
  const { setModalCart } = useContext(ModalContext);

  return (
    <div>
      <div>
        <h4>Carrinho de compras</h4>
        <button onClick={() => setModalCart(false)}>X</button>
      </div>
      <div>Apple Watch Series 4 GPS</div>
      <div>
        <span>- 1 +</span>
        <span>R$399</span>
      </div>
    </div>
  );
};

export default ModalCart;
