import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import Container from "../components/Container";

const Cart = () => {
  return (
    <>
      <Meta title="Carrinho" />
      <BreadCrumb title="Carrinho" />
      <Container class1="cart-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="cart-header d-flex justify-content-between align-items-center py-3">
              <h4 className="cart-col-1">Produto</h4>
              <h4 className="cart-col-2">Preço</h4>
              <h4 className="cart-col-3">Quantidade</h4>
              <h4 className="cart-col-4">Total</h4>
            </div>
            <div className="cart-data d-flex justify-content-between align-items-center py-3 mb-2">
              <div className="cart-col-1 d-flex align-items-center gap-15">
                <div className="w-25">
                  <img src="../images/watch.jpg" alt="watch" className="img-fluid" />
                </div>
                <div className="w-75">
                  <p>Title</p>
                  <p>Tamanho: P</p>
                  <p>Cor: Alguma</p>
                </div>
              </div>
              <div className="cart-col-2">
                <h5 className="price">$100</h5>
              </div>
              <div className="cart-col-3 d-flex align-items-center gap-15">
                <div>
                  <input type="number" name="" id="" min="1" max="10" className="form-control" />
                </div>
                <div>
                  <AiFillDelete className="text-danger" />
                </div>
              </div>
              <div className="cart-col-4">
                <h5 className="title">Title</h5>
              </div>
            </div>
            <div className="cart-data d-flex justify-content-between align-items-center py-3 mb-2">
              <div className="cart-col-1 d-flex align-items-center gap-15">
                <div className="w-25">
                  <img src="../images/watch.jpg" alt="watch" className="img-fluid" />
                </div>
                <div className="w-75">
                  <p>Title</p>
                  <p>Tamanho: P</p>
                  <p>Cor: Alguma</p>
                </div>
              </div>
              <div className="cart-col-2">
                <h5 className="price">$100</h5>
              </div>
              <div className="cart-col-3 d-flex align-items-center gap-15">
                <div>
                  <input type="number" name="" id="" min="1" max="10" className="form-control" />
                </div>
                <div>
                  <AiFillDelete className="text-danger" />
                </div>
              </div>
              <div className="cart-col-4">
                <h5 className="title">Title</h5>
              </div>
            </div>
            <div className="col-12 py-2 mt-4">
              <div className="d-flex justify-content-between align-items-baseline">
                <Link to="/product" className="button">Continuar Comprando</Link>
                <div className="d-flex flex-column align-items-end">
                  <h4>Sub total: $100</h4>
                  <p>O Frete será calculado ao final da compra</p>
                  <Link to="/checkout" className="button">Concluir</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Cart;