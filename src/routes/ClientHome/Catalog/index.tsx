import "./styles.css";

import SeachBar from "../../../components/SearchBar";
import CatalogCard from "../../../components/CatalogCard";
import ButtonNextPage from "../../../components/ButtonNextPage";
import { ProductDTO } from "../../../models/product";

const product: ProductDTO = {
  id: 2,
  name: "Smart TV",
  description: "essa TV  tem 55 polegadas, led",
  imgUrl:
    "data:image/jpeg;base64,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",
  price: 5800.0,
  categories: [
    {
      id: 2,
      name: "eletronico",
    },
    {
      id: 3,
      name: "computadores",
    },
    {
      id: 4,
      name: "importados",
    },
  ],
};

export default function Catalog() {
  return (
    <main>
      <section id="catalog-section" className="dsc-container">
        <SeachBar />

        <div className="dsc-catalog-cards dsc-md20 dsc-mt20">
          <CatalogCard product={product} />
          <CatalogCard product={product} />
          <CatalogCard product={product} />
          <CatalogCard product={product} />
          <CatalogCard product={product} />
          <CatalogCard product={product} />
          <CatalogCard product={product} />
          <CatalogCard product={product} />
          <CatalogCard product={product} />
          <CatalogCard product={product} />
        </div>

        <ButtonNextPage />
      </section>
    </main>
  );
}
