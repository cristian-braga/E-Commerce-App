import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import Color from "../components/Color";

const CompareProduct = () => {
  return (
    <>
      <Meta title="Comparar Produtos" />
      <BreadCrumb title="Comparar Produtos" />
      <div className="compare-product-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="compare-product-card position-relative">
                <img src="images/cross.svg" alt="cross" className="cross img-fluid position-absolute" />
                <div className="product-card-image">
                  <img src="images/watch.jpg" alt="watch" />
                </div>
                <div className="compare-product-details">
                  <h5 className="title">Honor T1 7.0 1 GB RAM 8 GB ROM 7 Inch With Wi-Fi+3G Tablet</h5>
                  <h6 className="price my-3">$100</h6>
                  <div>
                    <div className="product-detail">
                      <h5>Marca</h5>
                      <p>Havels</p>
                    </div>
                    <div className="product-detail">
                      <h5>Tipo</h5>
                      <p>Smartwatch</p>
                    </div>
                    <div className="product-detail">
                      <h5>Disponibilidade</h5>
                      <p>Em estoque</p>
                    </div>
                    <div className="product-detail">
                      <h5>Cor</h5>
                      <Color />
                    </div>
                    <div className="product-detail">
                      <h5>Tamanho</h5>
                      <div className="d-flex gap-10">
                        <p>P</p>
                        <p>M</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="compare-product-card position-relative">
                <img src="images/cross.svg" alt="cross" className="cross img-fluid position-absolute" />
                <div className="product-card-image">
                  <img src="images/watch.jpg" alt="watch" />
                </div>
                <div className="compare-product-details">
                  <h5 className="title">Honor T1 7.0 1 GB RAM 8 GB ROM 7 Inch With Wi-Fi+3G Tablet</h5>
                  <h6 className="price my-3">$100</h6>
                  <div>
                    <div className="product-detail">
                      <h5>Marca</h5>
                      <p>Havels</p>
                    </div>
                    <div className="product-detail">
                      <h5>Tipo</h5>
                      <p>Smartwatch</p>
                    </div>
                    <div className="product-detail">
                      <h5>Disponibilidade</h5>
                      <p>Em estoque</p>
                    </div>
                    <div className="product-detail">
                      <h5>Cor</h5>
                      <Color />
                    </div>
                    <div className="product-detail">
                      <h5>Tamanho</h5>
                      <div className="d-flex gap-10">
                        <p>P</p>
                        <p>M</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CompareProduct;