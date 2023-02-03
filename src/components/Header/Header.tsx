import { Container } from "./style";
import { TiShoppingCart } from "react-icons/ti";
import { useContext } from "react";
import { ModalContext } from "../../contexts/ModalContext";

const Header = () => {
  const { setModalCart } = useContext(ModalContext);

  return (
    <Container>
      <h1>
        MKS <span>Sistemas</span>
      </h1>
      <button onClick={() => setModalCart(true)}>
        <TiShoppingCart className="cartIcon" />
        <p>0</p>
      </button>
    </Container>
  );
};

export default Header;
