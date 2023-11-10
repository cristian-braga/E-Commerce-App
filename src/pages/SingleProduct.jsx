import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ProductCard from "../components/ProductCard";
import ReactStars from "react-rating-stars-component";
import { useState } from "react";

const SingleProduct = () => {
  const [orderedProduct, setOrderedProduct] = useState(true);

  return (
    <>
      <Meta title="Nome do Produto" />
      <BreadCrumb title="Nome do Produto" />
      <div className="main-product-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6"></div>
            <div className="col-6"></div>
          </div>
        </div>
      </div>
      <section className="description-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h4>Descrição</h4>
              <div className="bg-white p-3">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, corporis. Iusto ullam saepe et aliquid quo dicta odit fugit ex odio cumque voluptatem, soluta, incidunt assumenda eum labore reiciendis ut.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="reviews-wrapper home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3>Avaliações</h3>
              <div className="review-inner-wrapper">
                <div className="review-head d-flex justify-content-between align-items-end">
                  <div>
                    <h4 className="mb-2">Avaliações dos clientes</h4>
                    <div className="d-flex align-items-center gap-10">
                      <ReactStars
                        count={5}
                        size={24}
                        value={4}
                        edit={false}
                        activeColor="#ffd700"
                      />
                      <p className="mb-0">
                        (2) avaliações
                      </p>
                    </div>
                  </div>
                  {orderedProduct && (
                    <div>
                      <a href="" className="text-dark text-decoration-underline">Deixe um comentário</a>
                    </div>
                  )}
                </div>
                <div className="review-form py-4">
                  <h4>Deixe um comentário</h4>
                  <form action="" className="d-flex flex-column gap-15">
                    <div>
                      <ReactStars
                        count={5}
                        size={24}
                        value={0}
                        edit={true}
                        activeColor="#ffd700"
                      />
                    </div>
                    <div>
                      <textarea name="" id="" rows="4" className="form-control w-100" placeholder="Comentário"></textarea>
                    </div>
                    <div className="d-flex justify-content-end">
                      <button className="button border-0">Enviar</button>
                    </div>
                  </form>
                </div>
                <div className="reviews mt-4">
                  <div className="review">
                    <div className="d-flex align-items-center gap-10">
                      <h6 className="mb-0">Alguém</h6>
                      <ReactStars
                        count={5}
                        size={24}
                        value={4}
                        edit={false}
                        activeColor="#ffd700"
                      />
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, quibusdam consequuntur. Quas nobis tempore quibusdam?
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="popular-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">
                Mais Populares
              </h3>
            </div>
            <ProductCard
              img_src="../images/watch.jpg"
              brand="Havels"
              title="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
              price="$100.00"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default SingleProduct;