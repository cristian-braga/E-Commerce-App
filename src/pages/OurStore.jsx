import { useState } from "react";
import ReactStars from "react-rating-stars-component";
import BreadCrumb from "../components/BreadCrumb";
import Color from "../components/Color";
import Container from "../components/Container";
import Meta from "../components/Meta";
import ProductCard from "../components/ProductCard";

const OurStore = () => {
  const [grid, setGrid] = useState(4);

  return (
    <>
      <Meta title="Loja" />
      <BreadCrumb title="Loja" />
      <Container class1="store-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-3">
            <div className="filter-card mb-3">
              <h3 className="filter-title">Categorias</h3>
              <div>
                <ul className="ps-0">
                  <li>Smartwatch</li>
                  <li>Tv</li>
                  <li>Câmera</li>
                  <li>Laptop</li>
                </ul>
              </div>
            </div>
            <div className="filter-card mb-3">
              <h3 className="filter-title">Filtrar por</h3>
              <div>
                <h5 className="sub-title">Disponibilidade</h5>
                <div>
                  <div className="form-check">
                    <input type="checkbox" name="" id="" className="form-check-input" />
                    <label htmlFor="" className="form-check-label">Em estoque (1)</label>
                  </div>
                  <div className="form-check">
                    <input type="checkbox" name="" id="" className="form-check-input" />
                    <label htmlFor="" className="form-check-label">Sem estoque (0)</label>
                  </div>
                </div>
                <h5 className="sub-title">Preço</h5>
                <div className="d-flex align-items-center gap-10">
                  <div className="form-floating">
                    <input type="text" name="" id="De" className="form-control" placeholder="De" />
                    <label htmlFor="De">De</label>
                  </div>
                  <div className="form-floating">
                    <input type="text" name="" id="Até" className="form-control" placeholder="Até" />
                    <label htmlFor="Até">Até</label>
                  </div>
                </div>
                <h5 className="sub-title">Cores</h5>
                <div>
                  <Color />
                </div>
                <h5 className="sub-title">Tamanho</h5>
                <div>
                  <div className="form-check">
                    <input type="checkbox" name="" id="color-1" className="form-check-input" />
                    <label htmlFor="color-1" className="form-check-label">S (0)</label>
                  </div>
                  <div className="form-check">
                    <input type="checkbox" name="" id="color-2" className="form-check-input" />
                    <label htmlFor="color-2" className="form-check-label">M (0)</label>
                  </div>
                  <div className="form-check">
                    <input type="checkbox" name="" id="color-3" className="form-check-input" />
                    <label htmlFor="color-3" className="form-check-label">L (0)</label>
                  </div>
                  <div className="form-check">
                    <input type="checkbox" name="" id="color-4" className="form-check-input" />
                    <label htmlFor="color-4" className="form-check-label">XL (0)</label>
                  </div>
                  <div className="form-check">
                    <input type="checkbox" name="" id="color-5" className="form-check-input" />
                    <label htmlFor="color-5" className="form-check-label">XXL (0)</label>
                  </div>
                </div>
              </div>
            </div>
            <div className="filter-card mb-3">
              <h3 className="filter-title">Tags</h3>
              <div>
                <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">Headphone</span>
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">Laptop</span>
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">Smartphone</span>
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">Smartwatch</span>
                </div>
              </div>
            </div>
            <div className="filter-card mb-3">
              <h3 className="filter-title">Outros produtos</h3>
              <div>
                <div className="random-products d-flex mb-3">
                  <div className="w-50">
                    <img src="images/watch.jpg" alt="watch" className="img-fluid" />
                  </div>
                  <div className="w-50">
                    <h5>Smartwatch</h5>
                    <ReactStars
                      count={5}
                      size={24}
                      value={3}
                      edit={false}
                      activeColor="#ffd700"
                    />
                    <b>$ 300</b>
                  </div>
                </div>
                <div className="random-products d-flex">
                  <div className="w-50">
                    <img src="images/watch.jpg" alt="watch" className="img-fluid" />
                  </div>
                  <div className="w-50">
                    <h5>Smartwatch</h5>
                    <ReactStars
                      count={5}
                      size={24}
                      value={3}
                      edit={false}
                      activeColor="#ffd700"
                    />
                    <b>$ 300</b>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-9">
            <div className="filter-sort-grid mb-4">
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center gap-10">
                  <p className="mb-0" style={{ width: "150px" }}>Ordenar por:</p>
                  <select name="" id="" className="form-select">
                    <option value="manual">Destaque</option>
                    <option value="best-selling" selected="selected">Mais vendidos</option>
                    <option value="title-ascending">A-Z</option>
                    <option value="title-descending">Z-A</option>
                    <option value="price-ascending">Preço, menor para maior</option>
                    <option value="price-descending">Preço, maior para menor</option>
                    <option value="created-ascending">Data, antigo para novo</option>
                    <option value="created-descending">Data, novo para antigo</option>
                  </select>
                </div>
                <div className="d-flex align-items-center gap-10">
                  <p className="total-products mb-0">21 produtos</p>
                  <div className="d-flex align-items-center gap-10 grid">
                    <img src="images/gr4.svg" alt="grid" className="d-block img-fluid" onClick={() => { setGrid(4) }} />
                    <img src="images/gr3.svg" alt="grid" className="d-block img-fluid" onClick={() => { setGrid(3) }} />
                    <img src="images/gr2.svg" alt="grid" className="d-block img-fluid" onClick={() => { setGrid(2) }} />
                    <img src="images/gr.svg" alt="grid" className="d-block img-fluid" onClick={() => { setGrid(1) }} />
                  </div>
                </div>
              </div>
            </div>
            <div className="products-list pb-5">
              <ProductCard
                img_src="images/watch.jpg"
                brand="Havels"
                title="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
                price="$100.00"
                grid={grid}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default OurStore;
