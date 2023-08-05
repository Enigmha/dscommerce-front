import "./styles.css";
import { ProductDTO } from "../../models/product";
import { Link } from "react-router-dom";

type props = {
  product: ProductDTO;
};

export default function CatalogCard({ product }: props) {
  return (

    <Link to={`podutos-detalhes/${product.id}`}>
      <div className="dsc-card">
        <div className="dsc-catalog-card-top dsc-line-bottom">
          <img src={product.imgUrl} alt={product.name} />
        </div>
        <div className="dsc-catalog-card-bottom">
          <h3>{product.price.toFixed(2)}</h3>
          <h4>{product.name}</h4>
        </div>
      </div>
    </Link>
  );
}
