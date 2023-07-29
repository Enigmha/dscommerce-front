import './styles.css';
import cartIcon from '../../assets/cart.svg';

export default function HeaderClient() {

    return (
    <header className="dcs-header-client">
      <nav className="dsc-container">
        <h1>DsCommerce</h1>
        <div className="dsc-navbar-right">
          <div className="dsc-menu-item-container">
            <div className="dsc-menu-item">
              <img src={cartIcon} alt="Carrinho de compras" />
            </div>
          </div>
          <a href="#">Entrar</a>
        </div>
      </nav>
    </header>
  );
}
