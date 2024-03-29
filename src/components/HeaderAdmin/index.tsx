import "./styles.css";
import homeIcons from "../../assets/home.svg";
import productsIcons from "../../assets/products.svg";
import LoggerdUser from "../LoggerdUser";
import { NavLink } from "react-router-dom";

export default function HeaderAdmin() {
  return (
    <header className="dsc-header-admin">
      <nav className="dsc-container">
        <h1>DSC Admin</h1>
        <div className="dsc-navbar-right">
          <div className="dsc-menu-items-container">
            <NavLink 
              to="/admin/home"
              className={({isActive}) => isActive ? "dsc-menu-item-active" : ""}
            >
              <div className="dsc-menu-item">
                <img src={homeIcons} alt="Início" />
                <p>Início</p>
              </div>
            </NavLink>
            <NavLink to="/admin/products">
              <div className="dsc-menu-item">
                <img src={productsIcons} alt="Cadastro de produtos" />
                <p>Produtos</p>
              </div>
            </NavLink>
          </div>
          <LoggerdUser />
        </div>
      </nav>
    </header>
  );
}