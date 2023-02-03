import { IProductProps } from "../../interfaces/interfaces";
import { Container } from "./style";
import { FiShoppingBag } from "react-icons/fi";

const Product = ({ product }: IProductProps) => {

  return (
    <Container>
      <figure>
        <img src={product.photo} alt={product.name} />
      </figure>
      <div>
        <div className="namePriceContainer">
          <h4>{product.name}</h4>
          <h5>R$ {product.price}</h5>
        </div>
        <p>{product.description}</p>
      </div>
      <button>
        <FiShoppingBag />
        COMPRAR
      </button>
    </Container>
  );
};

export default Product;
