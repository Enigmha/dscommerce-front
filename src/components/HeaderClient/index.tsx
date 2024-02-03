import "./styles.css";
import { Link } from "react-router-dom";
import CartIcon from "../CartIcon";

export default function HeaderClient() {
  return (
    <header className="dcs-header-client">
      <nav className="dsc-container">
        <Link to={"/"}>
          <h1>DsCommerce</h1>
        </Link>
        <div className="dsc-navbar-right">
          <div className="dsc-menu-item-container">
            <Link to={"/cart"}>
              <div className="dsc-menu-item">
                <CartIcon />
              </div>
            </Link>
          </div>
          <Link to={"/login"}>Entrar</Link>
        </div>
      </nav>
    </header>
  );
}
