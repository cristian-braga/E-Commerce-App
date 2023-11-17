import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import BlogCard from "../components/BlogCard";
import Container from "../components/Container";
import ProductCard from "../components/ProductCard";
import SpecialProducts from "../components/SpecialProducts";
import { services } from "../utils/Data";

const Home = () => {
  return (
    <>
      <Container class1="home-wrapper-1 py-5">
        <div className="row">
          <div className="col-6">
            <div className="main-banner position-relative">
              <img src="images/main-banner-1.jpg" alt="Main banner" className="img-fluid rounded-3" />
              <div className="main-banner-content position-absolute">
                <h4>SUPERCHARGED FOR PROS.</h4>
                <h5>iPad S13+ Pro.</h5>
                <p>De $999.00 or $41.62/mês.</p>
                <Link className="button">COMPRE AGORA</Link>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="d-flex flex-wrap justify-content-between align-items-center gap-10">
              <div className="small-banner position-relative">
                <img src="images/catbanner-01.jpg" alt="Cardbanner" className="img-fluid rounded-3" />
                <div className="small-banner-content position-absolute">
                  <h4>BEST SALE</h4>
                  <h5>Laptops Max</h5>
                  <p>Por $1699.00 <br /> ou $64.62/mês.</p>
                </div>
              </div>
              <div className="small-banner position-relative">
                <img src="images/catbanner-03.jpg" alt="Cardbanner" className="img-fluid rounded-3" />
                <div className="small-banner-content position-absolute">
                  <h4>NEW ARRIVAL</h4>
                  <h5>By IPad Air</h5>
                  <p>Por $599.00 <br /> ou $49.91/mês.</p>
                </div>
              </div>
              <div className="small-banner position-relative">
                <img src="images/catbanner-02.jpg" alt="Cardbanner" className="img-fluid rounded-3" />
                <div className="small-banner-content position-absolute">
                  <h4>15% OFF</h4>
                  <h5>Smartwatch 7</h5>
                  <p>Os mais recentes estilos e cores.</p>
                </div>
              </div>
              <div className="small-banner position-relative">
                <img src="images/catbanner-04.jpg" alt="Cardbanner" className="img-fluid rounded-3" />
                <div className="small-banner-content position-absolute">
                  <h4>FREE ENGRAVING</h4>
                  <h5>AirPods Max</h5>
                  <p>High-fidelity playback & ultra-low distortion</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="services d-flex justify-content-between align-items-center">
              {
                services?.map((i, j) => {
                  return (
                    <div key={j} className="d-flex align-items-center gap-15">
                      <img src={i.image} alt="services" />
                      <div>
                        <h6>{i.title}</h6>
                        <p className="mb-0">{i.tagline}</p>
                      </div>
                    </div>
                  );
                })
              }
            </div>
          </div>
        </div>
      </Container>
      <Container class1="home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="categories d-flex justify-content-between align-items-center flex-wrap">
              <div className="d-flex justify-content-around align-items-center gap-30">
                <div>
                  <h6>Câmeras</h6>
                  <p> 10 itens</p>
                </div>
                <img src="images/camera.jpg" alt="Camera" />
              </div>
              <div className="d-flex justify-content-around align-items-center gap-30">
                <div>
                  <h6>Music & Gaming</h6>
                  <p> 10 itens</p>
                </div>
                <img src="images/headphone.jpg" alt="Camera" />
              </div>
              <div className="d-flex justify-content-around align-items-center gap-30">
                <div>
                  <h6>Smart Tvs</h6>
                  <p> 10 itens</p>
                </div>
                <img src="images/tv.jpg" alt="Camera" />
              </div>
              <div className="d-flex justify-content-around align-items-center gap-30">
                <div>
                  <h6>Smart Watches</h6>
                  <p> 10 itens</p>
                </div>
                <img src="images/watch.jpg" alt="Camera" width="110" height="110" />
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="featured-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">
              Coleções em Destaque
            </h3>
          </div>
          <ProductCard
            img_src="images/watch.jpg"
            brand="Havels"
            title="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
            price="$100.00"
          />
          <ProductCard
            img_src="images/watch.jpg"
            brand="Havels"
            title="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
            price="$400.00"
          />
          <ProductCard
            img_src="images/watch.jpg"
            brand="Havels"
            title="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
            price="$200.00"
          />
          <ProductCard
            img_src="images/watch.jpg"
            brand="Havels"
            title="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
            price="$300.00"
          />
        </div>
      </Container>
      <Container class1="famous-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-3">
            <div className="famous-card position-relative">
              <img src="images/subbanner-01.webp" alt="watch" className="img-fluid" />
              <div className="famous-content position-absolute">
                <h5 className="text-white">Big Screen</h5>
                <h6 className="text-white">Smart Watch</h6>
                <p className="text-white">Por $399 ou $16.62/mês</p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card position-relative">
              <img src="images/subbanner-02.webp" alt="laptop" className="img-fluid" />
              <div className="famous-content position-absolute">
                <h5>Studio Display</h5>
                <h6>600 nits of brightness.</h6>
                <p>27-inch 5K Retina display</p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card position-relative">
              <img src="images/subbanner-03.webp" alt="smartphones" className="img-fluid" />
              <div className="famous-content position-absolute">
                <h5>Smartphones</h5>
                <h6>Smartphone 13 Pro.</h6>
                <p>Now in Green. De $999.00 ou $41.62/mês. por 24 mês. Footnote*</p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card position-relative">
              <img src="images/subbanner-04.webp" alt="speakers" className="img-fluid" />
              <div className="famous-content position-absolute">
                <h5>Home Speakers</h5>
                <h6>Room-filling sound.</h6>
                <p>De $699 ou $116.58/mês. por 12 mês.*</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="special-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">
              Coleção Especial
            </h3>
          </div>
          <div className="row">
            <SpecialProducts />
            <SpecialProducts />
            <SpecialProducts />
            <SpecialProducts />
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
            img_src="images/watch.jpg"
            brand="Havels"
            title="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
            price="$100.00"
          />
          <ProductCard
            img_src="images/watch.jpg"
            brand="Havels"
            title="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
            price="$400.00"
          />
          <ProductCard
            img_src="images/watch.jpg"
            brand="Havels"
            title="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
            price="$200.00"
          />
          <ProductCard
            img_src="images/watch.jpg"
            brand="Havels"
            title="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
            price="$300.00"
          />
        </div>
      </Container>
      <Container class1="marquee-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="card-wrapper marquee-inner-wrapper">
              <Marquee className="d-flex" gradient={true}>
                <div className="mx-4 w-25">
                  <img src="images/brand-01.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-02.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-03.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-04.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-05.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-06.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-07.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-08.png" alt="brand" />
                </div>
              </Marquee>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="blog-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">
              Nossa últimas novidades
            </h3>
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            <BlogCard img_src="images/blog-1.jpg" />
          </div>
          <div className="col-3">
            <BlogCard img_src="images/blog-1.jpg" />
          </div>
          <div className="col-3">
            <BlogCard img_src="images/blog-1.jpg" />
          </div>
          <div className="col-3">
            <BlogCard img_src="images/blog-1.jpg" />
          </div>
        </div>
      </Container>
    </>
  );
}

export default Home;