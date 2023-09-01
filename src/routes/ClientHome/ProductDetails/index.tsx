import "./styles.css";
import ButtonInverse from "../../../components/ButtonInverse";
import ButtonPrimary from "../../../components/ButtonPrimary";
import ProductDetailsCard from "../../../components/ProductDetailsCard";

import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { ProductDTO } from "../../../models/product";

export default function ProductDetails() {
  const params = useParams();

  const navigate = useNavigate();

  const [product, setProduct] = useState<ProductDTO>();

  useEffect(() => {
    axios.get(`http://localhost:8080/products/${params.productId}`)
      .then(reponse => {
        console.log(reponse.data);
        setProduct(reponse.data);
      })
      .catch(() =>{
        navigate("/");
      });
  }, []);

  

  return (
    <main>
      <section id="product-details-section" className="dsc-container">
        {
          product &&
             <ProductDetailsCard product={product} />

        }
        <div className="dsc-btn-page-container">
          <ButtonPrimary text="Comprar" />
          <Link to={"/"}>
            <ButtonInverse text="Inicio" />
          </Link>
        </div>
      </section>
    </main>
  );
}
