import "./styles.css";
import { Link } from "react-router-dom";
import CartIcon from "../CartIcon";
import iconAdmin from "../../assets/admin.svg";
import * as authService from '../../services/auth-service';
import { useContext } from "react";
import { ContextToken } from "../../utils/context-token";
import LoggerdUser from "../LoggerdUser";


export default function HeaderClient() {

  const { contextTokenPayload } = useContext(ContextToken);
  return (
    <header className="dcs-header-client">
      <nav className="dsc-container">
        <Link to={"/"}>
          <h1>DsCommerce</h1>
        </Link>
        <div className="dsc-navbar-right">
          <div className="dsc-menu-item-container">
            {
              contextTokenPayload &&
              authService.hasAnyRoles(['ROLE_ADMIN']) &&
            <Link to="/admin">
              <div className="dsc-menu-item">
                <img src={iconAdmin} alt="Admin" />
              </div>
            </Link>


            }
            <Link to={"/cart"}>
              <div className="dsc-menu-item">
                <CartIcon />
              </div>
            </Link>
          </div>
          <LoggerdUser />
        </div>
      </nav>
    </header>
  );
}
