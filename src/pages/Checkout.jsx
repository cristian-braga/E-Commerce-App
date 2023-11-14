import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import Container from "../components/Container";

const Checkout = () => {
  return (
    <>
      <Container class1="checkout-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-6">
            <div className="checkout-left-data">
              <h3 className="website-name">Digitic.</h3>
              <nav style={{ "--bs-breadcrumb-divider": "'/';" }} aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/cart" className="text-dark total-price">
                      Carrinho
                    </Link>
                  </li>
                  <li className="breadcrumb-item total-price active">
                    Informações
                  </li>
                  <li className="breadcrumb-item total-price active">
                    Envio
                  </li>
                  <li className="breadcrumb-item total-price active">
                    Pagamento
                  </li>
                </ol>
              </nav>
              <h4 className="title">Informações de Contato</h4>
              <p className="user-details total">
                Alguém (email@email.com)
              </p>
              <h4 className="mb-3">Endereço de Entrega</h4>
              <form className="row g-3">
                <div className="col-md-12">
                  <label for="saved-address" className="form-label">Endereços salvos</label>
                  <select id="saved-address" className="form-select">
                    <option selected disabled>-- Selecione --</option>
                    <option>...</option>
                  </select>
                </div>
                <div className="col-md-12">
                  <label for="country" className="form-label">País</label>
                  <select id="country" className="form-select">
                    <option selected disabled>-- Selecione --</option>
                    <option>...</option>
                  </select>
                </div>
                <div className="col-md-6">
                  <label for="first-name" className="form-label">Nome</label>
                  <input type="text" className="form-control" id="first-name" placeholder="Primeiro nome" />
                </div>
                <div className="col-md-6">
                  <label for="last-name" className="form-label">Sobrenome</label>
                  <input type="text" className="form-control" id="last-name" placeholder="Sobrenome" />
                </div>
                <div className="col-md-12">
                  <label for="address" className="form-label">Address</label>
                  <input type="text" className="form-control" id="address" placeholder="Endereço..." />
                </div>
                <div className="col-md-12">
                  <label for="complement" className="form-label">Complemento...</label>
                  <input type="text" className="form-control" id="complement" placeholder="Apartamento, sala, andar..." />
                </div>
                <div className="col-md-4">
                  <label for="city" className="form-label">Cidade</label>
                  <input type="text" className="form-control" id="city" placeholder="Cidade..." />
                </div>
                <div className="col-md-4">
                  <label for="state" className="form-label">Estado</label>
                  <select id="state" className="form-select">
                    <option selected>-- Selecione --</option>
                    <option>...</option>
                  </select>
                </div>
                <div className="col-md-4">
                  <label for="zip-code" className="form-label">CEP</label>
                  <input type="text" className="form-control" id="zip-code" placeholder="CEP" />
                </div>
                <div className="col-md-12">
                  <Link to="/cart" className="text-dark">
                    <BiArrowBack /> Retornar ao Carrinho
                  </Link>
                  <Link to="/product" className="button float-end">
                    Continuar Comprando
                  </Link>
                </div>
              </form>
            </div>
          </div>
          <div className="col-6">
            <div className="border-bottom py-4">
              <div className="d-flex align-items-center gap-10 mb-2">
                <div className="d-flex gap-10 w-75">
                  <div className="w-25 position-relative">
                    <span style={{ top: "-10px", right: "2px" }} className="badge bg-secondary text-white rounded-circle p-2 position-absolute">
                      1
                    </span>
                    <img src="../images/watch.jpg" alt="watch" className="img-fluid" />
                  </div>
                  <div>
                    <h5 className="total-price">Title</h5>
                    <p className="total-price">P / Cor</p>
                  </div>
                </div>
                <div className="flex-grow-1">
                  <h5 className="total">$100</h5>
                </div>
              </div>
            </div>
            <div className="border-bottom py-4">
              <div className="d-flex justify-content-between align-items-center">
                <p className="total">Subtotal</p>
                <p className="total-price">$100</p>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <p className="mb-0 total">Frete</p>
                <p className="mb-0 total-price">$100</p>
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-center border-bottom py-4">
              <h4 className="total">Total</h4>
              <h5 className="total-price">$100</h5>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Checkout;