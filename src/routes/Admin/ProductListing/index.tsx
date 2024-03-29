import "./styles.css";
import * as productService from "../../../services/product-service";
import editIcon from "../../../assets/edit.svg";
import deleteIcon from "../../../assets/delete.svg";
import { useEffect, useState } from "react";
import { ProductDTO } from "../../../models/product";
import SeachBar from "../../../components/SearchBar";
import ButtonNextPage from "../../../components/ButtonNextPage";
import DialoInfo from "../../../components/DialogInfo";
import DialogConfirmation from "../../../components/DialogConfirmation";

type QueryParams = {
  page: number;
  name: string;
};

export default function ProductListing() {

    const [dialogInfoData, setDialogInfoData] = useState({
        visible: false,
        message: "Operação com sucesso",
      });

    const [dialogConfirmationData, setDiadialogConfirmationData] = useState({
        visible: false,
        id: 0,
        message: "Tem Certeza"
      });

  const [islastPage, setIsLastPage] = useState(false);

  const [products, setProducts] = useState<ProductDTO[]>([]);

  const [queryParams, setQueryParam] = useState<QueryParams>({
    page: 0,
    name: "",
  });

  useEffect(() => {
    productService
      .findPageRequest(queryParams.page, queryParams.name)
      .then((response) => {
        const nextPage = response.data.content;
        setProducts(products.concat(nextPage));
        setIsLastPage(response.data.last);
      });
  }, [queryParams]);

  function handleSearch(searchText: string) {
    setProducts([]);
    setQueryParam({ ...queryParams, page: 0, name: searchText });
  }

  function handleNextPageClick() {
    setQueryParam({ ...queryParams, page: queryParams.page + 1 });
  }

  function handleDialogClose(){
    setDialogInfoData({ ...dialogInfoData, visible: false });
  }

  function handleDeleteClick(productId: number){
    setDiadialogConfirmationData({ ...dialogConfirmationData, id: productId, visible: true });
  }

  function handleDialogConfirmationAnswer(answer : boolean, productId: number ){
    if(answer === true){
        productService.deleteById(productId)
           .then(()=> {
            setProducts([]);
            setQueryParam({...queryParams, page: 0});
           })
           .catch(error => {
               setDialogInfoData({
               visible: true,
               message: error.response.data.error
            })
           });
    }



    console.log("Resposta", answer);
    setDiadialogConfirmationData({ ...dialogConfirmationData, visible: false });
  }

  return (
    <main>
      <section id="product-listing-section" className="dsc-container">
        <h2 className="dsc-section-title dsc-mb20">Cadastro de produtos</h2>

        <div className="dsc-btn-page-container dsc-mb20">
          <div className="dsc-btn dsc-btn-white">Novo</div>
        </div>

        <SeachBar onSearch={handleSearch} />

        <table className="dsc-table dsc-mb20 dsc-mt20">
          <thead>
            <tr>
              <th className="dsc-tb576">ID</th>
              <th></th>
              <th className="dsc-tb768">Preço</th>
              <th className="dsc-txt-left">Nome</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td className="dsc-tb576">{product.id}</td>
                <td>
                  <img
                    className="dsc-product-listing-image"
                    src={product.imgUrl}
                    alt={product.name}
                  />
                </td>
                <td className="dsc-tb768">{product.price.toFixed(2)}</td>
                <td className="dsc-txt-left">{product.name}</td>
                <td>
                  <img
                    className="dsc-product-listing-btn"
                    src={editIcon}
                    alt="Editar"
                  />
                </td>
                <td>
                  <img onClick={() => handleDeleteClick(product.id)}
                    className="dsc-product-listing-btn"
                    src={deleteIcon}
                    alt="Deletar"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {!islastPage && <ButtonNextPage onNextPage={handleNextPageClick} />}
      </section>

      {
      dialogInfoData.visible && 
      <DialoInfo 
        message={dialogInfoData.message} 
        onDialogClose={handleDialogClose}
    />
      }
      {
      dialogConfirmationData.visible && 
      <DialogConfirmation
            id={dialogConfirmationData.id}
           message={dialogConfirmationData.message}
           onDialogAnswer={handleDialogConfirmationAnswer}
           />
        }


    </main>
  );
}
