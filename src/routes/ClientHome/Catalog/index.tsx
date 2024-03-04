import "./styles.css";

import SeachBar from "../../../components/SearchBar";
import CatalogCard from "../../../components/CatalogCard";
import ButtonNextPage from "../../../components/ButtonNextPage";
import { ProductDTO } from "../../../models/product";
import { useEffect, useState } from "react";
import * as productService from '../../../services/product-service';
import { isAuthenticated } from "../../../services/auth-service";

type QueryParams ={
  page: number;
  name: string;
}


export default function Catalog() {

  const [islastPage, setIsLastPage] = useState(false);

  const [products, setProducts] = useState<ProductDTO[]>([]);

  const [queryParams, setQueryParam] = useState<QueryParams>({
    page: 0,
    name: ""
  });

   
  useEffect(() => {
    console.log("AUTENTICADO", isAuthenticated());
    


    
    productService.findPageRequest(queryParams.page, queryParams.name)
    .then(response => {
      const nextPage = response.data.content;
      setProducts(products.concat(nextPage));
      setIsLastPage(response.data.last);
    });
  }, [queryParams]); 
  
    function handleSearch(searchText: string){
      setProducts([]);
      setQueryParam({...queryParams, page: 0, name: searchText});
    }

    function handleNextPageClick(){
      setQueryParam({...queryParams, page: queryParams.page + 1});
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
        {
          !islastPage &&
          <div onClick={handleNextPageClick}>
            <ButtonNextPage />
      </div>

        }
        
        
      </section>
    </main>
  );
}
