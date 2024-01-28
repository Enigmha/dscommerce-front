import "./styles.css";

import SeachBar from "../../../components/SearchBar";
import CatalogCard from "../../../components/CatalogCard";
import ButtonNextPage from "../../../components/ButtonNextPage";
import { ProductDTO } from "../../../models/product";
import { useEffect, useState } from "react";
import * as productService from '../../../services/product-service';



export default function Catalog() {
  const [products, setProducts] = useState<ProductDTO[]>([]);

  const [productName, setProductName] = useState("");


    
  useEffect(() => {
    productService.findPageRequest(0, productName)
    .then(response => {
      setProducts(response.data.content);
    });
  }, [productName]); 
  
    function handleSearch(searchText: string){
      setProductName(searchText);
    }

  return (
    <main>
      <section id="catalog-section" className="dsc-container">
        <SeachBar onSearch={handleSearch} />

        <div className="dsc-catalog-cards dsc-md20 dsc-mt20">          
          {
            products.map(
              product => <CatalogCard key={product.id} product={product} />
            )
          }
        </div>

        <ButtonNextPage />
      </section>
    </main>
  );
}
