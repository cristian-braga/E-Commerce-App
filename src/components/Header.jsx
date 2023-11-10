import { NavLink, Link } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs';

const Header = () => {
  return (
    <>
      <header className="header-top-strip py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <p className="text-white mb-0">
                Frete GRÁTIS acima de $100 & Devolução GRÁTIS
              </p>
            </div>
            <div className="col-6">
              <p className="text-end text-white mb-0">
                Hotline: <a className="text-white" href="tel:+55 00 98765432">+55 (00)9876-5432</a>
              </p>
            </div>
          </div>
        </div>
      </header>
      <header className="header-upper py-3">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-2">
              <h2>
                <Link className="text-white">Digitic.</Link>
              </h2>
            </div>
            <div className="col-5">
              <div className="input-group">
                <input type="text" className="form-control py-2" placeholder="Encontrar produtos..." aria-label="Encontrar produtos..." aria-describedby="basic-addon2" />
                <span className="input-group-text p-3" id="basic-addon2">
                  <BsSearch className="fs-6" />
                </span>
              </div>
            </div>
            <div className="col-5">
              <div className="header-upper-links d-flex align-items-center justify-content-between">
                <div>
                  <Link to="/compare-products" className="d-flex align-items-center text-white gap-10">
                    <img src="../images/compare.svg" alt="Comparar" />
                    <p className="mb-0">
                      Comparar <br /> produtos
                    </p>
                  </Link>
                </div>
                <div>
                  <Link to="/wishlist" className="d-flex align-items-center text-white gap-10">
                    <img src="../images/wishlist.svg" alt="Favoritos" />
                    <p className="mb-0">
                      Favoritos
                    </p>
                  </Link>
                </div>
                <div>
                  <Link to="/login" className="d-flex align-items-center text-white gap-10">
                    <img src="../images/user.svg" alt="Login" />
                    <p className="mb-0">
                      Login <br /> Minha conta
                    </p>
                  </Link>
                </div>
                <div>
                  <Link to="/cart" className="d-flex align-items-center text-white gap-10">
                    <img src="../images/cart.svg" alt="Carrinho" />
                    <div className="d-flex flex-column gap-10">
                      <span className="badge bg-white text-dark">0</span>
                      <p className="mb-0">$500</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <header className="header-bottom py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="menu-bottom d-flex align-items-center gap-30">
                <div>
                  <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle bg-transparent border-0 d-flex align-items-center gap-15" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Categorias
                    </button>
                    <ul className="dropdown-menu">
                      <li><Link to="" className="dropdown-item text-white">Action</Link></li>
                      <li><Link to="" className="dropdown-item text-white">Another action</Link></li>
                      <li><Link to="" className="dropdown-item text-white">Something else here</Link></li>
                    </ul>
                  </div>
                </div>
                <div className="menu-links">
                  <div className="d-flex align-items-center gap-15">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/product">Loja</NavLink>
                    <NavLink to="/blog">Blog</NavLink>
                    <NavLink to="/contact">Contato</NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;