import "./styles.css";
import homeIcons from  "../../assets/home.svg";
import productsIcons from  "../../assets/products.svg";

export default function HeaderAdmin() {
  return (
    <header className="dsc-header-admin">
      <nav className="dsc-container">
        <h1>DSC Admin</h1>
        <div className="dsc-navbar-right">
          <div className="dsc-menu-items-container">
            <div className="dsc-menu-item">
              <img src={homeIcons} alt="Início" />
              <p>Início</p>
            </div>
            <div className="dsc-menu-item">
              <img src={productsIcons} alt="Cadastro de produtos" />
              <p className="dsc-menu-item-active">Produtos</p>
            </div>
          </div>
          <div className="dsc-logged-user">
            <p>Maria Silva</p>
            <a href="#">Sair</a>
          </div>
        </div>
      </nav>
    </header>
  );
}
