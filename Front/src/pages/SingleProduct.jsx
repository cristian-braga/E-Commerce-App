import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ProductCard from "../components/ProductCard";
import Color from "../components/Color";
import ReactStars from "react-rating-stars-component";
import { useState } from "react";
import ReactImageZoom from 'react-image-zoom';
import { TbGitCompare } from "react-icons/tb";
import { AiOutlineHeart } from "react-icons/ai";
import Container from "../components/Container";

const SingleProduct = () => {
  const props = { width: 400, height: 600, zoomWidth: 600, img: "../images/headphone.webp" };

  const [orderedProduct, setOrderedProduct] = useState(true);

  return (
    <>
      <Meta title="Nome do Produto" />
      <BreadCrumb title="Nome do Produto" />
      <Container class1="main-product-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-6">
            <div className="main-product-image">
              <div>
                <ReactImageZoom {...props} />
              </div>
            </div>
            <div className="other-product-images d-flex flex-wrap gap-15">
              <div>
                <img src="../images/headphone1.webp" alt="headphone" className="img-fluid" />
              </div>
              <div>
                <img src="../images/headphone2.webp" alt="headphone" className="img-fluid" />
              </div>
              <div>
                <img src="../images/headphone3.webp" alt="headphone" className="img-fluid" />
              </div>
              <div>
                <img src="../images/headphone4.webp" alt="headphone" className="img-fluid" />
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="main-product-details">
              <div className="border-bottom">
                <h3 className="title">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </h3>
              </div>
              <div className="border-bottom py-3">
                <p className="price">
                  $100
                </p>
                <div className="d-flex align-items-center gap-10">
                  <ReactStars
                    count={5}
                    size={24}
                    value={4}
                    edit={false}
                    activeColor="#ffd700"
                  />
                  <p className="mb-0 t-review">
                    (2) avaliações
                  </p>
                </div>
                <a href="#review" className="review-btn">Deixe um comentário</a>
              </div>
              <div className="py-3">
                <div className="d-flex align-items-center gap-10 my-2">
                  <h3 className="product-heading">Tipo: </h3>
                  <p className="product-data">Headphone</p>
                </div>
                <div className="d-flex align-items-center gap-10 my-2">
                  <h3 className="product-heading">Marca: </h3>
                  <p className="product-data">Havells</p>
                </div>
                <div className="d-flex align-items-center gap-10 my-2">
                  <h3 className="product-heading">Categoria:</h3>
                  <p className="product-data">Headphone</p>
                </div>
                <div className="d-flex align-items-center gap-10 my-2">
                  <h3 className="product-heading">Tags:</h3>
                  <p className="product-data">Headphone</p>
                </div>
                <div className="d-flex align-items-center gap-10 my-2">
                  <h3 className="product-heading">Disponibilidade:</h3>
                  <p className="product-data">Em estoque</p>
                </div>
                <div className="d-flex flex-column gap-10 mt-2 mb-3">
                  <h3 className="product-heading">Tamanho:</h3>
                  <div className="d-flex flex-wrap gap-15">
                    <span className="badge border border-1 border-secondary bg-white text-dark">P</span>
                    <span className="badge border border-1 border-secondary bg-white text-dark">M</span>
                    <span className="badge border border-1 border-secondary bg-white text-dark">G</span>
                  </div>
                </div>
                <div className="d-flex flex-column gap-10 mt-2 mb-3">
                  <h3 className="product-heading">Cor:</h3>
                  <Color />
                </div>
                <div className="d-flex flex-row align-items-center gap-15 mt-2 mb-3">
                  <h3 className="product-heading">Quantidade:</h3>
                  <div>
                    <input type="number" name="" id="" min="1" max="10" className="form-control" style={{ width: "70px" }} />
                  </div>
                  <div className="d-flex align-items-center gap-30 ms-5">
                    <button type="submit" className="button border-0">Adicionar</button>
                    <button className="button signup">Comprar</button>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <div>
                    <a href="/"><TbGitCompare className="fs-5 me-1" /> Comparar</a>
                  </div>
                  <div>
                    <a href="/"><AiOutlineHeart className="fs-5 me-1" /> Favoritos</a>
                  </div>
                </div>
                <div className="d-flex flex-column gap-10 my-3">
                  <h3 className="product-heading">Envio & Devolução</h3>
                  <p className="product-data">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam officiis saepe nisi voluptates alias laudantium quae quo esse deleniti id.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="description-wrapper home-wrapper-2 py-5">
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
      </Container>
      <Container class1="reviews-wrapper home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 id="review">Avaliações</h3>
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
                    <p className="mb-0 t-review">
                      (2) avaliações
                    </p>
                  </div>
                </div>
                {orderedProduct && (
                  <div>
                    <a href="/" className="text-dark text-decoration-underline">Deixe um comentário</a>
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
      </Container>
      <Container class1="popular-wrapper home-wrapper-2 py-5">
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
      </Container>
    </>
  );
}

export default SingleProduct;