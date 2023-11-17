import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex align-items-center gap-30">
                <img src="../images/newsletter.png" alt="Newsletter" />
                <h2 className="mb-0 text-white">Cadastre-se para Newsletter</h2>
              </div>
            </div>
            <div className="col-7">
              <div className="input-group">
                <input type="text" className="form-control py-1" placeholder="Seu melhor email" aria-label="Seu melhor email" aria-describedby="basic-addon2" />
                <span className="input-group-text p-2" id="basic-addon2">
                  Cadastrar
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-4">
              <h4 className="text-white mb-4">Contato</h4>
              <div>
                <address className="text-white fs-6">
                  Rua Alguma Rua, <br />
                  Bairro, Cidade <br />
                  CEP: 12345-678
                </address>
                <a className="d-block text-white mt-3 mb-1" href="tel:+55 00 98765432">+55 (00)9876-5432</a>
                <a className="d-block text-white mt-2 mb-0" href="mailto:email@email.com">email@email.com</a>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Informações</h4>
              <div className="footer-links d-flex flex-column">
                <Link to="/privacy-policy" className="text-white py-2 mb-1">Política de Privacidade</Link>
                <Link to="/refund-policy" className="text-white py-2 mb-1">Política de Devolução</Link>
                <Link to="/shipping-policy" className="text-white py-2 mb-1">Política de Entrega</Link>
                <Link to="/terms-conditions" className="text-white py-2 mb-1">Termos & Condições</Link>
                <Link to="/blog" className="text-white py-2 mb-1">Blogs</Link>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Conta</h4>
              <div className="footer-links d-flex flex-column">
                <Link to="" className="text-white py-2 mb-1">Sobre nós</Link>
                <Link to="" className="text-white py-2 mb-1">FAQ</Link>
                <Link to="" className="text-white py-2 mb-1">Contato</Link>
              </div>
            </div>
            <div className="col-2">
              <h4 className="text-white mb-4">Links Rápidos</h4>
              <div className="footer-links d-flex flex-column">
                <Link to="" className="text-white py-2 mb-1">Laptops</Link>
                <Link to="" className="text-white py-2 mb-1">Headphones</Link>
                <Link to="" className="text-white py-2 mb-1">Tablets</Link>
                <Link to="" className="text-white py-2 mb-1">Relógios</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center mb-0 text-white">
                By Cristian Braga &copy; {new Date().getFullYear()}
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;